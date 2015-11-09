import React from 'react';

class Address extends React.Component {
  render() {
    var address = this.props.address;
    return (
      <div>
        <div>
          <label>Address 1:</label>
          <div id="address1" name="address1" type="text" readOnly>
            {address.address1}
          </div>
        </div>
        <div>
          <label>Address 2:</label>
          <div id="address2" name="address2" type="text" readOnly>
            {address.address2}
          </div>
        </div>
        <div>
          <label>City:</label>
          <div id="city" name="city" type="text" readOnly>
            {address.city}
          </div>
        </div>
        <div>
          <label>State:</label>
          <div id="state" name="state" type="text" readOnly>
            {address.state}
          </div>
        </div>
        <div>
          <label>Zip:</label>
          <div id="zip" name="zip" type="text" readOnly>
            {address.zip}
          </div>
        </div>
        <div>
          <label>Status:</label>
          <div id="status" name="status" type="number" readOnly>
            {address.status}
          </div>
        </div>
        <div>
          <label>Address Type:</label>
          <div id="addressType" name="addressType" type="number" readOnly>
            {address.addressType}
          </div>
        </div>
      </div>
    )
  }
}

export default Address;