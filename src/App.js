import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Carousel from "react-bootstrap/Carousel";

import { Home } from './components/home.jsx';
import { Resume } from './components/resume.jsx';
import { Projects } from './components/projects.jsx';
import { Contact } from './components/contact.jsx';
import { NOMATCH } from './components/nomatch.jsx';

import { Layout } from './components/Layout.jsx';
import { NavigationBar } from './components/NavBar.jsx';

/*================================*/

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          {/*<Jumbotron />*/}
          <Layout>
            {/* Independent content pages loaded from nav */}
            <Switch>
              <Route exact path="/" component={Home}/>*/}
              <Route path="/resume" component={Resume}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/contact" component={Contact}/>
              <Route component={NOMATCH}/>
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

/*================================*/

App.propTypes = {};

export default App;

