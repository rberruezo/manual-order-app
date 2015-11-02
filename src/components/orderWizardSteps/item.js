import React from 'react';

class Item extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <div className="fs-form-wrap" id="fs-form-wrap">
        <form id="myform" className="fs-form fs-form-overview fs-show" autocomplete="off">
          <h2>Item</h2>
          <ol className="fs-fields">
            <li>
              <label className="fs-field-label fs-anim-upper" for="quantity">Quantity</label>
              <input className="fs-anim-lower" id="quantity" name="quantity" type="number" value={item.quantity} onChange={this.handleChange} placeholder="Quantity" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="listPriceCents">List Price Cents</label>
              <input className="fs-anim-lower" id="listPriceCents" name="listPriceCents" type="number" value={item.listPriceCents} onChange={this.handleChange} placeholder="List Price Cents" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="salePriceCents">Sale Price Cents</label>
              <input className="fs-anim-lower" id="salePriceCents" name="salePriceCents" type="number" value={item.salePriceCents} onChange={this.handleChange} placeholder="Sale Price Cents" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="commissionCents">Commission Cents</label>
              <input className="fs-anim-lower" id="commissionCents" name="commissionCents" type="number" value={item.commissionCents} onChange={this.handleChange} placeholder="Commission Cents" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="apiKey">Api Key</label>
              <input className="fs-anim-lower" id="apiKey" name="apiKey" type="text" value={item.apiKey} onChange={this.handleChange} placeholder="Api Key" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="widgetUuid">Widget Uuid</label>
              <input className="fs-anim-lower" id="widgetUuid" name="widgetUuid" type="text" value={item.widgetUuid} onChange={this.handleChange} placeholder="Widget Uuid" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="sourceUrl">Source Url</label>
              <input className="fs-anim-lower" id="sourceUrl" name="sourceUrl" type="text" value={item.sourceUrl} onChange={this.handleChange} placeholder="Source Url" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="variantId">Variant Id</label>
              <input className="fs-anim-lower" id="variantId" name="variantId" type="number" value={item.variantId} onChange={this.handleChange} placeholder="Variant Id" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="status">Status</label>
              <input className="fs-anim-lower" id="status" name="status" type="number" value={item.status} onChange={this.handleChange} placeholder="Status" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="name">Name</label>
              <input className="fs-anim-lower" id="name" name="name" type="text" value={item.name} onChange={this.handleChange} placeholder="Name" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="description">Description</label>
              <input className="fs-anim-lower" id="description" name="description" type="textarea" value={item.description} onChange={this.handleChange} placeholder="Description" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="partnerName">Partner Name</label>
              <input className="fs-anim-lower" id="partnerName" name="partnerName" type="text" value={item.partnerName} onChange={this.handleChange} placeholder="Partner Name" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="brandName">Brand Name</label>
              <input className="fs-anim-lower" id="brandName" name="brandName" type="text" value={item.brandName} onChange={this.handleChange} placeholder="Brand Name" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="color">Color</label>
              <input className="fs-anim-lower" id="color" name="color" type="text" value={item.color} onChange={this.handleChange} placeholder="Color" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="size">Size</label>
              <input className="fs-anim-lower" id="size" name="size" type="text" value={item.size} onChange={this.handleChange} placeholder="Size" required="" />
            </li>
            <li>
              <label className="fs-field-label fs-anim-upper" for="image">Image</label>
              <input className="fs-anim-lower" id="image" name="image" type="text" value={item.image} onChange={this.handleChange} placeholder="Image" required="" />
            </li>
          </ol>
        </form>
      </div>
    )
  }

  handleChange = evt => {
    this.props.item[evt.target.name] = evt.target.value;
    this.setState(this.props.item);
  }
}

export default Item;