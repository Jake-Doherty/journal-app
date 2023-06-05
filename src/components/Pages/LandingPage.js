import React from "react";
import { Button } from "@mui/material";
import "./LandingPage.css";

export default function LandingPage({ navigate }) {
    return (
        <div id={"btn-container"}>
            <Button
                className={"btn"}
                variant="outlined"
                onClick={() => navigate("/day1")}
            >
                day1
            </Button>
            <Button
                className={"btn"}
                variant="outlined"
                onClick={() => navigate("/day2")}
            >
                day2
            </Button>
            <Button
                className={"btn"}
                variant="outlined"
                onClick={() => navigate("/day3")}
            >
                day3
            </Button>
        </div>
    );
}
