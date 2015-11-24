import React from 'react';
import PartnerWizardFlux from 'components/homeComponents/fluxes/partnerWizardFlux';
import OrderReview from 'components/homeComponents/steps/orderReview';
import OrderWizardResult from 'components/homeComponents/steps/orderWizardResult';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';

@connectToStores
class OrderWizardStep extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [OrderWizardStore];
  }

  static getPropsFromStores(props) {
    return OrderWizardStore.getState();
  }

  render() {
    switch(this.props.step-this.props.order.partners.length) {
      case 1:
        return <OrderReview />
      case 2:
        return <OrderWizardResult />
      default:
        return <PartnerWizardFlux />
    }
  }

}

export default OrderWizardStep;