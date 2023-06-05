import { Button } from "@mui/material";
import React from "react";
const { useNavigate } = require("react-router-dom");

export default function JournalEntry(props) {
    const navigate = useNavigate();

    return (
        <div>
            <h1>{props.title}</h1>
            <h4>{props.date}</h4>
            <p>{props.body}</p>
            <Button className={"btn"} onClick={() => navigate("/")}>
                Back
            </Button>
        </div>
    );
}
