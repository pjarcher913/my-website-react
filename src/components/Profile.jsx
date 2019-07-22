import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import "./styles/profile.css";

import ProfilePic from "../assets/profile_pic.jpg";

/*================================*/

class Profile extends Component {
  
  render() {
    return (
      <div className="row mb-2 content-root">
        <div>
          <img id="profile-pic" className="float-left col-xs-3 col-sm-3 col-md-3  col-lg-3"
               src={ProfilePic} alt="Generic placeholder"/>
          <div className="profile-text float-none">
            <span>
              In May 2019, I earned my Bachelor of Science in Engineering
              in <a href="https://webapp4.asu.edu/programs/t5/majorinfo/ASU00/ESCSEBSE/undergrad/false?init=false&nopassive=true"
                    target="_blank" rel="noreferrer noopener">
              Computer Systems Engineering</a> from Arizona State University via their ABET-accredited CIDSE program.
              <br/><br/>
              For my final 3 years as an undergraduate, I worked as an IT Systems Support student worker for ASU’s
              Engineering Dean’s Office. I directly supported technology utilized daily by the Dean of Engineering and his
              close staff. I gained experience in supporting users and utilizing task-management systems.
              <br/><br/>
              I am an Eagle Scout and I exhibit all qualities as expected from one. I am organized and work efficiently.
              I work well in teams.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

/*================================*/

// Profile.propTypes = {};

export default Profile;
