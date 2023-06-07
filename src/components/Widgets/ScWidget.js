import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import { ExpandLess } from "@mui/icons-material";
import React from "react";
import "./ScWidget.css";

export default function ScWidget() {
    return (
        <>
            <Accordion disableGutters id="sc-widget">
                <AccordionSummary
                    expandIcon={
                        <ExpandLess
                            sx={{ color: "white", fontSize: "2.5rem" }}
                        />
                    }
                >
                    <Typography>SoundCloud Player</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <iframe
                        title="PhantomBluff"
                        width="100%"
                        height="300"
                        allow="autoplay"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1095446893&color=%23121819&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                    ></iframe>
                    <div
                        style={{
                            fontSize: "10px",
                            color: "#cccccc",
                            lineBreak: "anywhere",
                            wordBreak: "normal",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            fontFamily:
                                "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                            fontWeight: "100",
                        }}
                    >
                        <a
                            href="https://soundcloud.com/phantombluff"
                            title="PhantomBluff"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#cccccc", textDecoration: "none" }}
                        >
                            PhantomBluff
                        </a>{" "}
                        ·{" "}
                        <a
                            href="https://soundcloud.com/phantombluff/sets/personal-favorites"
                            title="Personal Favorites"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: "#cccccc", textDecoration: "none" }}
                        >
                            Personal Favorites
                        </a>
                    </div>
                </AccordionDetails>
            </Accordion>
        </>
    );
}
