import React, {Component} from 'react';
// import PropTypes from 'prop-types';

/*================================*/

class Profile_Description extends Component {
  
  render() {
    return (
      <div>
        <h2 className="text-center pt-2">Some info about this site:</h2>
        <p className="text-justify">
          You are currently viewing Version 2 of my website, which I developed using React -- a JavaScript library utilized
          by HTML to modularize user interface compositions. I used Bootstrap and custom CSS for styling.
          You can view the code for Version 2 on GitHub by
          following <a href="https://github.com/pjarcher913/my-website-react" target="_blank" rel="noreferrer noopener">this link</a>.
          <br/><br/>
          I developed Version 1 using standard ("vanilla") HTML, CSS, and JavaScript.
          I did not utilize neither React nor Bootstrap. You can view the code for Version 1 on GitHub by
          following <a href="https://github.com/pjarcher913/my-website-portfolio" target="_blank" rel="noreferrer noopener">this link</a>.
          <br/><br/>
          Since I am trying to focus on progressing my skill with React, I will be solely working on updating Version 2
          of the site. I am also focused on making the site mobile-friendly and including features such as light/dark mode.
        </p>
      </div>
    );
  }
}

/*================================*/

// Profile_Description.propTypes = {};

export default Profile_Description;
