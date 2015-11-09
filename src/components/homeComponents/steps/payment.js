import React from 'react';
import {PAYMENT} from 'constants/stepTitles';

class Payment extends React.Component {
  render() {
    var payment = this.props.payment;
    return (
      <div className="simple-form">
        <h2>{PAYMENT}</h2>
        <div>
          <label>Type:</label>
          <div id="type" name="type" type="text" readOnly>
            {payment.type}
          </div>
        </div>
        <div>
          <label>Number:</label>
          <div id="number" name="number" type="text" readOnly>
            {payment.number}
          </div>
        </div>
        <div>
          <label>Expiration Month:</label>
          <div id="expirationMonth" name="expirationMonth" type="number" readOnly>
            {payment.expirationMonth}
          </div>
        </div>
        <div>
          <label>Expiration Year:</label>
          <div id="expirationYear" name="expirationYear" type="number" readOnly>
            {payment.expirationYear}
          </div>
        </div>
        <div>
          <label>Name:</label>
          <div id="name" name="name" type="text" readOnly>
            {payment.name}
          </div>
        </div>
        <div>
          <label>CVV:</label>
          <div id="cvv" name="cvv" type="text" readOnly>
            {payment.cvv}
          </div>
        </div>
      </div>
    )
  }
}

export default Payment;