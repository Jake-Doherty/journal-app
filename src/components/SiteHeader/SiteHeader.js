import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import "./SiteHeader.css";

export default function SiteHeader() {
    return (
        <Box component={"div"} className="header-wrapper">
            <Paper className={"header-paper"}>
                <Typography className={"site-header"} variant={"h1"}>
                    Jake's Tech Journal
                </Typography>
            </Paper>
        </Box>
    );
}
