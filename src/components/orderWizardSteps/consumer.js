import React from 'react';

class Consumer extends React.Component {
  render() {
    var consumer = this.props.order.user;
    return (
      <div className="simple-form">
        <h2>Consumer</h2>
        <div>
          <label for="firstName">First Name:</label>
          <input id="firstName" name="firstName" type="text" value={consumer.firstName} onChange={this.handleChange} placeholder="First Name" required="" />
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input id="lastName" name="lastName" type="text" value={consumer.lastName} onChange={this.handleChange} placeholder="Last Name" required="" />
        </div>          
        <div className="button">
          <button onClick={this.props.previousStep}>Back</button>
          <button onClick={this.props.nextStep}>Continue</button>
          <button onClick={this.props.submitChanges}>Submit Changes</button>
        </div>
      </div>
    )
  }

  handleChange = evt => {
    this.props.order.user[evt.target.name] = evt.target.value;
    this.setState(this.props.order.user);
  }
}

export default Consumer;