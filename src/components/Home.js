import React from 'react';
import ThreeDModel from './ThreeDModel';
import './styles.css'; 

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">Welcome to My Portfolio</h1>
        <p className="home-subtitle">Explore my work and journey in tech</p>
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
