import React, {Component} from 'react';
// import PropTypes from 'prop-types';

import './styles/Project_Component.css';

/*================================*/

class Project_Component extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projImage: this.props.projImage,
      projTitle: this.props.projTitle,
      projDescription: this.props.projDescription,
      projLink: this.props.projLink,
    };
  }
  
  render() {
    return (
      <div id="projCard" className="card text-center">
        <a href={this.state.projLink} target="_blank" rel="noreferrer noopener">
          <img id="projImg" className="card-img-top" src={this.state.projImage} alt="Project"/>
        </a>
        <div className="card-body">
          <h3 className="card-title text-center">{this.state.projTitle}</h3>
          <a className="btn btn-primary" href={this.state.projLink} target="_blank" rel="noreferrer noopener">View on GitHub</a>
          <p className="card-text text-justify pt-2">{this.state.projDescription}</p>
        </div>
      </div>
    );
  }
}

/*================================*/

// Project_Component.propTypes = {};

export default Project_Component;
