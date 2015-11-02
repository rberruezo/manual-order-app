import React from 'react';

class Payment extends React.Component {
  render() {
    var payment = this.props.order.paymentData;
    return (
      <div className="login-content">
        <h2>Payment</h2>
        <input name="type" type="text" value={payment.type} onChange={this.handleChange} placeholder="Type" className="login-mail"/>
        <input name="number" type="text" value={payment.number} onChange={this.handleChange} placeholder="Number" className="login-mail"/>
        <input name="expirationMonth" type="number" value={payment.expirationMonth} onChange={this.handleChange} placeholder="Expiration Month" className="login-mail"/>
        <input name="expirationYear" type="number" value={payment.expirationYear} onChange={this.handleChange} placeholder="Expiration Year" className="login-mail"/>
        <input name="name" type="text" value={payment.name} onChange={this.handleChange} placeholder="Name" className="login-mail"/>
        <input name="cvv" type="text" value={payment.cvv} onChange={this.handleChange} placeholder="CVV" className="login-mail"/>
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
    this.props.order.paymentData[evt.target.name] = evt.target.value;
    this.setState(this.props.order.paymentData);
  }
}

export default Payment;