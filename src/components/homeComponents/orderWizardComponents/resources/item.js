import React from 'react';

class Item extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <div>
        <h2>Item</h2>
        <div>
          <label for="quantity">Quantity</label>
          <input id="quantity" name="quantity" type="number" value={item.quantity} onChange={this.handleChange} placeholder="Quantity" required="" />
        </div>
        <div>
          <label for="listPriceCents">List Price Cents</label>
          <input id="listPriceCents" name="listPriceCents" type="number" value={item.listPriceCents} onChange={this.handleChange} placeholder="List Price Cents" required="" />
        </div>
        <div>
          <label for="salePriceCents">Sale Price Cents</label>
          <input id="salePriceCents" name="salePriceCents" type="number" value={item.salePriceCents} onChange={this.handleChange} placeholder="Sale Price Cents" required="" />
        </div>
        <div>
          <label for="sourceUrl">Source Url</label>
          <input id="sourceUrl" name="sourceUrl" type="text" value={item.sourceUrl} onChange={this.handleChange} placeholder="Source Url" required="" />
        </div>
        <div>
          <label for="status">Status</label>
          <input id="status" name="status" type="number" value={item.status} onChange={this.handleChange} placeholder="Status" required="" />
        </div>
        <div>
          <label for="name">Name</label>
          <input id="name" name="name" type="text" value={item.name} onChange={this.handleChange} placeholder="Name" required="" />
        </div>
        <div>
          <label for="color">Color</label>
          <input id="color" name="color" type="text" value={item.color} onChange={this.handleChange} placeholder="Color" required="" />
        </div>
        <div>
          <label for="size">Size</label>
          <input id="size" name="size" type="text" value={item.size} onChange={this.handleChange} placeholder="Size" required="" />
        </div>
      </div>
    )
  }

  handleChange = evt => {
    this.props.item[evt.target.name] = evt.target.value;
    this.setState(this.props.item);
  }
}

export default Item;