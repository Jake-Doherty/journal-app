import { createContext, useContext, useEffect, useState } from "react";
import { client } from "../services/client.js";
import Cookies from "js-cookie";

// Get a cookie
import {
    getUser,
    signInUser,
    signUpUser,
    signOutUser,
} from "../services/fetch-utils.js";

const AccountContext = createContext();

const AccountProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        try {
            setLoading(true);
            const token = Cookies.get("sb-access-token");
            if (!token) {
                setUser(null);
            } else {
                console.log("use effect firing getting user");
                getUser().then((user) => setUser(user));
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }, []);

    const signUp = async () => {
        try {
            const user = await signUpUser(email, password);
            setUser(user);
        } catch (e) {
            console.log(e.message);
        }
    };

    const signIn = async () => {
        const maxAge = 60 * 60 * 24 * 7; // 1 week
        try {
            const user = await signInUser(email, password);
            const resp = await client.auth.getSession();
            console.log(resp.data.session.access_token);
            document.cookie = `sb-access-token=${resp.data.session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
            document.cookie = `sb-refresh-token=${resp.data.session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
            setUser(user);
        } catch (e) {
            console.log(e.message);
        }
    };

    const signOut = async () => {
        try {
            await signOutUser();
            setUser(null);
            Cookies.remove("sb-access-token");
            Cookies.remove("sb-refresh-token");
            localStorage.removeItem("sb-iuqhvjamxfzedbeomfgf-auth-token");
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <AccountContext.Provider
            value={{
                loading,
                user,
                setUser,
                email,
                setEmail,
                password,
                setPassword,
                signUp,
                signIn,
                signOut,
            }}
        >
            {children}
        </AccountContext.Provider>
    );
};

const useAccount = () => {
    const context = useContext(AccountContext);
    if (context === undefined) {
        throw new Error("useAccount must be used within a AccountProvider");
    }
    return context;
};

export { AccountProvider, useAccount };
