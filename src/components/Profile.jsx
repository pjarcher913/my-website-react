import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import "./styles/profile.css";

import ProfilePic from "../assets/profile_pic.jpg";

/*================================*/

class Profile extends Component {
  
  render() {
    return (
      <div className="row">
        <div className="px-3">
          <p className="text-center font-weight-bold">
            This website serves those who wish to learn more about me and my professional career.
          </p>
          <img id="profile-pic" className="pl-0 float-left col-xs-3 col-sm-3 col-md-3 col-lg-3"
               src={ProfilePic} alt="ProfilePic"/>
          <div className="profile-text float-none">
            <span>
              My name is Patrick Archer. I am an Eagle Scout and I exhibit all qualities as expected from one.
              I am organized and work efficiently. I work well in teams.
              <br/><br/>
              I earned my <a
                href="https://webapp4.asu.edu/programs/t5/majorinfo/ASU00/ESCSEBSE/undergrad/false?init=false&nopassive=true"
                target="_blank"
                rel="noreferrer noopener">
                Bachelor of Science in Engineering in Computer Systems Engineering
              </a> in May 2019 from Arizona State University via their ABET-accredited CIDSE program.
              <br/><br/>
              Shortly after graduation, I worked as an Intern Systems Engineer for <a
                href="https://www.comtechefdata.com/contact-us/tempe-az-office"
                target="_blank"
                rel="noreferrer noopener">
                Comtech EF Data
              </a> in Tempe, Arizona. Here I gained experience in testing complex satellite network systems and their network
              management software. For my final 3 years as an undergraduate, I worked as an IT Systems Support student
              worker for <a
                href="https://ets.engineering.asu.edu/contact-edo/"
                target="_blank"
                rel="noreferrer noopener">
              ASU’s Engineering Dean’s Office
              </a>.
              Here I gained experience with task management systems and grew my time-management skill and independent work ethic.
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
