import React from 'react';

class Consumer extends React.Component {
  render() {
    var consumer = this.props.order.user;
    return (
      <div className="login-content">
        <h2>Consumer</h2>
        <input name="firstName" type="text" value={consumer.firstName} onChange={this.handleChange} placeholder="First Name" className="login-mail"/>
        <input name="lastName" type="text" value={consumer.lastName} onChange={this.handleChange} placeholder="Last Name" className="login-mail"/>
        <ul className="form-fields">
          <li className="form-footer">
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right" onClick={this.props.nextStep}>Save &amp; Continue</button>
          </li>
        </ul>
      </div>
    )
  }

  handleChange = evt => {
    this.props.order.user[evt.target.name] = evt.target.value;
    this.setState(this.props.order.user);
  }
}

export default Consumer;