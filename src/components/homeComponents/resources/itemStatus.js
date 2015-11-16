import React from 'react';
import RadioGroup from 'react-radio-group';
import {ITEM_OUT_OF_STOCK, ITEM_OUT_OF_STOCK_TITLE} from 'constants/orderStatus';
import {ORDER_ITEM_PROCESSED_SUCCESSFULLY, ORDER_ITEM_PROCESSED_SUCCESSFULLY_TITLE} from 'constants/orderStatus';
import {ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE, ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE_TITLE} from 'constants/orderStatus';
import {ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE, ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE_TITLE} from 'constants/orderStatus';

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
			<RadioGroup name="selectedValue" selectedValue={this.state.selectedValue} onChange={this.handleChange}>
			{Radio => (
				<div>
	        <h5>Status</h5>
	        <table className='wizard-table'>
	          <tbody className='wizard-tbody'>      
							<tr className='wizard-tr success'>
								<td><strong>{ORDER_ITEM_PROCESSED_SUCCESSFULLY_TITLE}</strong></td>
								<td><Radio value={ORDER_ITEM_PROCESSED_SUCCESSFULLY} /></td>
							</tr>
	            <tr className='wizard-tr error'>
	              <td><strong>{ITEM_OUT_OF_STOCK_TITLE}</strong></td>
								<td><Radio value={ITEM_OUT_OF_STOCK} /></td>
	            </tr>
							<tr className='wizard-tr error'>
								<td><strong>{ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE_TITLE}</strong></td>
								<td><Radio value={ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE} /></td>
							</tr>
							<tr className='wizard-tr error'>
								<td><strong>{ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE_TITLE}</strong></td>
								<td><Radio value={ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE} /></td>
							</tr>
            </tbody>
      		</table>
				</div>
			)}
			</RadioGroup>
		)
	}

}

export default ItemStatus;