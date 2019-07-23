import React from 'react';
import Project_Component from './Project_Component';

/*
Images used as card thumbnails
 */
import p1_image from '../assets/project_images/proj-1-img.png';
import p2_image from '../assets/project_images/proj-2-img.png';
import p3_image from '../assets/project_images/proj-3-img.png';
import p4_image from '../assets/project_images/proj-4-img.png';

/*
Titles for each card
 */
const p1_title = "This Website";
const p2_title = "CSE Bachelor Capstone";
const p3_title = "CSE335 Final Project";
const p4_title = "Python Exercises";

/*
Descriptions for each card
 */
const p1_description =
  `I designed and developed the website you are currently viewing using ReactJS, HTML, CSS, and Bootstrap.`;
const p2_description =
  `My Arizona State University Computer Systems Engineering Capstone Project was sponsored by Benchmark Electronics.
  3 other students and I were tasked with developing a system with the ability to provide real-time 3-dimensional
  locations of individual on-scene first responders without the use of GPS or an internet connection. All code was written in
  embedded C/C++, Python, SQLite, and Linux shell.`;
const p3_description =
  `CSE335 is an iOS Application Development course that I took in my senior year. For my final project, I developed an
  iOS MVC app that located bathrooms near a user's current position and displayed their pinned locations on an interactive
  map. The app utilized GoogleMaps APIs and CoreLocation to determine the locations of the user and nearby bathrooms.`;
const p4_description =
  `Since graduation, I have been completing miscellaneous Python code exercises to keep refreshing my knowledge of the
  language. The exercises I work through come from this website.`;

/*
Links to GitHub repos for each card
 */
const p1_link = "https://github.com/pjarcher913/my-website-react";
const p2_link = "https://github.com/jas2070789/cse423firstresponders";
const p3_link = "https://github.com/pjarcher913/cse335-ClassProject_FinalVersion";
const p4_link = "https://github.com/pjarcher913/pythonExercises-10_ListOverlapComprehensions/blob/master/main.py";

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
      <div className="col-sm mb-3">
        <Project_Component
          projImage={p4_image}
          projTitle={p4_title}
          projDescription={p4_description}
          projLink={p4_link}
        />
      </div>
    </div>
    
  </div>
);
