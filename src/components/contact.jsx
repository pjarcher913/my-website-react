import React from 'react';
import './styles/contact.css';

export const Contact = () => (
  <div className="pt-3 text-center">
    <h2>Contact Me</h2>
    <p>
      The easiest way to get in touch is via email:
      <br/>
      <a id="email-link" href="mailto:patrick-archer@outlook.com" rel="noreferrer noopener">patrick-archer@outlook.com</a>
    </p>
    <p>
      You can also follow me on LinkedIn:
      <br/>
      <a id="linkedin-link" href="https://www.linkedin.com/in/patrick-archer/" target="_blank" rel="noreferrer noopener">
        https://www.linkedin.com/in/patrick-archer/</a>
    </p>
  </div>
);
