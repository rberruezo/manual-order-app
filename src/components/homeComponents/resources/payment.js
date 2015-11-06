import React from 'react';
import {PAYMENT} from 'constants/stepTitles';

class Payment extends React.Component {
  render() {
    var payment = this.props.payment;
    return (
      <div className="simple-form">
        <h2>{PAYMENT}</h2>
        <div>
          <label for="type">Type:</label>
          <div id="type" name="type" type="text" readonly>
            {payment.type}
          </div>
        </div>
        <div>
          <label for="number">Number:</label>
          <div id="number" name="number" type="text" readonly>
            {payment.number}
          </div>
        </div>
        <div>
          <label for="expirationMonth">Expiration Month:</label>
          <div id="expirationMonth" name="expirationMonth" type="number" readonly>
            {payment.expirationMonth}
          </div>
        </div>
        <div>
          <label for="expirationYear">Expiration Year:</label>
          <div id="expirationYear" name="expirationYear" type="number" readonly>
            {payment.expirationYear}
          </div>
        </div>
        <div>
          <label for="name">Name:</label>
          <div id="name" name="name" type="text" readonly>
            {payment.name}
          </div>
        </div>
        <div>
          <label for="cvv">CVV:</label>
          <div id="cvv" name="cvv" type="text" readonly>
            {payment.cvv}
          </div>
        </div>
      </div>
    )
  }
}

export default Payment;