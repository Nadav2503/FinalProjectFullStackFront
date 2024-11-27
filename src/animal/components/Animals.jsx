import React from "react";
import AnimalCard from "./card/AnimalCard";
import { Container } from "@mui/material";

export default function Animals() {
    return (
        <Container sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }}>
            {

                <AnimalCard

                />

            }
        </Container>
    );
}
