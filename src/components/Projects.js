// Importing React from the 'react' library
import React from "react";
// Importing the associated CSS file to style the project cards
import "./CSS/Project.css";

// Array of project objects that hold data about each project (title, description, technologies, image, and link)
const projects = [
  {
    title: "Pokedex App", // Title of the project
    description: `
      Within this project, I was responsible for both the front and back end development. 
      Written in HTML, CSS, and JavaScript, the Pokedex App utilizes the PokeAPI to fetch data for Pokémon. 
      Users can search for a Pokémon to view its stats or click on a Pokémon button to see additional details. 
      This app highlights my skills in API integration and responsive design.`,
    technologies: ["JavaScript", "jQuery", "HTML", "CSS"], // Technologies used in the project
    imageUrl: "./img/Pokedex.png", // Path to the project image
    projectLink: "https://urenami.github.io/Pokedex-app/", // URL of the live project
  },
  {
    title: "Meet App", // Title of the project
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
    ], // Technologies used in the project
    imageUrl: "./img/meetapp.png", // Path to the project image
    projectLink: "https://urenami.github.io/meet/", // URL of the live project
  },
  {
    title: "Chat App", // Title of the project
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
    ], // Technologies used in the project
    imageUrl: "./img/start.png", // Path to the project image
    projectLink: "https://github.com/urenami/chat-app", // URL of the live project
  },
];

// Projects component is responsible for displaying all projects
const Projects = () => {
  return (
    // Main container for all the project cards
    <div className="projects-container">
      {/* Mapping over each project in the 'projects' array to render a project card for each */}
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          {/* Displaying the project image */}
          <img
            src={project.imageUrl} // Source of the project image
            alt={project.title}    // Alt text for the image
            className="project-image" // CSS class for styling the image
          />
          {/* Displaying the project title */}
          <h3 className="project-title">{project.title}</h3>
          <div className="project-info-container">
            {/* Displaying the project description */}
            <p className="project-description">{project.description}</p>
            <h4>Technologies:</h4>
            {/* Displaying the list of technologies used in the project */}
            <ul>
              {project.technologies.map((tech, techIndex) => (
                // Iterating over each technology in the 'technologies' array
                <li key={techIndex} className="project-tech">
                  {tech} {/* Displaying each technology name */}
                </li>
              ))}
            </ul>
          </div>
          {/* Link to the live project */}
          <a
            href={project.projectLink} // URL to the live project
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer" // Security feature to prevent certain vulnerabilities
            className="project-link" // CSS class for styling the project link
          >
            View Project {/* Text displayed for the link */}
          </a>
        </div>
      ))}
    </div>
  );
};

// Exporting the Projects component to be used in other parts of the application
export default Projects;
