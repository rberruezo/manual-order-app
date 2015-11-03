import React from 'react';

class Payment extends React.Component {
  render() {
    var payment = this.props.order.paymentData;
    return (
      <div className="simple-form">
        <h2>Payment</h2>
        <div>
          <label for="type">Type:</label>
          <input id="type" name="type" type="text" value={payment.type} onChange={this.handleChange} placeholder="Type" required="" />
        </div>
        <div>
          <label for="number">Number:</label>
          <input id="number" name="number" type="text" value={payment.number} onChange={this.handleChange} placeholder="Number" required="" />
        </div>
        <div>
          <label for="expirationMonth">Expiration Month:</label>
          <input id="expirationMonth" name="expirationMonth" type="number" value={payment.expirationMonth} onChange={this.handleChange} placeholder="Expiration Month" required="" />
        </div>
        <div>
          <label for="expirationYear">Expiration Year:</label>
          <input id="expirationYear" name="expirationYear" type="number" value={payment.expirationYear} onChange={this.handleChange} placeholder="Expiration Year" required="" />
        </div>
        <div>
          <label for="name">Name:</label>
          <input id="name" name="name" type="text" value={payment.name} onChange={this.handleChange} placeholder="Name" required="" />
        </div>
        <div>
          <label for="cvv">CVV:</label>
          <input id="cvv" name="cvv" type="text" value={payment.cvv} onChange={this.handleChange} placeholder="CVV" required="" />
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
    this.props.order.paymentData[evt.target.name] = evt.target.value;
    this.setState(this.props.order.paymentData);
  }
}

export default Payment;