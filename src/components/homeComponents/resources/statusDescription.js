import React from 'react';
import {INVALID_ITEM, INVALID_ITEM_TITLE} from 'constants/orderStatus';
import {VALID_ITEM, VALID_ITEM_TITLE} from 'constants/orderStatus';
import {PENDING_WHILE_IMPORT_UNDERWAY, PENDING_WHILE_IMPORT_UNDERWAY_TITLE} from 'constants/orderStatus';
import {PENDING_ORDER_NEEDS_TO_BE_PLACED, PENDING_ORDER_NEEDS_TO_BE_PLACED_TITLE} from 'constants/orderStatus';
import {TEST_ORDER, TEST_ORDER_TITLE} from 'constants/orderStatus';
import {ITEM_OUT_OF_STOCK, ITEM_OUT_OF_STOCK_TITLE} from 'constants/orderStatus';
import {ITEM_NOT_AVAILABLE_AS_ORDERED, ITEM_NOT_AVAILABLE_AS_ORDERED_TITLE} from 'constants/orderStatus';
import {ITEM_RETURNED, ITEM_RETURNED_TITLE} from 'constants/orderStatus';
import {EXCEPTION_AUTOMATED_ORDER_COULDNT_BE_PLACED, EXCEPTION_AUTOMATED_ORDER_COULDNT_BE_PLACED_TITLE} from 'constants/orderStatus';
import {PENDING_ORDER_IS_BEING_PLACED, PENDING_ORDER_IS_BEING_PLACED_TITLE} from 'constants/orderStatus';
import {PARTIALLY_COMPLETED_ORDER, PARTIALLY_COMPLETED_ORDER_TITLE} from 'constants/orderStatus';
import {SUCCESSFULLY_COMPLETED_ORDER, SUCCESSFULLY_COMPLETED_ORDER_TITLE} from 'constants/orderStatus';
import {ORDER_ITEM_PROCESSED_SUCCESSFULLY, ORDER_ITEM_PROCESSED_SUCCESSFULLY_TITLE} from 'constants/orderStatus';
import {ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE, ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE_TITLE} from 'constants/orderStatus';
import {ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE, ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE_TITLE} from 'constants/orderStatus';
import {UNKNOWN_STATUS_TITLE} from 'constants/orderStatus';

class StatusDescription extends React.Component{

	getStatusDescription() {
		var description;
		switch (this.props.data) {
			case INVALID_ITEM:
				description = INVALID_ITEM_TITLE;
				break;
			case VALID_ITEM:
				description = VALID_ITEM_TITLE;
				break;
			case PENDING_WHILE_IMPORT_UNDERWAY:
				description = PENDING_WHILE_IMPORT_UNDERWAY_TITLE;
				break;
			case PENDING_ORDER_NEEDS_TO_BE_PLACED:
				description = PENDING_ORDER_NEEDS_TO_BE_PLACED_TITLE;
				break;
			case TEST_ORDER:
				description = TEST_ORDER_TITLE;
				break;
			case ITEM_OUT_OF_STOCK:
				description = ITEM_OUT_OF_STOCK_TITLE;
				break;
			case ITEM_NOT_AVAILABLE_AS_ORDERED:
				description = ITEM_NOT_AVAILABLE_AS_ORDERED_TITLE;
				break;
			case ITEM_RETURNED:
				description = ITEM_RETURNED_TITLE;
				break;
			case EXCEPTION_AUTOMATED_ORDER_COULDNT_BE_PLACED:
				description = EXCEPTION_AUTOMATED_ORDER_COULDNT_BE_PLACED_TITLE;
				break;
			case PENDING_ORDER_IS_BEING_PLACED:
				description = PENDING_ORDER_IS_BEING_PLACED_TITLE;
				break;
			case PARTIALLY_COMPLETED_ORDER:
				description = PARTIALLY_COMPLETED_ORDER_TITLE;
				break;
			case SUCCESSFULLY_COMPLETED_ORDER:
				description = SUCCESSFULLY_COMPLETED_ORDER_TITLE;
				break;
			case ORDER_ITEM_PROCESSED_SUCCESSFULLY:
				description = ORDER_ITEM_PROCESSED_SUCCESSFULLY_TITLE;
				break;
			case ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE:
				description = ORDER_ITEM_NOT_PROCESSED_DUE_ORDER_FAILURE_TITLE;
				break;
			case ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE:
				description = ORDER_ITEM_NOT_PROCESSED_DUE_SITE_FAILURE_TITLE;
				break;
      default:
      	description = UNKNOWN_STATUS_TITLE;
      }
      return description;
	}

  render() {
    return <div>{this.getStatusDescription()}</div>;
  }
  
};

export default StatusDescription;