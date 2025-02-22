import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';
import Car from './assets/3.svg';
import Logo from './assets/ICSGV_Logo-with-Offerings_RGB_Quba-School.webp';

const HomePage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Home - Qubais Islamic School</title>
        <meta name="description" content="Welcome to Qubais Islamic School. Discover quality Islamic education." />
      </Helmet>
      <img src={Logo} alt="Quba Islamic School Logo" className="logo" />
      <div className="car-container">
        <img 
          src={Car} 
          alt="Driving car" 
          className="driving-car" 
          style={{ transform: `translateX(${scrollPosition}px)` }} 
        />
      </div>
      <div className="notepad">
        <div className="top"></div>
        <div className="paper" contenteditable="true">
          <div className="paper">
            
              Welcome to ICSGV's Quba Fulltime Islamic School
              <br /><br />
              We are a private Islamic school that focuses on fulfilling the academic 
              and character development needs of Muslim students.
            
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
