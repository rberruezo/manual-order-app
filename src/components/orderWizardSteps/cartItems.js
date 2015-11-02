import React from 'react';
import Item from 'components/orderWizardSteps/item';

class CartItems extends React.Component {
  render() {
    var order = this.props.order;
    return (
      <div className="login-content">
        <h2>Cart Items</h2>
        {this.getItemsView()}
        <ul className="form-fields">
          <li className="form-footer">
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right" onClick={this.props.nextStep}>Save &amp; Continue</button>
          </li>
        </ul>
      </div>
    )
  }

  getItemsView() {
    return this.props.order.items.map(function(item) {
            return ( <Item item={item} /> )
          });
  }
}

export default CartItems;