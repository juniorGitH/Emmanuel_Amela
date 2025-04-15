/**
 * About component
 *
 * Space for you to describe more about yourself.
 */
import React from "react";
/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/fondo-tecnologia.jpg";
const imageAltText = "purple and blue abstract background";
/**
 * Sort description that expands on your title on the Home component.
 */
const description =
    "I'm a passionate software engineer, Microsoft Learn Student Ambassador, and a .NET and AI enthusiast. I enjoy building impactful full-stack applications and innovative solutions that solve real-world problems.";
/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
    "RESTful API development with .NET Web API and C#",
    "React and API consumption",
    "JWT authentication and authorization",
    "SQL (MySQL, SQL Server) and database design",
    "Clean architecture and software design patterns",
    "Machine learning with Python and Scikit-learn",
    "CI/CD using GitHub Actions and Azure DevOps",
    "Docker and Azure cloud deployment",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
    "I believe in using technology for good. I am committed to continuous learning and sharing knowledge within my community. My goal is to build intelligent and accessible systems that empower people across Africa and beyond.";

const About = () => {
    return (
        <section className="padding" id="about">
            <img
                className="background"
                src={image}
                alt={imageAltText}
                style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover"
                }}
            />
            <div
                style={{
                    backgroundColor: "white",
                    width: "90%",
                    maxWidth: "1000px",
                    padding: "2rem",
                    margin: "3rem auto",
                    textAlign: "center",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "8px",
                }}
            >
                <h2 style={{ fontSize: "calc(1.5rem + 1vw)" }}>About Myself</h2>
                <p className="large" style={{ fontSize: "calc(1rem + 0.5vw)" }}>{description}</p>
                <hr style={{ margin: "2rem auto", width: "80%" }} />
                <div
                    style={{
                        textAlign: "left",
                        margin: "2rem auto",
                        maxWidth: "800px"
                    }}
                >
                    <ul
                        style={{
                            columns: "auto 2",
                            columnGap: "3rem",
                            fontSize: "calc(0.9rem + 0.4vw)",
                            padding: "0 1rem",
                            listStylePosition: "inside"
                        }}
                    >
                        {skillsList.map((skill) => (
                            <li key={skill} style={{ marginBottom: "0.75rem" }}>{skill}</li>
                        ))}
                    </ul>
                </div>
                <hr style={{ margin: "2rem auto", width: "80%" }} />
                <p style={{
                    padding: "1rem",
                    fontSize: "calc(0.9rem + 0.4vw)",
                    maxWidth: "800px",
                    margin: "0 auto"
                }}>
                    {detailOrQuote}
                </p>
            </div>
        </section>
    );
};

export default About;