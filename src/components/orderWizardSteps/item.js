import React from 'react';

class Item extends React.Component {
  render() {
    var item = this.props.item;
    return (
      <div>
      	<h3> Item </h3>
        <input name="quantity" type="number" value={item.quantity} onChange={this.handleChange} placeholder="Quantity" className="login-mail"/>
        <input name="listPriceCents" type="number" value={item.listPriceCents} onChange={this.handleChange} placeholder="List Price Cents" className="login-mail"/>
        <input name="salePriceCents" type="number" value={item.salePriceCents} onChange={this.handleChange} placeholder="Sale Price Cents" className="login-mail"/>
        <input name="commissionCents" type="number" value={item.commissionCents} onChange={this.handleChange} placeholder="Commission Cents" className="login-mail"/>
        <input name="apiKey" type="text" value={item.apiKey} onChange={this.handleChange} placeholder="Api Key" className="login-mail"/>
        <input name="widgetUuid" type="text" value={item.widgetUuid} onChange={this.handleChange} placeholder="Widget Uuid" className="login-mail"/>
        <input name="sourceUrl" type="text" value={item.sourceUrl} onChange={this.handleChange} placeholder="Source Url" className="login-mail"/>
        <input name="variantId" type="number" value={item.variantId} onChange={this.handleChange} placeholder="Variant Id" className="login-mail"/>
        <input name="status" type="number" value={item.status} onChange={this.handleChange} placeholder="Status" className="login-mail"/>
        <input name="name" type="text" value={item.name} onChange={this.handleChange} placeholder="Name" className="login-mail"/>
        <input name="description" type="textarea" value={item.description} onChange={this.handleChange} placeholder="Description" className="login-mail"/>
        <input name="partnerName" type="text" value={item.partnerName} onChange={this.handleChange} placeholder="Partner Name" className="login-mail"/>
        <input name="brandName" type="text" value={item.brandName} onChange={this.handleChange} placeholder="Brand Name" className="login-mail"/>
        <input name="color" type="text" value={item.color} onChange={this.handleChange} placeholder="Color" className="login-mail"/>
        <input name="size" type="text" value={item.size} onChange={this.handleChange} placeholder="Size" className="login-mail"/>
        <input name="image" type="text" value={item.image} onChange={this.handleChange} placeholder="Image" className="login-mail"/>
      </div>
    )
  }

  handleChange = evt => {
    this.props.item[evt.target.name] = evt.target.value;
    this.setState(this.props.item);
  }
}

export default Item;