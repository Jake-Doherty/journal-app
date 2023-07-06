import { Box, Button, ButtonBase, Container, InputBase } from "@mui/material";
import React, { useState } from "react";
import "./Auth.css";
import { useAccount } from "../../../context/AccountContext.js";

export default function Auth() {
    const [authType, setAuthType] = useState("signIn");

    const { user, email, setEmail, password, setPassword, signIn, signUp } =
        useAccount();

    const handleChangeAuthType = () => {
        setAuthType(authType === "signIn" ? "signUp" : "signIn");
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
        console.log(email, password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authType === "signIn" ? signIn() : signUp();
    };

    if (user) {
        window.location.assign("/");
    }

    return (
        <Box className={"auth-wrapper"}>
            <Container maxWidth={"xs"}>
                <Box
                    id="auth-form"
                    component={"form"}
                    onSubmit={(e) => e.preventDefault()}
                >
                    <ButtonBase onClick={handleChangeAuthType}>
                        {authType === "signIn"
                            ? "click here to change to sign up."
                            : "click here to change to sign in."}
                    </ButtonBase>
                    <InputBase
                        fullWidth
                        className="auth-input email"
                        name="email"
                        placeholder="Username"
                        value={email}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <InputBase
                        fullWidth
                        className="auth-input password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <Button onClick={handleSubmit} fullWidth variant="outline">
                        Submit
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
