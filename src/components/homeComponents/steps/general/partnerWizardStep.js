import React from 'react';
import Item from 'components/homeComponents/steps/item';
import ShippingAndBilling from 'components/homeComponents/steps/shippingAndBilling';
import Payment from 'components/homeComponents/steps/payment';
import PartnerWizardResult from 'components/homeComponents/steps/partnerWizardResult';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import connectToStores from 'alt/utils/connectToStores';
import PartnerWizardStore from 'stores/partnerWizardStore';
import OrderWizardStore from 'stores/orderWizardStore';
import {CANCEL, BACK, CONTINUE, SUBMIT_ITEM_STATUS, OK} from 'constants/stepButtonLabels';
import {Grid, Row, Col} from 'react-flexbox-grid';

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

  getStepButtons() {
    var callbacks = this.props.callbacks;
    var buttons = [];
    switch(this.props.step) {
      case 1:
        buttons = [
                    {callback: callbacks.nextStep, text: CONTINUE}
                  ];
        break;
      case (this.getPartner().items.length+2):
        buttons = [
                    {callback: callbacks.previousStep, text: BACK},
                    {callback: callbacks.submitItemsStatus, text: SUBMIT_ITEM_STATUS}
                  ];
        break;
      default:
        buttons = [
                    {callback: callbacks.previousStep, text: BACK},
                    {callback: callbacks.nextStep, text: CONTINUE}
                  ];
    }
    return buttons;
  }

  getPartner() {
    return this.props.orderWizard.order.partners[this.props.orderWizard.step-1];
  }

  render() {
    switch(this.props.step-this.getPartner().items.length) {
      case 1:
        return (
          <div>
            <ShippingAndBilling  />
            <Buttonpad buttons={this.getStepButtons()} />
          </div>
        )
      case 2:
        return (
          <div>
            <Payment />
            <Buttonpad buttons={this.getStepButtons()} />
          </div>
        )
      case 3:
        return (
          <Row className='center-md'>
            <Col>
              <PartnerWizardResult callbacks={this.props.callbacks} />
            </Col>
          </Row>
        )
      default:
        return (
          <div>
            <Item />
            <Buttonpad buttons={this.getStepButtons()} />
          </div>
        )
    }
  }
}

export default PartnerWizardStep;