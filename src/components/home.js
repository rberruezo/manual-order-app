import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import NavigationBar from 'components/homeComponents/navigationBar';
import Orders from 'components/homeComponents/orders';
import OrderWizard from 'components/homeComponents/orderWizard';

@connectToStores
class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [OrderWizardStore];
  }

  static getPropsFromStores(props) {
    return OrderWizardStore.getState();
  }

  isOrderSelected() {
  	return OrderWizardStore.getState().order != undefined;
  }

  render() {
    if (this.isOrderSelected()) {
      return <OrderWizard />
    }
    return (
      <div>
        <NavigationBar/>
        <Orders />
      </div>
    )
  }

}

export default Home;
