import React from 'react';
import Mocks from 'mocks/mocks';

var Griddle = require('griddle-react');

class OrdersTable extends React.Component {

  render() {
    return (
    	<div>
				<script src="//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min.js"></script>
				<script src="//fb.me/react-0.13.2.js"></script>
				<script src="//fb.me/JSXTransformer-0.13.2.js"></script>
				<script type="text/javascript" src="scripts/griddle.js"></script>

				<Griddle results={Mocks.getFakeData()} tableClassName="table" showFilter={true} showSettings={true} columns={["name", "city", "country"]}/>

			</div>
    );
  }

}

export default OrdersTable;
