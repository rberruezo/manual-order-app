import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import Address from 'components/homeComponents/resources/address';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import PartnerWizardActions from 'actions/partnerWizardActions';
import {SHIPPING_AND_BILLING} from 'constants/stepTitles';
import {BACK, CONTINUE} from 'constants/stepButtonLabels';

@connectToStores
class ShippingAndBilling extends React.Component {
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
    return (
      <div>
        <div>
          <h3>Shipping address</h3>
          <Address address={this.props.order.shippingAddress} />
          <h3>Billing address</h3>
          <Address address={this.props.order.billingAddress} />
        </div>
        <Buttonpad buttons={[
                    {callback: PartnerWizardActions.previousStep, text: BACK},
                    {callback: PartnerWizardActions.nextStep, text: CONTINUE}
                  ]} />
      </div>
    )
  }
}

export default ShippingAndBilling;