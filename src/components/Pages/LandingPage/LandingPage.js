import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import "./LandingPage.css";
import JournalEntriesList from "../JournalEntry/JournalEntriesList.js";
import { useAccount } from "../../../context/AccountContext.js";

export default function LandingPage() {
    const navigate = useNavigate();
    const { user, signOut } = useAccount();

    return (
        <Box component={"div"} className={"landing-page-container"}>
            <JournalEntriesList />
            <Box>
                {!user ? (
                    <IconButton
                        onClick={() => navigate("/auth")}
                        className={"login-icon"}
                    >
                        <LoginIcon className={"login-icon"} />
                    </IconButton>
                ) : (
                    <IconButton onClick={signOut} className={"login-icon"}>
                        <LogoutIcon className={"login-icon"} />
                    </IconButton>
                )}
            </Box>
        </Box>
    );
}
