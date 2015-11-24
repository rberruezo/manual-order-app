import React from 'react';
import Item from 'components/homeComponents/steps/item';
import ShippingAndBilling from 'components/homeComponents/steps/shippingAndBilling';
import Payment from 'components/homeComponents/steps/payment';
import PartnerWizardResult from 'components/homeComponents/steps/partnerWizardResult';
import Buttonpad from 'components/homeComponents/resources/buttonpad';
import connectToStores from 'alt/utils/connectToStores';
import OrderWizardStore from 'stores/orderWizardStore';
import PartnerWizardStore from 'stores/partnerWizardStore';
import PartnerWizardActions from 'actions/partnerWizardActions';
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

  getPartner() {
    return this.props.orderWizard.order.partners[this.props.orderWizard.step-1];
  }  

  getStepButtons() {
    var callbacks = this.props.callbacks;
    var buttons = [];
    switch(this.props.step) {
      case 1:
        buttons = [
                    {callback: PartnerWizardActions.nextStep, text: CONTINUE}
                  ];
        break;
      case (this.getPartner().items.length+2):
        buttons = [
                    {callback: PartnerWizardActions.previousStep, text: BACK},
                    {callback: PartnerWizardActions.submitStatus.bind(PartnerWizardActions, this.getPartner().items), text: SUBMIT_ITEM_STATUS}
                  ];
        break;
      default:
        buttons = [
                    {callback: PartnerWizardActions.previousStep, text: BACK},
                    {callback: PartnerWizardActions.nextStep, text: CONTINUE}
                  ];
    }
    return buttons;
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
              <PartnerWizardResult />
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