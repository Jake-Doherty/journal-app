import { Box, Typography } from "@mui/material";
import React from "react";

export default function SiteHeader() {
    return (
        <Box component={"div"}>
            <Typography className={"site-header"} variant={"h1"}>
                Jake's Tech Journal
            </Typography>
            <Typography className={"site-header-top"} variant={"h1"}>
                Jake's Tech Journal
            </Typography>
        </Box>
    );
}
