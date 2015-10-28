import React from 'react';
import Mocks from 'mocks/mocks';
import connectToStores from 'alt/utils/connectToStores';
import OrdersStore from 'stores/ordersStore';
import OrdersActions from 'actions/ordersActions';

var Griddle = require('griddle-react');

@connectToStores
class Orders extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      orders: props.orders
    };
  }

  static getStores(props) {
    return [OrdersStore];
  }

  static getPropsFromStores(props) {
    return OrdersStore.getState();
  }

	getColumnsNames() {
		return ["createdAt", "orderId", "consumerName", "itemCount"];
	}

	getColumnsMetadata() {
		return [
			{"columnName": "createdAt", "order": 4, "locked": false, "visible": true, "displayName": "Created At"},
		  {"columnName": "orderId", "order": 1, "locked": false, "visible": true, "displayName": "ID"},
		  {"columnName": "consumerName", "order": 2, "locked": false, "visible": true, "displayName": "Consumer"},
		  {"columnName": "itemCount", "order": 3, "locked": false, "visible": true, "displayName": "Item Count"}
		];
	}

	getArrayOfOrders() {
		var obj = this.props.orders;
		return Object.keys(obj).map(function (key) { return obj[key]; });
	}

	handleOrderClick(row, evt) {
    OrdersActions.dequeueOrder(row.props.data.orderId);
  }

  render() {
    return (
    	<div>
				<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
				<script src="//fb.me/react-0.13.2.js"></script>
				<script src="//fb.me/JSXTransformer-0.13.2.js"></script>
				<script type="text/javascript" src="scripts/griddle.js"></script>

				<Griddle
					results={this.getArrayOfOrders()}
					tableClassName="table"
					showFilter={true}
					showSettings={true}
					columns={this.getColumnsNames()}
					columnMetadata={this.getColumnsMetadata()}
					noDataMessage={"No data could be found."}
					initialSort="createdAt"
					initialSortAscending={true}
					sortDescendingComponent=' v'
					sortAscendingComponent=' ^'
					onRowClick={this.handleOrderClick}
				/>

			</div>
    );
  }

}

export default Orders;
