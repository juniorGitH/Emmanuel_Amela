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
        title: "Workshop .NET C# - API RESTful",
        description:
            "J'ai animé un atelier en ligne intitulé 'Maîtriser les bases de l'API RESTful avec .NET C# (Web API)' le 28 décembre 2024. J'ai tout géré, de la présentation à la session de codage.",
        url: "https://mvp.microsoft.com/fr-FR/activities/236765",
    },
    {
        title: "Application Comptable - CompaPlus",
        description:
            "Projet personnel de gestion comptable avec ASP.NET Web API et React, incluant des fonctionnalités complètes comme le journal, le grand livre, le bilan, l'état de résultat, l'import/export, etc.",
        url: "https://comptaplus-app.azurewebsites.net", // Remplace si le dépôt est privé ou autre
    },
    {
        title: "Hackathon International – Quantum Computing",
        description:
            "Participation à la 12ème édition du Hackathon International for Social Good, en contribuant à un projet sur le calcul quantique avec Quantum Arise à Lomé.",
        url: "https://hackathon.nyuad.nyu.edu/year/2024/", // Lien indicatif, remplace par un article ou autre ressource
    },
    {
        title: "Physics Without Frontiers – Togo 2024",
        description:
            "J'ai assisté à cette école organisée par ICTP à l'Université de Lomé, explorant les outils utilisés par les physiciens (ex: Quantum ESPRESSO) et les opportunités de carrière en physique.",
        url: "https://quantum-arise.com/events", // Peut être remplacé par un lien de ton post ou une photo
    },
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