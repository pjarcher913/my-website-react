import React from 'react';
import './styles/home.css';

import Profile from "./Profile.jsx";
import Profile_Description from "./Profile_Description";

export const Home = () => (
  <div className="home-root">
    <h2 className="home-header">Hello! I'm Patrick.</h2>
    <div className="home-content">
      <Profile/>
      {/* eslint-disable-next-line */}
      <Profile_Description/>
    </div>
  </div>
);
