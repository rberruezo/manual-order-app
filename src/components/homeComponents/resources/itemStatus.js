import React from 'react';
import RadioGroup from 'react-radio-group';
import {ITEM_OUT_OF_STOCK, ORDER_ITEM_PROCESSED_SUCCESSFULLY, ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE, ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE} from 'constants/orderStatus';


class ItemStatus extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      selectedValue: props.selectedValue
    };
  }

  componentWillReceiveProps(nextProps) {
	  this.state = {
	    selectedValue: nextProps.selectedValue
	  };
	}

  handleChange = value => {
	  this.setState({
	  	selectedValue: value
	  });
	  this.props.onChange(value);
  }

	render() {
		return (
			<div>
				<RadioGroup name="selectedValue" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
				{Radio => (
					<div>
						<Radio value={ITEM_OUT_OF_STOCK} />Item out of Stock
						<Radio value={ORDER_ITEM_PROCESSED_SUCCESSFULLY} />Item processed succesfully
						<Radio value={ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE} />Not processed due Order Failure
						<Radio value={ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE} />Not processed due Site Failure
					</div>
				)}
				</RadioGroup>
			</div>
		)
	}

}

export default ItemStatus;