import React, { Component, Fragment } from 'react';

import Navigation from '../../components/Navigation';
import SubmitXML from '../../components/SubmitXML';
import Footer from '../../components/Footer';


class HomePage extends Component {
  render() {
    return (
      <Fragment>
          <Navigation />
          {/* Page Content */}
          <main role="main">
            <div className="container">
              <SubmitXML />
            </div>
          </main>
          <Footer />
      </Fragment>
    );
  }
}

export default HomePage;