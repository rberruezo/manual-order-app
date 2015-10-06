import React from 'react';
import {RouteHandler, Link} from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Login</h1>
        <Link to='login'>Go to the Login page...</Link>
        <RouteHandler/>
      </div>
    );
  }
}

export default Main;
