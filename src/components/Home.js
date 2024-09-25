import React from 'react';
import ThreeDModel from './ThreeDModel';
import TypingEffect from './TypingEffect';
import './styles.css'; 

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <TypingEffect text="Explore my work and journey in tech" />
      </header>
      
      <section className="home-content">
        <ThreeDModel />
      </section>
      
      <footer className="home-footer">
        <p>Thank you for visiting!</p>
      </footer>
    </div>
  );
};

export default Home;
