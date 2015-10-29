import React from 'react';

class Success extends React.Component {
  render() {
    return (
      <div>
        <h2>Successfully Registered!</h2>
        <p>Please check your email <b>{this.props.fieldValues.email}</b> for a confirmation link to activate your account.</p>
      </div>
    )
  }
}

export default Success;