import React from 'react';
import {CONSUMER_TITLE} from 'constants/orderWizardSteps';

class Consumer extends React.Component {
  render() {
    var consumer = this.props.order.user;
    return (
      <div className="simple-form">
        <h2>{CONSUMER_TITLE}</h2>
        <div>
          <label for="firstName">First Name:</label>
          <input id="firstName" name="firstName" type="text" value={consumer.firstName} onChange={this.handleChange} placeholder="First Name" required="" />
        </div>
        <div>
          <label for="lastName">Last Name:</label>
          <input id="lastName" name="lastName" type="text" value={consumer.lastName} onChange={this.handleChange} placeholder="Last Name" required="" />
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