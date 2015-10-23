import React from 'react';
import OrderTable from 'components/ordersTable';
import NavigationBar from 'components/navigationBar';

class Home extends React.Component {

  render() {
    return (
    	<div>
				<NavigationBar/>
				<OrderTable/>
			</div>
    );
  }

}

export default Home;
