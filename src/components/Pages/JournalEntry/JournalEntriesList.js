import { Box, Button, Container, Grid, List } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const { entries } = require("../../../journal-entries/6-2023.json");

export default function JournalEntriesList() {
    const navigate = useNavigate();
    return (
        <Box component={"div"}>
            <Container maxWidth={"xl"} sx={{ height: "100%" }}>
                <List
                    id={"entry-list"}
                    sx={{
                        "& ul": { padding: 0 },
                    }}
                >
                    <Grid
                        id={"btn-container"}
                        container
                        rowSpacing={1}
                        columnSpacing={1}
                    >
                        {entries.map(({ id, date, title }) => {
                            return (
                                <Grid
                                    key={id}
                                    item
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                >
                                    <Button
                                        className={"btn"}
                                        variant="outlined"
                                        onClick={() => navigate(`/${date}`)}
                                    >
                                        {title}
                                    </Button>
                                </Grid>
                            );
                        })}
                    </Grid>
                </List>
            </Container>
        </Box>
    );
}
