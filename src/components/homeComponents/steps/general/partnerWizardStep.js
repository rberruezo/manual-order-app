import React from 'react';
import Item from 'components/homeComponents/steps/item';
import ShippingAndBilling from 'components/homeComponents/steps/shippingAndBilling';
import Payment from 'components/homeComponents/steps/payment';
import PartnerWizardResult from 'components/homeComponents/steps/partnerWizardResult';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import PartnerWizardStore from 'stores/partnerWizardStore';
import PartnerWizardActions from 'actions/partnerWizardActions';

@connectToStores
class PartnerWizardStep extends React.Component {
  constructor(props) {
    super(props);
  }

  static getStores(props) {
    return [PartnerWizardStore, OrderWizardStore];
  }

  static getPropsFromStores(props) {
    var state = PartnerWizardStore.getState();
    state.orderWizard = OrderWizardStore.getState();
    return state;
  }

  getPartner() {
    return this.props.orderWizard.order.partners[this.props.orderWizard.step-1];
  }  

  render() {
    switch(this.props.step-this.getPartner().items.length) {
      case 1:
        return <ShippingAndBilling  />
      case 2:
        return <Payment />
      case 3:
        return <PartnerWizardResult />
      default:
        return <Item />
    }
  }
}

export default PartnerWizardStep;