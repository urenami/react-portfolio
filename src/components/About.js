import React, { useState } from "react";
import "./CSS/About.css"; // Importing the associated CSS file for styling

// Accordion Item Component
// This component represents a single accordion item that can expand/collapse to show content
const AccordionItem = ({ title, content }) => {
  // State to track whether the accordion item is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      // Applies 'expanded' class if the item is open; useful for styling purposes
      className={`accordion-item ${isExpanded ? "expanded" : ""}`} // Fixing the className syntax
      style={{
        marginBottom: "16px",
        border: "1px solid #ccc", // Light border around each accordion item
        borderRadius: "5px", // Rounded corners
        overflow: "hidden", // Hide content that exceeds the container size when collapsed
      }}
    >
      {/* Accordion title button that toggles the expansion */}
      <button
        onClick={() => setIsExpanded(!isExpanded)} // Toggle the expansion state
        className="accordion-title"
        style={{
          backgroundColor: "#f9f9f9", // Light background color
          padding: "10px", // Padding for spacing around the text
          border: "none", // No border for the button
          width: "100%", // Button takes up full width
          textAlign: "left", // Align text to the left
          cursor: "pointer", // Pointer cursor when hovering over the button
        }}
      >
        {title}
        {/* Shows either '-' or '+' to indicate if the item is expanded or collapsed */}
        <span style={{ float: "right" }}>{isExpanded ? "-" : "+"}</span>
      </button>

      {/* Accordion content that is visible only when expanded */}
      <div
        className="accordion-content"
        style={{
          maxHeight: isExpanded ? "1000px" : "0", // Expand the content when the item is open
          transition: "max-height 0.3s ease-out", // Smooth transition for opening and closing
          overflow: "hidden", // Hide any content that overflows when collapsed
          padding: "10px", // Padding inside the content area
        }}
      >
        {content} {/* Display the content passed as a prop */}
      </div>
    </div>
  );
};

// Main About Component
// Represents the About section of the webpage
const About = () => {
  // Array of achievements, each with a title and detailed content to be displayed in AccordionItems
  const achievements = [
    {
      title: "Certification in Full Stack Development",
      content: (
        <>
          <p>
            Successfully obtained a Full Stack Developer Certificate from
            [Bootcamp Name], demonstrating my comprehensive understanding of web
            development from front-end to back-end technologies.
          </p>
          {/* Lists of specific front-end technologies learned */}
          <h4>Front-End Technologies:</h4>
          <ul>
            <li><strong>HTML5 & CSS3:</strong> Expertise in creating structured and visually appealing web pages.</li>
            <li><strong>JavaScript:</strong> Proficient in advanced JavaScript features, DOM manipulation, and asynchronous programming.</li>
            <li><strong>Frameworks/Libraries:</strong> Skilled in React for building interactive UIs with state management.</li>
          </ul>
          {/* Lists back-end technologies and experience with databases */}
          <h4>Back-End Technologies:</h4>
          <ul>
            <li><strong>Node.js & Express:</strong> Developed RESTful APIs and server-side logic.</li>
            <li><strong>Database Management:</strong> Experience with MongoDB and a basic understanding of SQL databases.</li>
          </ul>
          {/* Lists tools and practices used in development */}
          <h4>Development Tools & Practices:</h4>
          <ul>
            <li><strong>Git:</strong> Utilized for version control.</li>
            <li><strong>Docker:</strong> For containerization in development environments.</li>
            <li><strong>Testing:</strong> Familiar with unit and integration testing practices.</li>
          </ul>
          {/* Brief on project work completed as part of the certification */}
          <h4>Project Work:</h4>
          <p>Completed a capstone project involving a full-stack application deployment, showcasing my ability to integrate front-end and back-end technologies effectively.</p>
        </>
      ),
    },
    // Additional achievements can be added here
  ];

  // Skills data, each skill includes a name and an associated image
  const skills = [
    { name: "HTML", image: "/img/html.png" },
    { name: "CSS", image: "/img/css.png" },
    { name: "JavaScript", image: "/img/js.png" },
    { name: "React", image: "/img/react.png" },
    { name: "API", image: "/img/api.png" },
    { name: "AWS", image: "/img/aws.png" },
    { name: "NODE", image: "/img/node.png" },
    // Additional skills and images can be added here
  ];

  return (
    <div className="about">
      {/* Header Section */}
      <div className="about-header">
        <h1>ABOUT ME</h1>
        <div className="typing-container">
          <span className="typing-text">Michael - Full Stack Developer</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="about-content">
        {/* Profile Section - Optional image */}
        <div className="profile-section">
          <img
            src="./img/IMG_2019.jpg" // Profile image path
            alt="Your Name" // Image alt text
            className="about-image"
          />
        </div>

        {/* Bio Section - Description of the user's background */}
        <div className="bio-section">
          <h2>My Story</h2>
          <p>
            I'm an aspiring Full Stack Web Developer with a passion for crafting
            beautiful and functional websites. My journey into web development
            began when a friend introduced me to coding, igniting a curiosity
            that led me to enroll in an online boot camp. Although new to the
            professional scene, I'm eager to dive into the industry with fresh
            eyes and a commitment to continuous learning. I've developed skills
            in both front-end technologies like HTML, CSS, and JavaScript, as
            well as back-end frameworks such as React.
          </p>
          <p>
            While I haven't landed my first job yet, I'm driven by a love for
            building engaging user experiences and am excited to bring
            innovative ideas to the table. I'm particularly interested in how
            design intersects with functionality to create websites that are not
            only visually appealing but also intuitive and efficient. My goal is
            to start my career where I can grow with a team, learn firsthand
            from industry professionals, and contribute to projects that
            challenge the status quo in web development.
          </p>
        </div>

        {/* Achievements Section - Displays all achievements in AccordionItems */}
        <div
          className="achievements"
          style={{
            maxHeight: "60vh", // Limit the height of the achievements section
            overflowY: "auto", // Enable scrolling if content exceeds the height
            padding: "10px",
            border: "1px solid #ccc", // Border around the section
            borderRadius: "5px",
          }}
        >
          <h2>Key Achievements</h2>
          {achievements.length > 0 ? (
            achievements.map((achievement, index) => (
              <AccordionItem
                key={index}
                title={achievement.title}
                content={achievement.content}
              />
            ))
          ) : (
            <p>No achievements to display.</p>
          )}
        </div>

        {/* Skills Section - Displays the list of skills */}
        <div className="skills">
          <h2>Skills & Tools</h2>
          <div
            className="skills-list"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "16px", // Space between each skill item
            }}
          >
            {skills.map((skill, index) => (
  <div
    className="skill-item"
    key={index}
    style={{ textAlign: "center" }} // Align each skill item text to center
  >
    <img
      src={skill.image} // Image path for the skill icon
      alt={skill.name} // Alt text for the image
      style={{ width: "60px", height: "60px" }} // Size of each skill icon
    />
    {/* Add the 'skill-name' class to the paragraph */}
    <p className="skill-name">{skill.name}</p> {/* Skill name text */}
  </div>
))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default About; // Export the About component for use in other parts of the app
