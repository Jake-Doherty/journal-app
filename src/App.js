import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import JournalEntry from "./components/Pages/JournalEntry/JournalEntry.js";
import LandingPage from "./components/Pages/LandingPage/LandingPage.js";
import { Box, LinearProgress } from "@mui/material";
import SiteHeader from "./components/SiteHeader/SiteHeader.js";
import Auth from "./components/Pages/Auth/Auth.js";
import { useAccount } from "./context/AccountContext.js";
const { entries } = require("../src/journal-entries/6-2023.json");

function App() {
    const { loading } = useAccount();
    return (
        <Box component={"div"} className="App">
            <SiteHeader />
            {!loading ? (
                <Routes>
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/" element={<LandingPage />} />
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
            ) : (
                <>
                    <LinearProgress
                        sx={{
                            position: "sticky",
                            top: "50%",
                            rotate: "0deg",
                            opacity: "0.5",
                        }}
                    />
                    <LinearProgress
                        sx={{
                            position: "sticky",
                            top: "50%",
                            rotate: "30deg",
                            opacity: "0.5",
                        }}
                    />
                    <LinearProgress
                        sx={{
                            position: "sticky",
                            top: "50%",
                            rotate: "60deg",
                            opacity: "0.5",
                        }}
                    />
                    <LinearProgress
                        sx={{
                            position: "sticky",
                            top: "50%",
                            rotate: "90deg",
                            opacity: "0.5",
                        }}
                    />
                    <LinearProgress
                        sx={{
                            position: "sticky",
                            top: "50%",
                            rotate: "120deg",
                            opacity: "0.5",
                        }}
                    />
                    <LinearProgress
                        sx={{
                            position: "sticky",
                            top: "50%",
                            rotate: "150deg",
                            opacity: "0.5",
                        }}
                    />
                    <LinearProgress
                        sx={{
                            position: "sticky",
                            top: "50%",
                            rotate: "180deg",
                            opacity: "0.5",
                        }}
                    />
                    <LinearProgress
                        sx={{
                            position: "sticky",
                            top: "50%",
                            rotate: "210deg",
                            opacity: "0.5",
                        }}
                    />
                    <LinearProgress
                        sx={{
                            position: "sticky",
                            top: "50%",
                            rotate: "240deg",
                            opacity: "0.5",
                        }}
                    />
                    <LinearProgress
                        sx={{
                            position: "sticky",
                            top: "50%",
                            rotate: "270deg",
                            opacity: "0.5",
                        }}
                    />
                    <LinearProgress
                        sx={{
                            position: "sticky",
                            top: "50%",
                            rotate: "300deg",
                            opacity: "0.5",
                        }}
                    />
                    <LinearProgress
                        sx={{
                            position: "sticky",
                            top: "50%",
                            rotate: "330deg",
                            opacity: "0.5",
                        }}
                    />
                </>
            )}
        </Box>
    );
}

export default App;
