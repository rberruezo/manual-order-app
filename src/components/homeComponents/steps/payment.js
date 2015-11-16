import React from 'react';
import {PAYMENT} from 'constants/stepTitles';

class Payment extends React.Component {
  render() {
    var payment = this.props.payment;
    return (
      <div>
        <h3>{PAYMENT}</h3>
        <table className='wizard-table'>
          <tbody className='wizard-tbody'>      
            <tr className='wizard-tr'>
              <td> <strong className='label-title'>Type</strong> </td>
              <td>
                {payment.type}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='label-title'>Number</strong> </td>
              <td>
                {payment.number}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='label-title'>Expiration Month</strong> </td>
              <td>
                {payment.expirationMonth}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='label-title'>Expiration Year</strong> </td>
              <td>
                {payment.expirationYear}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='label-title'>Name</strong> </td>
              <td>
                {payment.name}
              </td>
            </tr>
            <tr className='wizard-tr'>
              <td> <strong className='label-title'>CVV</strong> </td>
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