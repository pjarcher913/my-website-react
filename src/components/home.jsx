import React from 'react';
import './styles/home.css';

import Profile from "./Profile.jsx";
import Profile_Description from "./Profile_Description";

export const Home = () => (
  <div className="pt-3">
    <h2 className="home-header">"Who is this guy and why do I care?"</h2>
    <div className="home-content">
      <Profile/>
      {/* eslint-disable-next-line */}
      <Profile_Description/>
    </div>
  </div>
);
