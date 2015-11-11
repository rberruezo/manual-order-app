import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import OrdersService from 'services/ordersService';

@createActions(flux)
class PartnerWizardActions {
  constructor() {
    this.generateActions('updateStep');
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
}

export default PartnerWizardActions;
