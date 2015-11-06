import React from 'react';

class Address extends React.Component {
  render() {
    var address = this.props.address;
    return (
      <div>
        <div>
          <label for="address1">Address 1:</label>
          <div id="address1" name="address1" type="text" readonly>
            {address.address1}
          </div>
        </div>
        <div>
          <label for="address2">Address 2:</label>
          <div id="address2" name="address2" type="text" readonly>
            {address.address2}
          </div>
        </div>
        <div>
          <label for="city">City:</label>
          <div id="city" name="city" type="text" readonly>
            {address.city}
          </div>
        </div>
        <div>
          <label for="state">State:</label>
          <div id="state" name="state" type="text" readonly>
            {address.state}
          </div>
        </div>
        <div>
          <label for="zip">Zip:</label>
          <div id="zip" name="zip" type="text" readonly>
            {address.zip}
          </div>
        </div>
        <div>
          <label for="status">Status:</label>
          <div id="status" name="status" type="number" readonly>
            {address.status}
          </div>
        </div>
        <div>
          <label for="addressType">Address Type:</label>
          <div id="addressType" name="addressType" type="number" readonly>
            {address.addressType}
          </div>
        </div>
      </div>
    )
  }
}

export default Address;