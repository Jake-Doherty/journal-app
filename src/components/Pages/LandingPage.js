import React from "react";
import { Button, Box } from "@mui/material";
import "./LandingPage.css";
import SiteHeader from "../SiteHeader.js";
const { useNavigate } = require("react-router-dom");

export default function LandingPage({ entries }) {
    const navigate = useNavigate();
    return (
        <>
            <SiteHeader />
            <Box component={"div"} id={"btn-container"}>
                {entries.map(({ id, date, title }) => {
                    return (
                        <Button
                            key={id}
                            className={"btn"}
                            variant="outlined"
                            onClick={() => navigate(`/${date}`)}
                        >
                            {title}
                        </Button>
                    );
                })}
            </Box>
        </>
    );
}
