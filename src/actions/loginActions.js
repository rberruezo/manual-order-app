import flux from 'control';
import {createActions} from 'alt/utils/decorators';

@createActions(flux)
class LoginActions {
  constructor() {
    this.generateActions('updateUser');
  }
}

export default LoginActions;
