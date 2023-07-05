import { client } from "./client";

export const getUser = () => {
    console.log("get user function firing");
    return client.auth.getUser();
};

export const signUpUser = async (email, password) => {
    console.log("sign up user function firing");
    return await client.auth.signUp({
        email,
        password,
    });
};

export const signInUser = async (email, password) => {
    console.log("sign in user function firing");
    return await client.auth.signInWithPassword({
        email,
        password,
    });
};

export const signOutUser = async () => {
    console.log("sign out user function firing");
    return await client.auth.signOut();
};

// module.exports = { getUser, signUpUser, signInUser, signOutUser };
