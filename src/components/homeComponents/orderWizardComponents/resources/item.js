import React from 'react';

class Item extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <div>
        <h2>Item</h2>
        <div>
          <label for="quantity">Quantity</label>
          <div id="quantity" name="quantity" type="number" readonly>
            {item.quantity}
          </div>
        </div>
        <div>
          <label for="listPriceCents">List Price Cents</label>
          <div id="listPriceCents" name="listPriceCents" type="number" readonly>
            {item.listPriceCents}
          </div>
        </div>
        <div>
          <label for="salePriceCents">Sale Price Cents</label>
          <div id="salePriceCents" name="salePriceCents" type="number" readonly>
            {item.salePriceCents}
          </div>
        </div>
        <div>
          <label for="sourceUrl">Source Url</label>
          <div id="sourceUrl" name="sourceUrl" type="text" readonly>
            <a target="_blank" href={item.sourceUrl} name="sourceUrl">{item.sourceUrl}</a>
          </div>
        </div>
        <div>
          <label for="status">Status</label>
          <div id="status" name="status" type="number" readonly>
            {item.status}
          </div>
        </div>
        <div>
          <label for="name">Name</label>
          <div id="name" name="name" type="text" readonly>
            {item.name}
          </div>
        </div>
        <div>
          <label for="color">Color</label>
          <div id="color" name="color" type="text" readonly>
            {item.color}
          </div>
        </div>
        <div>
          <label for="size">Size</label>
          <div id="size" name="size" type="text" readonly>
            {item.size}
          </div>
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