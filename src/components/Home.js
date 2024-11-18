// Importing the React library, which is essential for creating React components.
import React from 'react';

// Importing the `ThreeDModel` component from the current directory (`./ThreeDModel`).
// This component is expected to render a 3D model on the home page.
import ThreeDModel from './ThreeDModel';

// Importing the `TypingEffect` component from the current directory (`./TypingEffect`).
// This component is expected to display text with a typing animation effect.
import TypingEffect from './TypingEffect';

// Importing the CSS file for styling the `Home` component.
// The file path `./CSS/styles.css` suggests it contains the styles specific to the `Home` component and potentially other shared styles.
import './CSS/styles.css'; 

// Defining the `Home` component, which serves as the main content for the home page of the portfolio.
const Home = () => {
  return (
    // The outermost `div` serves as a container for the entire `Home` component content.
    // The `home` class is used for styling the container and its child elements.
    <div className="home">
      
      {/* The `header` element represents the header section of the home page. */}
      <header className="home-header">
        {/* The `h1` element displays the main title of the home page. */}
        <h1 className="home-title">Welcome to My Portfolio</h1>
        
        {/* Rendering the `TypingEffect` component.
            This component likely adds a dynamic typing animation below the title. */}
        <TypingEffect />
      </header>
      
      {/* The `section` element contains the main content of the home page. */}
      <section className="home-content">
        {/* Rendering the `ThreeDModel` component.
            This component likely displays an interactive or static 3D model. */}
        <ThreeDModel />
      </section>
      
      {/* The `footer` element represents the footer section of the home page. */}
      <footer className="home-footer">
        {/* Displaying a thank-you message in the footer. */}
        <p>Thank you for visiting!</p>
      </footer>
    </div>
  );
};

// Exporting the `Home` component so it can be imported and used in other parts of the application.
export default Home;
