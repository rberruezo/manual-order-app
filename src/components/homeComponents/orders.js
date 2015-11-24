import React from 'react';
import OrdersActions from 'actions/ordersActions';
import connectToStores from 'alt/utils/connectToStores';
import OrdersStore from 'stores/ordersStore';
import StatusDescription from 'components/homeComponents/resources/statusDescription';
import Griddle from 'griddle-react';
import Mocks from 'mocks/mocks';

class CompleteNameComponent extends React.Component{
  render() {
    return (<div> {this.props.rowData.user.firstName + ' ' + this.props.rowData.user.lastName} </div>);
  }
};

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
		return ["createdAt", "orderId", "user", "itemCount", "status"];
	}

	getColumnsMetadata() {
		return [
			{columnName: "createdAt", order: 4, locked: false, visible: true, displayName: "Created At"},
		  {columnName: "orderId", order: 1, locked: false, visible: true, displayName: "ID"},
		  {columnName: "user", order: 2, locked: false, visible: true, displayName: "Consumer", customComponent: CompleteNameComponent},
		  {columnName: "itemCount", order: 3, locked: false, visible: true, displayName: "Item Count"},
		  {columnName: "status", order: 5, locked: false, visible: true, displayName: "Status", customComponent: StatusDescription}
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
