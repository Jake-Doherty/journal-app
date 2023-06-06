import { Box, Button, Typography } from "@mui/material";
import React from "react";
import "./JournalEntry.css";

const { useNavigate } = require("react-router-dom");

export default function JournalEntry({ title, date, body }) {
    const navigate = useNavigate();

    return (
        <Box className={"journal-entry"}>
            <Typography variant={"h3"}>{title}</Typography>
            <Typography variant={"h6"}>{date}</Typography>
            <Typography className={"entry-body"} variant={"p"}>
                {body}
            </Typography>
            <Button className={"btn"} onClick={() => navigate("/")}>
                Back
            </Button>
        </Box>
    );
}
