import React from 'react';
import OrderWizardActions from 'actions/orderWizardActions';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import StatusDescription from 'components/homeComponents/resources/statusDescription';
import Utilities from 'utilities/utilities';
import {ORDER_REVIEW} from 'constants/stepTitles';
import {SUBMIT_ORDER_STATUS} from 'constants/stepButtonLabels';
import Griddle from 'griddle-react';

@connectToStores
class OrderReview extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [OrderWizardStore];
  }

  static getPropsFromStores(props) {
    return OrderWizardStore.getState();
  }
  
	getItemsData() {
		var itemsData = [];
		this.props.order.partners.map(function (partner) {
			partner.items.map(function (item) {
				itemsData.push({
					'partner': partner.name,
					'name': item.name,
					'quantity': item.quantity,
					'color': item.color,
					'size': item.size,
					'status': item.status
				});
			});
		});
		return itemsData;
	}

	getColumnsMetadata() {
		return [
			{columnName: "partner", order: 1, locked: false, visible: true, displayName: "Partner"},
		  {columnName: "name", order: 2, locked: false, visible: true, displayName: "Product"},
		  {columnName: "quantity", order: 3, locked: false, visible: true, displayName: "Quantity"},
		  {columnName: "color", order: 4, locked: false, visible: true, displayName: "Color"},
		  {columnName: "size", order: 5, locked: false, visible: true, displayName: "Size"},
		  {columnName: "status", order: 6, locked: false, visible: true, displayName: "Status", customComponent: StatusDescription}
		];
	}

  render() {
    return (
      <div>
	    	<div>
	        <h2>{ORDER_REVIEW}</h2>
	        Status
	        <StatusDescription data={Utilities.calculateOrderStatus(this.props.order)} />
		    	<div>
						<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
						<script src="//fb.me/react-0.13.2.js"></script>
						<script src="//fb.me/JSXTransformer-0.13.2.js"></script>
						<script type="text/javascript" src="scripts/griddle.js"></script>
						<Griddle
							results={this.getItemsData()}
							tableClassName="table"
							showFilter={false}
							showSettings={false}
							columnMetadata={this.getColumnsMetadata()}
							noDataMessage={"No data could be found."}
							sortDescendingComponent=' v'
							sortAscendingComponent=' ^'
						/>
					</div>
		    </div>
        <Buttonpad buttons={[
          {callback: OrderWizardActions.submitStatus.bind(OrderWizardActions, this.props.order), text: SUBMIT_ORDER_STATUS}
        ]} />
      </div>
    )
  }

}

export default OrderReview;