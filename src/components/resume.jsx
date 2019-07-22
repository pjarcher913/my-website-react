import React from 'react';
import Resume_PDF from '../assets/Resume_Current.pdf';
import './styles/resume.css';

export const Resume = () => (
  <div>
    <object className="d-flex justify-content-center p-0" id="obj" data={Resume_PDF} type="application/pdf">
      <embed id="emb" src={Resume_PDF} type="application/pdf" />
    </object>
  </div>
);
