import {ORDER_ITEM_PROCESSED_SUCCESSFULLY} from 'constants/orderStatus';
import {PARTIALLY_COMPLETED_ORDER} from 'constants/orderStatus';
import {SUCCESSFULLY_COMPLETED_ORDER} from 'constants/orderStatus';

var utilities = {

	copyObjectAttributes: function(objDest, objSrc) {
		var objSrcClone = JSON.parse(JSON.stringify(objSrc));
		for (var key in objSrcClone) {
			objDest[key] = objSrcClone[key];
		}
	},

	calculateOrderStatus: function(order) {
    for (var i = 0; i < order.partners.length; i++) {
      for (var j = 0; j < order.partners[i].items.length; j++) {
        if (order.partners[i].items[j].status != ORDER_ITEM_PROCESSED_SUCCESSFULLY) {
          return PARTIALLY_COMPLETED_ORDER;
        }
      }
    }
    return SUCCESSFULLY_COMPLETED_ORDER;
	}	

}

export default utilities;