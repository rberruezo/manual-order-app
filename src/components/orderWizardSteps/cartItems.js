import React from 'react';
import Item from 'components/orderWizardSteps/item';

class CartItems extends React.Component {
  render() {
    var order = this.props.order;
    return (
      <div className="login-content">
        <h2>Cart Items</h2>
        {this.getItemsView()}
        <button className="cancel-button" onClick={this.props.previousStep}>Back</button>
        <button className="accept-button" onClick={this.props.nextStep}>Save &amp; Continue</button>
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