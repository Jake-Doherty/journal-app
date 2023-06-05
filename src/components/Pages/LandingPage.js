import React from "react";
import { Button } from "@mui/material";

export default function LandingPage({ navigate }) {
    return (
        <div>
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
