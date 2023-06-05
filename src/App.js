import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import JournalEntry from "./components/Pages/JournalEntry.js";
import LandingPage from "./components/Pages/LandingPage.js";
import { Box, Typography } from "@mui/material";
import ScWidget from "./components/Widgets/ScWidget.js";
const { useNavigate } = require("react-router-dom");

function App() {
    const navigate = useNavigate();
    return (
        <div className="App">
            <Box>
                <Typography className={"site-header"} variant={"h1"}>
                    Jake's Tech Journal
                </Typography>
                <Typography className={"site-header-top"} variant={"h1"}>
                    Jake's Tech Journal
                </Typography>
            </Box>
            <Routes>
                <Route
                    path="/"
                    element={
                        <LandingPage
                            navigate={navigate}
                            text={"landing page"}
                        />
                    }
                />
                <Route
                    path="/day1"
                    element={
                        <JournalEntry
                            navigate={navigate}
                            title={"day1"}
                            date={"2023-06-04"}
                            body={`well... it's 11 0'clock at night and of course I'm starting yet another project. I'm feeling confident this will be something I follow through with some consistency. More structure and maybe some fun stuff will be added to the site to keep me entertained and motivated. I'm excited to see where this goes, and what these pages will hold!
                            `}
                        />
                    }
                />
                <Route
                    path="/day2"
                    element={
                        <JournalEntry
                            navigate={navigate}
                            title={"day2"}
                            date={"2023-06-05"}
                            body={`Heading up to Portland today while my wife gets a massage, looking forward to getting some work done in a coffee shop, and enjoying the city. I'm hoping to get some more work done on this site, and maybe even get some more work done on my other project. Should have taken advantage of the coffee shops while I lived up there...Update: ended up staying home and taking care of some chores, but I did get some work done on the site.`}
                        />
                    }
                />
                <Route
                    path="/day3"
                    element={
                        <JournalEntry
                            navigate={navigate}
                            title={"day3"}
                            date={"2023-06-06"}
                            body={``}
                        />
                    }
                />
            </Routes>

            <ScWidget />
        </div>
    );
}

export default App;
