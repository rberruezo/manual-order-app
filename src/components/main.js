import React from 'react';
import {RouteHandler, Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Manual Order Application</h1>
        <Link to='login'>Take me to Login page...</Link>
        <RouteHandler/>
      </div>
    );
  }
}

export default Main;
