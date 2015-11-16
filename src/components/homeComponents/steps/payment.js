import React from 'react';
import {PAYMENT} from 'constants/stepTitles';

class Payment extends React.Component {
  render() {
    var payment = this.props.payment;
    return (
      <div>
        <h2>{PAYMENT}</h2>
        <table className='wizard-table'>
          <tbody className='wizard-tbody'>      
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>Type</strong> </td>
              <td>
                {payment.type}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>Number</strong> </td>
              <td>
                {payment.number}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>Expiration Month</strong> </td>
              <td>
                {payment.expirationMonth}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>Expiration Year</strong> </td>
              <td>
                {payment.expirationYear}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>Name</strong> </td>
              <td>
                {payment.name}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='book-title'>CVV</strong> </td>
              <td>
                {payment.cvv}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Payment;