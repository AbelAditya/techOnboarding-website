import React from "react";

import image from "../images/what-background-study-how-to-write-1200x900.jpg";

const imageAltText = "desktop with books and laptop";

const educationList = [
    {
      title: "Kendriya Vidyalaya",
      description: "Studied in various Schools in different States accross the Country, acquiring the blend of cultural values alongside academic knowledge",
      score: "Percentage: 95.6%",
      url: "https://kvsangathan.nic.in/",
      size: "maxHeight: 30%"
    },
    {
      title: "Vellore Institute of Technology",
      description: "Pursuing Bachelor of Technology in Computer Science Engineering with specialization in Artificial Intelligence and Robotics",
      score: "CGPA: 8.94",
      url: "https://chennai.vit.ac.in/",
      size: "maxHeight: 40%"
    },
  ];

const Education = () => {
    return(
        <section className="padding" id="education">
            <h2 style={{ textAlign: "center" }}>Education</h2>
            <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
                <div className="container">
                    {educationList.map((project) => (
                        <div className="box" key={project.title} style={{maxHeight: "50%"}}>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
                            </a>
                            <p className="small">{project.description}</p>
                            <p className="small">{project.score}</p>
                        </div>
                    ))}
                </div>
                <div style={{ maxWidth: "40%", alignSelf: "center" }}>
                    <img
                        src={image}
                        style={{ height: "90%", width: "100%", objectFit: "cover", animation: "1s ease-out 0s 1 slideIn" }}
                        alt={imageAltText}
                    />
                </div>
            </div>
        </section>
    )
}

export default Education;