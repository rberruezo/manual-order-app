import React from 'react';

class ShippingAndBilling extends React.Component {
  render() {
    return (
      <div>
        <h2>Shipping and Billing</h2>
        <ul className="form-fields">
          <ul className="form-fields">
            <li className="form-footer">
              <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
              <button className="btn -primary pull-right" onClick={this.props.nextStep}>Save &amp; Continue</button>
            </li>
          </ul>
          <li className="form-footer">
          </li>
        </ul>
      </div>
    )
  }
}

export default ShippingAndBilling;