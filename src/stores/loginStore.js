import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/loginActions';

@createStore(flux)
class LoginStore {
  user = 'user@shopbeam.com';

  @bind(actions.updateUser)
  updateUser(user) {
    this.user = user;
  }
}

export default LoginStore;
