import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import JournalEntry from "./components/Pages/JournalEntry.js";
import LandingPage from "./components/Pages/LandingPage.js";
import { Box } from "@mui/material";
const { entries } = require("../src/journal-entries/6-2023.json");

function App() {
    return (
        <Box component={"div"} className="App">
            <Routes>
                <Route path="/" element={<LandingPage {...{ entries }} />} />

                {entries.map(({ id, date, title, body }) => {
                    return (
                        <Route
                            key={id}
                            path={`/${date}`}
                            element={
                                <JournalEntry
                                    title={title}
                                    date={date}
                                    body={body}
                                />
                            }
                        />
                    );
                })}
            </Routes>
        </Box>
    );
}

export default App;
