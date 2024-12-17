import React from "react";
import { Box, Container, Typography } from "@mui/material";
import PageHeader from "../general/PageHeader";
import ROUTES from "../routers/routerModel";
import { useNavigate } from "react-router-dom";

export default function CustomMapPage() {
    const navigate = useNavigate();

    const handleZoneClick = (location) => {
        navigate(`${ROUTES.EXHIBITS}?location=${location}`);
    };

    return (
        <Container>
            <PageHeader title="Interactive Zoo Map" />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mt: 4,
                    mb: 4,
                    position: "relative",
                    height: "600px",
                    backgroundImage: `url('/images/map.jpeg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 4,
                    boxShadow: 3,
                }}
            >
                <svg
                    viewBox="0 0 800 600"
                    style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "800px",

                    }}
                >
                    {/* Africa Zone */}
                    <rect
                        x="100"
                        y="200"
                        width="150"
                        height="100"
                        fill="#FFCC00"
                        onClick={() => handleZoneClick("Africa")}
                        style={{ cursor: "pointer" }}
                    />
                    <text
                        x="175"
                        y="250"
                        textAnchor="middle"
                        fill="white"
                        fontSize="16px"
                        fontWeight="bold"
                        style={{ pointerEvents: "none" }}
                    >
                        Africa
                    </text>

                    {/* Asia Zone */}
                    <rect
                        x="300"
                        y="150"
                        width="200"
                        height="100"
                        fill="#FF7043"
                        onClick={() => handleZoneClick("Asia")}
                        style={{ cursor: "pointer" }}
                    />
                    <text
                        x="400"
                        y="200"
                        textAnchor="middle"
                        fill="white"
                        fontSize="16px"
                        fontWeight="bold"
                        style={{ pointerEvents: "none" }}
                    >
                        Asia
                    </text>

                    {/* Europe Zone */}
                    <rect
                        x="550"
                        y="100"
                        width="150"
                        height="75"
                        fill="#4DB6AC"
                        onClick={() => handleZoneClick("Europe")}
                        style={{ cursor: "pointer" }}
                    />
                    <text
                        x="625"
                        y="140"
                        textAnchor="middle"
                        fill="white"
                        fontSize="16px"
                        fontWeight="bold"
                        style={{ pointerEvents: "none" }}
                    >
                        Europe
                    </text>

                    {/* North America Zone */}
                    <rect
                        x="100"
                        y="50"
                        width="150"
                        height="75"
                        fill="#29B6F6"
                        onClick={() => handleZoneClick("North America")}
                        style={{ cursor: "pointer" }}
                    />
                    <text
                        x="175"
                        y="90"
                        textAnchor="middle"
                        fill="white"
                        fontSize="16px"
                        fontWeight="bold"
                        style={{ pointerEvents: "none" }}
                    >
                        North America
                    </text>

                    {/* South America Zone */}
                    <rect
                        x="100"
                        y="350"
                        width="150"
                        height="100"
                        fill="#81C784"
                        onClick={() => handleZoneClick("South America")}
                        style={{ cursor: "pointer" }}
                    />
                    <text
                        x="175"
                        y="400"
                        textAnchor="middle"
                        fill="white"
                        fontSize="16px"
                        fontWeight="bold"
                        style={{ pointerEvents: "none" }}
                    >
                        South America
                    </text>

                    {/* Australia Zone */}
                    <rect
                        x="500"
                        y="400"
                        width="150"
                        height="100"
                        fill="#FFD54F"
                        onClick={() => handleZoneClick("Australia")}
                        style={{ cursor: "pointer" }}
                    />
                    <text
                        x="575"
                        y="450"
                        textAnchor="middle"
                        fill="white"
                        fontSize="16px"
                        fontWeight="bold"
                        style={{ pointerEvents: "none" }}
                    >
                        Australia
                    </text>

                    {/* Antarctica Zone */}
                    <rect
                        x="300"
                        y="500"
                        width="200"
                        height="75"
                        fill="#B3E5FC"
                        onClick={() => handleZoneClick("Antarctica")}
                        style={{ cursor: "pointer" }}
                    />
                    <text
                        x="400"
                        y="540"
                        textAnchor="middle"
                        fill="white"
                        fontSize="16px"
                        fontWeight="bold"
                        style={{ pointerEvents: "none" }}
                    >
                        Antarctica
                    </text>
                </svg>
            </Box>
            <Typography align="center" variant="body2" color="textSecondary">
                Click on a zone to explore exhibits from that region.
            </Typography>
        </Container>
    );
}
