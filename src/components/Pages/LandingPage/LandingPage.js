import React from "react";
import { Button, Box, Container } from "@mui/material";
import "./LandingPage.css";
import SiteHeader from "../../SiteHeader/SiteHeader.js";
import ScWidget from "../../Widgets/ScWidget.js";
const {
    useNavigate,
    // useParams
} = require("react-router-dom");

export default function LandingPage({ entries }) {
    const navigate = useNavigate();
    // const { date } = useParams();
    return (
        <Box component={"div"} className={"landing-page-container"}>
            <SiteHeader />
            <Box max component={"div"}>
                <Container maxWidth={"md"} id={"btn-container"}>
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
                </Container>
            </Box>
            {/* <ScWidget /> */}
        </Box>
    );
}
