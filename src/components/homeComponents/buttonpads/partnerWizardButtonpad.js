import React from 'react';
import Buttonpad from 'components/homeComponents/buttonpads/general/buttonpad';
import {CANCEL, BACK, CONTINUE, SUBMIT_ITEM_STATUS, OK} from 'constants/stepButtonLabels';

class PartnerWizardButtonpad extends React.Component {

  getStepButtons() {
    var callbacks = this.props.callbacks;
    var buttons = [];
    switch(this.props.step) {
      case 1:
        buttons = [
                    {callback: callbacks.cancelChanges, text: CANCEL},
                    {callback: callbacks.nextStep, text: CONTINUE}
                  ];
        break;
      case (this.props.items.length+2):
        buttons = [
                    {callback: callbacks.previousStep, text: BACK},
                    {callback: callbacks.submitItemsStatus, text: SUBMIT_ITEM_STATUS}
                  ];
        break;
      case (this.props.items.length+3):
        buttons = [
                    {callback: callbacks.closeWizard, text: OK}
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

  render() {
    return (
      <Buttonpad buttons={this.getStepButtons()} />
    )
  }
}

export default PartnerWizardButtonpad;