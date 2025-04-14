/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import logo from "../images/logo.png";

const Header = () => {
    return (
        <div
            style={{
                position: "fixed",
                display: "flex",
                background: "rgba(255,255,255,0.75)",
                padding: "1rem",
                top: 0,
                width: "100%",
                zIndex: 10,
            }}
        >
            {/* Logo à gauche */}
            <div style={{ display: "flex", alignItems: "center" }}>
            <a href="#home"><img
                    src={logo}
                    alt="Logo"
                    style={{ height: "40px" }}
                />
            </a>
            </div>
            
            {/* Navigation links au centre */}
            <div style={{ 
                display: "flex", 
                gap: "2rem", 
                justifyContent: "center",
                alignItems: "center",
                flex: 1 
            }}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#footer">Contact</a>
            </div>
        </div>
    );
};

export default Header;