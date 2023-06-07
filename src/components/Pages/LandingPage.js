import React from "react";
import { Button, Box } from "@mui/material";
import "./LandingPage.css";
import SiteHeader from "../SiteHeader.js";
import ScWidget from "../Widgets/ScWidget.js";
const { useNavigate } = require("react-router-dom");

export default function LandingPage({ entries }) {
    const navigate = useNavigate();
    return (
        <Box component={"div"} className={"landing-page-container"}>
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
            <ScWidget />
        </Box>
    );
}
