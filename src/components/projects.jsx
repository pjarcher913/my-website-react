import React from 'react';
import Project_Component from './Project_Component';

/*
Images used as card thumbnails
 */
import p1_image from '../assets/project_images/proj-1-img.png';
import p2_image from '../assets/project_images/proj-2-img.png';
import p3_image from '../assets/project_images/proj-3-img.png';
import p4_image from '../assets/project_images/proj-4-img.png';
import p5_image from '../assets/project_images/proj-5-img.png';
import p6_image from '../assets/project_images/proj-6-img.png';

/*
Titles for each card
 */
const p1_title = "This Website";
const p2_title = "CSE Bachelor Capstone";
const p3_title = "Portfolio-API";
const p4_title = "Project Nexus";
const p5_title = "CSE335 Final Project";
const p6_title = "Python Exercises";

/*
Descriptions for each card
 */
const p1_description =
  `I designed and developed the website you are currently viewing using ReactJS, HTML, CSS, and Bootstrap.
  In my Portfolio-API Golang project, this website is served with an underlying RESTful API that users can interact with.`;
const p2_description =
  `My Arizona State University Computer Systems Engineering Capstone Project was sponsored by Benchmark Electronics.
  Three other students and I were tasked with developing a system with the ability to provide real-time 3-dimensional
  locations of individual on-scene first responders without the use of GPS or an internet connection. All code was written in
  embedded C/C++, Python, SQLite, and Linux shell.`;
const p3_description =
  `Portfolio-API is a Docker-containerized Golang/React project that serves my portfolio website with an underlying RESTful API.
  This project is still very much in its early stages of development.
  The API is entirely composed of Easter eggs...different requests will do different things.
  I am also writing comprehensive supporting documentation.`;
const p4_description =
  `Project Nexus is a full-stack Docker-containerized Golang-based application that acts as a password vault.
  This project is still very much in its early stages of development.
  Passwords get encrypted using a custom algorithm and are stored in a Google Sheet (which acts as a real-time database).
  The application queries the passwords using Google's Sheets API, decrypts them locally, and then displays them to the
  corresponding authorized user. User accounts are stored in a Firebase.
  The next phase of this project will be to allow functionality for users to push passwords to the database.
  The current phase is to first get read-only operations working.`;
const p5_description =
  `CSE335 is an iOS Application Development course that I took in my senior year. For my final project, I developed an
  iOS MVC app that located bathrooms near a user's current position and displayed their pinned locations on an interactive
  map. The app utilized GoogleMaps APIs and CoreLocation to determine the locations of the user and nearby bathrooms.`;
const p6_description =
  `Since graduation, I have been completing miscellaneous Python code exercises to keep refreshing my knowledge of the
  language. The provided GitHub link will take you to one of the exercises I completed.`;

/*
Links to GitHub repos for each card
 */
const p1_link = "https://github.com/pjarcher913/my-website-react";
const p2_link = "https://github.com/jas2070789/cse423firstresponders";
const p3_link = "https://github.com/pjarcher913/portfolio-api";
const p4_link = "https://github.com/pjarcher913/project-nexus";
const p5_link = "https://github.com/pjarcher913/cse335-ClassProject_FinalVersion";
const p6_link = "https://github.com/pjarcher913/python-challenges";

export const Projects = () => (
  <div>
    
    {/* Page header */}
    <h2 className="text-center pt-3 pb-2">
      Below you will find some of my notable technical projects:
    </h2>
    
    {/* Project cards */}
    <div className="row">
      <div className="col-sm mb-3">
        <Project_Component
          projImage={p1_image}
          projTitle={p1_title}
          projDescription={p1_description}
          projLink={p1_link}
        />
      </div>
      <div className="col-sm mb-3">
        <Project_Component
          projImage={p2_image}
          projTitle={p2_title}
          projDescription={p2_description}
          projLink={p2_link}
        />
      </div>
      <div className="col-sm mb-3">
        <Project_Component
          projImage={p3_image}
          projTitle={p3_title}
          projDescription={p3_description}
          projLink={p3_link}
        />
      </div>
    </div>
    <div className="row">
      <div className="col-sm mb-3">
        <Project_Component
          projImage={p4_image}
          projTitle={p4_title}
          projDescription={p4_description}
          projLink={p4_link}
        />
      </div>
      <div className="col-sm mb-3">
        <Project_Component
          projImage={p5_image}
          projTitle={p5_title}
          projDescription={p5_description}
          projLink={p5_link}
        />
      </div>
      <div className="col-sm mb-3">
        <Project_Component
          projImage={p6_image}
          projTitle={p6_title}
          projDescription={p6_description}
          projLink={p6_link}
        />
      </div>
    </div>
    
  </div>
);
