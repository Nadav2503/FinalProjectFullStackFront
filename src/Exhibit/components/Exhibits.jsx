import React from "react";
import ExhibitCard from "./card/ExhibitCard";
import { Container } from "@mui/material";

export default function Exhibits({ exhibits, handleDelete, handleEditExhibit }) {

    return (
        <Container sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 1 }
        }>
            {
                exhibits.map((exhibit) => (
                    <ExhibitCard
                        exhibit={exhibit}
                        key={exhibit._id}
                        handleDelete={handleDelete}
                        handleEditExhibit={handleEditExhibit}
                    />
                ))
            }
        </Container>
    );
}