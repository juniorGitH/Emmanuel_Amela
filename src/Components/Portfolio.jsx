/**
 * Portfolio component
 *
 * Highlights some of Emmanuel AMELA's creations and projects.
 * These include .NET workshops, hackathons, web apps, and more.
 */
import React, { useState, useEffect } from "react";
import image from "../images/design-desk.jpeg"; // Tu peux remplacer par une image de ton choix
const imageAltText = "Laptop and coding books on a desk";

/**
 * Project list
 *
 * Liste des projets réels d'Emmanuel AMELA.
 */
const projectList = [
    {
        title: "Workshop .NET C# - RESTful API",
        description:
            "I led an online workshop titled 'Mastering the Basics of RESTful API with .NET C# (Web API)' on December 28, 2024. I handled everything from the presentation to the live coding session.",
        url: "https://mvp.microsoft.com/fr-FR/events/47078",
    },
    {
        title: "Accounting Application - CompaPlus",
        description:
            "A personal accounting management project built with ASP.NET Web API and React, featuring a full set of tools such as journal entries, ledger, balance sheet, income statement, import/export, and more.",
        url: "https://comptaplus-app.azurewebsites.net", // Replace if the repo is private or hosted elsewhere
    },
    {
        title: "International Hackathon – Quantum Computing",
        description:
            "Participated in the 12th Annual International Hackathon for Social Good, contributing to a quantum computing project with Quantum Arise in Lomé.",
        url: "https://hackathon.nyuad.nyu.edu/year/2024/", // Indicative link, replace if you have a better one
    },
    {
        title: "Microsoft Learn Student Ambassador Activities",
        description:
            "As a Microsoft Learn Student Ambassador, I have organized and participated in multiple events and tech workshops, promoted student engagement in technology, and contributed to the global tech community through mentorship and knowledge sharing.",
        url: "https://mvp.microsoft.com/fr-FR/studentambassadors/profile/8a9ab462-afce-4e4c-b222-abc409bac550",
    }
];

    

const Portfolio = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };

        // Initialisation
        handleResize();

        // Événement de redimensionnement
        window.addEventListener('resize', handleResize);

        // Nettoyage
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section
            className="padding"
            id="portfolio"
            style={{
                padding: "2rem 1rem",
                marginTop: "2rem"
            }}
        >
            <h2 style={{
                textAlign: "center",
                fontSize: isMobile ? "1.75rem" : "2.25rem",
                marginBottom: isMobile ? "1.5rem" : "2rem"
            }}>
                Portfolio
            </h2>

            <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "2rem" : "3rem",
                paddingTop: isMobile ? "1rem" : "3rem"
            }}>
                {/* Image à gauche sur desktop, en haut sur mobile */}
                <div style={{
                    maxWidth: isMobile ? "100%" : isTablet ? "35%" : "40%",
                    alignSelf: "center",
                    marginBottom: isMobile ? "1rem" : "0"
                }}>
                    <img
                        src={image}
                        style={{
                            height: "auto",
                            width: "100%",
                            objectFit: "cover",
                            borderRadius: "8px",
                            boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
                        }}
                        alt={imageAltText}
                    />
                </div>

                {/* Grille de projets */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "1fr 1fr",
                    gap: "1.5rem",
                    width: isMobile ? "100%" : "auto",
                    flex: "1"
                }}>
                    {projectList.map((project) => (
                        <div
                            key={project.title}
                            style={{
                                backgroundColor: "#f9f9f9",
                                borderRadius: "8px",
                                padding: "1.25rem",
                                boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                height: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                                ":hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: "0 8px 15px rgba(0,0,0,0.1)"
                                }
                            }}
                        >
                            <div>
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        textDecoration: "none",
                                        color: "#222",
                                        transition: "color 0.2s ease"
                                    }}
                                >
                                    <h3 style={{
                                        marginTop: "0",
                                        marginBottom: "1rem",
                                        fontSize: isMobile ? "1.2rem" : "1.35rem",
                                        lineHeight: "1.3",
                                        fontWeight: "600"
                                    }}>
                                        {project.title}
                                    </h3>
                                </a>
                                <p style={{
                                    fontSize: "0.95rem",
                                    lineHeight: "1.5",
                                    color: "#444",
                                    margin: "0"
                                }}>
                                    {project.description}
                                </p>
                            </div>

                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: "inline-block",
                                    marginTop: "1rem",
                                    padding: "0.5rem 0",
                                    fontSize: "0.9rem",
                                    color: "#0066cc",
                                    fontWeight: "500",
                                    textDecoration: "none"
                                }}
                            >
                                Voir le projet →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;