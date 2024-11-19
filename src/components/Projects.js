import React from "react";
import "./CSS/Project.css";

// Array of project objects
const projects = [
  {
    title: "Pokedex App",
    description: `
      Within this project, I was responsible for both the front and back end development. 
      Written in HTML, CSS, and JavaScript, the Pokedex App utilizes the PokeAPI to fetch data for Pokémon. 
      Users can search for a Pokémon to view its stats or click on a Pokémon button to see additional details. 
      This app highlights my skills in API integration and responsive design.`,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS"],
    imageUrl: "./img/Pokedex.png",
    projectLink: "https://urenami.github.io/Pokedex-app/",
  },
  {
    title: "Meet App",
    description: `
      This is an app built using React on the frontend, and AWS Lambda on the backend. 
      It displays a list of events, which are fetched from the Google Calendar API, 
      and provides filters to narrow down events by city or number of events. 
      This project demonstrates my ability to integrate cloud services and third-party APIs into a functional application.`,
    technologies: [
      "React",
      "AWS Lambda",
      "Google OAuth",
      "Recharts",
      "Jest & React Testing Library",
      "Puppeteer",
    ],
    imageUrl: "./img/meetapp.png",
    projectLink: "https://urenami.github.io/meet/",
  },
  {
    title: "Chat App",
    description: `
      I created this chat app using React Native. It includes features for chatting, 
      sharing and taking pictures, as well as sharing the user's location. 
      This app highlights my expertise in mobile development, cloud services integration, and real-time data management.`,
    technologies: [
      "React Native",
      "Expo",
      "Firebase (Firestore, Storage)",
      "React Native Gifted Chat",
      "Node.js",
    ],
    imageUrl: "./img/start.png",
    projectLink: "https://github.com/urenami/chat-app",
  },
];

const Projects = () => {
  return (
    <div>
      {/* Project Name Section */}
      <div className="project-name-container">
        <h1 className="project-name">My Amazing Projects</h1>
      </div>

      {/* Projects Container */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.imageUrl}
              alt={project.title}
              className="project-image"
            />
            <h3 className="project-title">{project.title}</h3>
            <div className="project-info-container">
              <p className="project-description">{project.description}</p>
              <h4>Technologies:</h4>
              <ul>
                {project.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="project-tech">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
