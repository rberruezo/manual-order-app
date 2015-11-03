import React from 'react';
import Item from 'components/orderWizardSteps/item';

class CartItems extends React.Component {
  render() {
    return (
      <div className="simple-form">
        <h2>Cart Items</h2>
        {this.getItemsView()}
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