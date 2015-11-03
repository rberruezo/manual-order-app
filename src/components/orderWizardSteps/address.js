import React from 'react';

class Address extends React.Component {
  render() {
    var address = this.props.address;
    return (
      <div>
        <div>
          <label for="address1">Address 1:</label>
          <input id="address1" name="address1" type="text" value={address.address1} onChange={this.handleChange} placeholder="Address 1" required="" />
        </div>
        <div>
          <label for="address2">Address 2:</label>
          <input id="address2" name="address2" type="text" value={address.address2} onChange={this.handleChange} placeholder="Address 2" required="" />
        </div>
        <div>
          <label for="city">City:</label>
          <input id="city" name="city" type="text" value={address.city} onChange={this.handleChange} placeholder="City" required="" />
        </div>
        <div>
          <label for="state">State:</label>
          <input id="state" name="state" type="text" value={address.state} onChange={this.handleChange} placeholder="State" required="" />
        </div>
        <div>
          <label for="zip">Zip:</label>
          <input id="zip" name="zip" type="text" value={address.zip} onChange={this.handleChange} placeholder="Zip" required="" />
        </div>
        <div>
          <label for="status">Status:</label>
          <input id="status" name="status" type="number" value={address.status} onChange={this.handleChange} placeholder="Status" required="" />
        </div>
        <div>
          <label for="addressType">Address Type:</label>
          <input id="addressType" name="addressType" type="number" value={address.addressType} onChange={this.handleChange} placeholder="Address Type" required="" />
        </div>
      </div>
    )
  }

  handleChange = evt => {
    this.props.address[evt.target.name] = evt.target.value;
    this.setState(this.props.address);
  }
}

export default Address;