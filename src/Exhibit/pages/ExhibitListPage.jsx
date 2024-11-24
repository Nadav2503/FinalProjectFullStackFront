import React from "react";
import { Container } from "@mui/material";
import PageHeader from "../../general/PageHeader";
import Loader from "../../general/Loader";
import Error from "../../general/Error";
import ExhibitFeedback from "../components/ExhibitFeedback";

export default function ExhibitListPage() {
    return (
        <Container>
            {/* Header Section */}
            <PageHeader
                title="Exhibits at Our Zoo"
                subtitle="Browse the various exhibits and discover the incredible wildlife that calls our zoo home." />
            {/* Content Section */}
            {isLoading && <Loader />} {/* Show Loader while fetching data */}
            {error && <Error errorMessage={error} />} {/* Show Error if there's an issue */}
            {!isLoading && !error && (
                <ExhibitFeedback exhibits={exhibits} isLoading={isLoading} error={error} />
            )}
        </Container>
    );
}
