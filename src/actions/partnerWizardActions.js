import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import OrdersService from 'services/ordersService';

@createActions(flux)
class PartnerWizardActions {
  constructor() {
    this.generateActions('updateStep', 'previousStep', 'nextStep', 'resetResult', 'lastStep', 'closeWizard', 'cancelChanges');
  }

  submitItemsStatus(items) {
    var request = {
      itemsStatus: items.map(function(item) {
        return {id: item.id, status: item.status};
      })
    };
    OrdersService.submitItemsStatus(request)
      .then((response) => {
        this.dispatch(response);
      })
      .catch((errorMessage) => {
        alert(errorMessage);
      });
  }

  submitStatus(items) {
    PartnerWizardActions.resetResult();
    PartnerWizardActions.updateStep(items.length+3);
    PartnerWizardActions.submitItemsStatus(items);
  }
}

export default PartnerWizardActions;
