import React from 'react';

require('../../styles/form.styl');

class Consumer extends React.Component {
  render() {
    var consumer = this.props.order.user;
    return (
      <div className="fs-form-wrap" id="fs-form-wrap">
        <form id="myform" className="fs-form fs-form-overview fs-show" autocomplete="off">
          <h2>Consumer</h2>
          <ol className="fs-fields">
            <li>
              <label className="fs-field-label fs-anim-upper" for="firstName">First name</label>
              <input className="fs-anim-lower" id="firstName" name="firstName" type="text" value={consumer.firstName} onChange={this.handleChange} placeholder="First Name" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="lastName">Last name</label>
              <input className="fs-anim-lower" id="lastName" name="lastName" type="text" value={consumer.lastName} onChange={this.handleChange} placeholder="Last Name" required="" />
            </li>
          </ol>
        </form>
        <button className="cancel-button" onClick={this.props.previousStep}>Back</button>
        <button className="accept-button" onClick={this.props.nextStep}>Save &amp; Continue</button>
      </div>
    )
  }

  handleChange = evt => {
    this.props.order.user[evt.target.name] = evt.target.value;
    this.setState(this.props.order.user);
  }
}

export default Consumer;