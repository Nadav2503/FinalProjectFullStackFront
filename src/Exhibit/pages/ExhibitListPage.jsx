import React from "react";
import { Container } from "@mui/material";
import PageHeader from "../../general/PageHeader";

export default function ExhibitListPage() {
    return (
        <Container>
            {/* Header Section */}
            <PageHeader
                title="Exhibits at Our Zoo"
                subtitle="Browse the various exhibits and discover the incredible wildlife that calls our zoo home." />

        </Container>
    );
}
