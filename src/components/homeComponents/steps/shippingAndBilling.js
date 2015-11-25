import React from 'react';
import PartnerWizardActions from 'actions/partnerWizardActions';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import Address from 'components/homeComponents/resources/address';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import {BACK, CONTINUE} from 'constants/stepButtonLabels';
import {SHIPPING_AND_BILLING} from 'constants/stepTitles';

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
      <section className="wizard-subbox">
        <header className="wizard-subheader">
          <h3>Shipping address</h3>
        </header>
        <Address className='wizard-content' address={this.props.order.shippingAddress} />
        <header className="wizard-subheader">
          <h3>Billing address</h3>
        </header>
        <Address className='wizard-content' address={this.props.order.billingAddress} />
        <Buttonpad buttons={[
                    {callback: PartnerWizardActions.previousStep, text: BACK},
                    {callback: PartnerWizardActions.nextStep, text: CONTINUE}
                  ]} />
      </section>
    )
  }
}

export default ShippingAndBilling;