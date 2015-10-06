import flux from 'control';
import {createActions} from 'alt/utils/decorators';

@createActions(flux)
class LoginActions {
  constructor() {
    this.generateActions('updateName');
  }
}

export default LoginActions;
