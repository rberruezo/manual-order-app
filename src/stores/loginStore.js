import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/loginActions';

@createStore(flux)
class LoginStore {
  email = 'user@shopbeam.com';
  pass = 'PSWD';

  @bind(actions.updateEmail)
  updateEmail(email) {
    this.email = email;
  }

  @bind(actions.updatePass)
  updatePass(pass) {
    this.pass = pass;
  }
}

export default LoginStore;
