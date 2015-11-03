import React from 'react';

class Success extends React.Component {
  render() {
    return (
      <div className="simple-form">
        <h2>Order Successfully Changed!</h2>
        <div className="button">
        	<button onClick={this.props.close}>Close</button>
        </div>
      </div>
    )
  }
}

export default Success;