import React from 'react';
import ItemStatus from 'components/homeComponents/resources/itemStatus';

class Item extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <div className="simple-form">
        <h3>Item</h3>
        <div>
          <label>Quantity</label>
          <div id="quantity" name="quantity" type="number" readOnly>
            {item.quantity}
          </div>
        </div>
        <div>
          <label>List Price Cents</label>
          <div id="listPriceCents" name="listPriceCents" type="number" readOnly>
            {item.listPriceCents}
          </div>
        </div>
        <div>
          <label>Sale Price Cents</label>
          <div id="salePriceCents" name="salePriceCents" type="number" readOnly>
            {item.salePriceCents}
          </div>
        </div>
        <div>
          <label>Source Url</label>
          <div id="sourceUrl" name="sourceUrl" type="text" readOnly>
            <a target="_blank" href={item.sourceUrl} name="sourceUrl">{item.sourceUrl}</a>
          </div>
        </div>
        <div>
          <label>Name</label>
          <div id="name" name="name" type="text" readOnly>
            {item.name}
          </div>
        </div>
        <div>
          <label>Color</label>
          <div id="color" name="color" type="text" readOnly>
            {item.color}
          </div>
        </div>
        <div>
          <label>Size</label>
          <div id="size" name="size" type="text" readOnly>
            {item.size}
          </div>
        </div>
        <ItemStatus selectedValue={item.status} onChange={this.handleStatusChange} />
      </div>
    )
  }

  handleStatusChange = value => {
    this.props.item.status = value;
    this.setState(this.props.item);
  }
}

export default Item;