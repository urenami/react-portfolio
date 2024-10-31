import React, { useState } from "react";

// Accordion Item Component
// Renders a single accordion item that expands/collapses to show/hide content
const AccordionItem = ({ title, content }) => {
  // State to manage the expanded/collapsed state of the accordion item
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div
      // Applies 'expanded' class if the item is open, which can be used to style expanded items
      className={`accordion-item ${isExpanded ? "expanded" : ""}`}
      style={{
        marginBottom: "16px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      {/* Accordion title section, which is clickable to toggle the expanded state */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="accordion-title"
        style={{
          backgroundColor: "#f9f9f9",
          padding: "10px",
          border: "none",
          width: "100%",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        {title}
        {/* Shows either '-' or '+' depending on whether the item is expanded or not */}
        <span style={{ float: "right" }}>{isExpanded ? "-" : "+"}</span>
      </button>

      {/* Accordion content section, only visible when the item is expanded */}
      <div
        className="accordion-content"
        style={{
          maxHeight: isExpanded ? "1000px" : "0",
          transition: "max-height 0.3s ease-out",
          overflow: "hidden",
          padding: "10px",
        }}
      >
        {content}
      </div>
    </div>
  );
};

// Main About Component
// Represents the About section of the website
const About = () => {
  // Achievements data, each with a title and content, which can be displayed in AccordionItems
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
          {/* Lists of specific technologies and tools learned */}
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

  // Skills data to display in the Skills section, each skill with an image and a name
  const skills = [
    { name: "HTML", image: "/images/html.png" },
    { name: "CSS", image: "/images/css.png" },
    { name: "JavaScript", image: "/images/javascript.png" },
    { name: "React", image: "/images/react.png" },
    // Additional skills and images can be added here
  ];

  return (
    <div className="about">
      {/* Header Section with the main title and typing effect for the About section */}
      <div className="about-header">
        <h1>About Me</h1>
        <div className="typing-container">
          <span className="typing-text">Michael - Full Stack Developer</span>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="about-content">
        {/* Profile Section with an optional image */}
        <div className="profile-section">
          <img
            src="image.jpg"
            alt="Your Name"
            className="about-image"
          />
        </div>

        {/* Bio Section - Introduction and story about the user's background */}
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

        {/* Achievements Section - Renders AccordionItems for each achievement */}
        <div
          className="achievements"
          style={{
            maxHeight: "60vh",
            overflowY: "auto",
            padding: "10px",
            border: "1px solid #ccc",
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

        {/* Skills Section - Displays skill items with images and names */}
        <div className="skills">
          <h2>Skills & Tools</h2>
          <div
            className="skills-list"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            {skills.map((skill, index) => (
              <div
                className="skill-item"
                key={index}
                style={{ textAlign: "center" }}
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  style={{ width: "60px", height: "60px" }}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
