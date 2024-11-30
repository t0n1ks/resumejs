import React from 'react';
import '../styles/LeftSide.css'; 


const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="profile-photo">
      <img src="/resumejs/assets/images/avatar.jpg" alt="Profile" />
      </div>
      <div className="profile-info">
        <h1>Nikita Titov</h1>
        <p className="job-title">Frontend Developer | Designer | Fullstack Developer</p>
      </div>

      <div className="contact">
        <h2>KONTAKT</h2>
        <p>
          <a href="mailto:email@example.com">email@example.com</a>
        </p>
        <p>
          <a href="tel:+1234567890">+1 (234) 567-890</a>
        </p>
      </div>

      <div className="personal-info">
        <h2>PERSONLICHES</h2>
        <p>Дата рождения: 06.11.1999</p>
        <p>Город: Энергодар</p>
      </div>

      <div className="date-info">
        <h2>Ort, DATUM</h2>
        <p>Titov Nikita</p>
      </div>
    </div>
  );
};

export default LeftSide;
