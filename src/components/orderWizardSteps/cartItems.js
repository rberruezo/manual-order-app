import React from 'react';

class CartItems extends React.Component {
  render() {
    console.log(this.props);
    var order = this.props.order;
    console.log(order);
    return (
      <div className="login-content" onSubmit={this.handleLogin}>
        <h2>Cart Items</h2>
        <input name="consumerName" type="text" value={order.consumerName} onChange={this.handleChange} placeholder="Consumer" className="login-mail"/>
        <input name="itemCount" type="number" value={order.itemCount} onChange={this.handleChange} placeholder="Item Count" className="login-mail"/>
        <input name="status" type="number" value={order.status} onChange={this.handleChange} placeholder="Status" className="login-mail"/>
        <button className="accept-button" onClick={this.nextStep}>Save &amp; Continue</button>
      </div>
    )
  }

  nextStep = evt => {
    evt.preventDefault();

    // Get values via this.refs
    // var data = {
    //   name     : this.refs.name.getDOMNode().value,
    //   password : this.refs.password.getDOMNode().value,
    //   email    : this.refs.email.getDOMNode().value,
    // }

    // this.props.saveValues(data)
    this.props.nextStep();
  }

  handleChange = evt => {
    this.props.order[evt.target.name] = evt.target.value;
    this.setState(this.props.order);
  }
}

export default CartItems;