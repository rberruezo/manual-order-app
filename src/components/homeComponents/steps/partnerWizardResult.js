import React from 'react';
import WizardResult from 'components/homeComponents/steps/general/wizardResult';
import connectToStores from 'alt/utils/connectToStores';
import PartnerWizardStore from 'stores/partnerWizardStore';
import OrderWizardStore from 'stores/orderWizardStore';
import PartnerWizardActions from 'actions/partnerWizardActions';
import {CLOSE, CONTINUE_ANYWAY, OK, TRY_AGAIN} from 'constants/stepButtonLabels';
import {ITEM_STATUS_SUBMISSION_SUCCESS, ITEM_STATUS_SUBMISSION_FAILURE} from 'constants/messages';

@connectToStores
class PartnerWizardResult extends WizardResult {
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

  getSuccessButtons() {
    return [
        {callback: PartnerWizardActions.closeWizard, text: OK, type: 'success'}
      ];
  }

  getSuccessMessage() {
    return ITEM_STATUS_SUBMISSION_SUCCESS;
  }

  getFailureButtons() {
    return [
        {callback: PartnerWizardActions.submitStatus.bind(PartnerWizardActions, this.getPartner().items), text: TRY_AGAIN},
        {callback: PartnerWizardActions.cancelChanges.bind(PartnerWizardActions, this.props.step-1), text: CONTINUE_ANYWAY, type: 'error'}
      ];
  }

  getFailureMessage() {
    return ITEM_STATUS_SUBMISSION_FAILURE;
  }

}

export default PartnerWizardResult;
