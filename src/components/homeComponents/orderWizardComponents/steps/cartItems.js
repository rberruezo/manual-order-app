import React from 'react';
import Item from 'components/homeComponents/orderWizardComponents/resources/item';
import {CART_ITEMS_TITLE} from 'constants/orderWizardSteps';

class CartItems extends React.Component {
  render() {
    return (
      <div className="simple-form">
        <h2>{CART_ITEMS_TITLE}</h2>
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