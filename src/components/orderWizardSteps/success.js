import React from 'react';

class Success extends React.Component {
  render() {
    return (
      <div>
        <h2>Successfully Registered!</h2>
        <button className="accept-button" onClick={this.props.close}>Close</button>
      </div>
    )
  }
}

export default Success;