import React from 'react';

class Address extends React.Component {
  render() {
    var address = this.props.address;
    return (
      <table className='wizard-table'>
        <tbody className='wizard-tbody'>      
          <tr className='wizard-tr'>
            <td> <strong className='book-title'>Address 1:</strong> </td>
            <td>
              {address.address1}
            </td>
          </tr>
          <tr className='wizard-tr'>
            <td> <strong className='book-title'>Address 2:</strong> </td>
            <td>
              {address.address2}
            </td>
          </tr>
          <tr className='wizard-tr'>
            <td> <strong className='book-title'>City:</strong> </td>
            <td>
              {address.city}
            </td>
          </tr>
          <tr className='wizard-tr'>
            <td> <strong className='book-title'>State:</strong> </td>
            <td>
              {address.state}
            </td>
          </tr>
          <tr className='wizard-tr'>
            <td> <strong className='book-title'>Zip:</strong> </td>
            <td>
              {address.zip}
            </td>
          </tr>
          <tr className='wizard-tr'>
            <td> <strong className='book-title'>Status:</strong> </td>
            <td>
              {address.status}
            </td>
          </tr>
          <tr className='wizard-tr'>
            <td> <strong className='book-title'>Address Type:</strong> </td>
            <td>
              {address.addressType}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Address;