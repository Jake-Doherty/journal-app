import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import "./SiteHeader.css";

export default function SiteHeader() {
    return (
        <Box component={"div"} className="header-wrapper">
            <Typography className={"site-header"} variant={"h1"}>
                Jake's Tech Journal
            </Typography>
            <IconButton className={"login-icon"}>
                <LoginIcon className={"login-icon"} />
            </IconButton>
        </Box>
    );
}
