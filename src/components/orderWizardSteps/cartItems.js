import React from 'react';
import Item from 'components/orderWizardSteps/item';

class CartItems extends React.Component {
  render() {
    var order = this.props.order;
    return (
      <div className="login-content" onSubmit={this.handleLogin}>
        <h2>Cart Items</h2>
        {this.getItemsView()}
        <button className="accept-button" onClick={this.props.nextStep}>Save &amp; Continue</button>
      </div>
    )
  }

  getItemsView() {
    return this.props.order.items.map(function(item) {
            return ( <Item item={item} /> )
          });
  }

  handleChange = evt => {
    this.props.order[evt.target.name] = evt.target.value;
    this.setState(this.props.order);
  }
}

export default CartItems;