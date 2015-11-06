import React from 'react';
import {ITEM_OUT_OF_STOCK, ORDER_ITEM_PROCESSED_SUCCESSFULLY, ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE, ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE} from 'constants/orderStatus';

class ItemStatus extends React.Component {

	render() {
		return (
			<div>
			  <label for="status">Status</label>
			  <br/>
			  <input id="status" name="status" type="radio" value={ITEM_OUT_OF_STOCK}>Item out of Stock</input>
			  <br/>
			  <input id="status" name="status" type="radio" value={ORDER_ITEM_PROCESSED_SUCCESSFULLY}>Item processed succesfully</input>
			  <br/>
			  <input id="status" name="status" type="radio" value={ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE}>Not processed due Order Failure</input>
			  <br/>
			  <input id="status" name="status" type="radio" value={ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE}>Not processed due Site Failure</input>
			</div>
		)
	}

  handleChange = evt => {
    this.props.status[evt.target.name] = evt.target.value;
    this.setState(this.props.status);
  }
}

export default ItemStatus;