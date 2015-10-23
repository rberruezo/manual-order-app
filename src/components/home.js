import React from 'react';
import Orders from 'components/orders';
import NavigationBar from 'components/navigationBar';

class Home extends React.Component {

  render() {
    return (
    	<div>
				<NavigationBar/>
				<Orders/>
			</div>
    );
  }

}

export default Home;
