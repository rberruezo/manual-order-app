import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/loginActions';

@createStore(flux)
class LoginStore {
  user = {
  	email: '',
  	pass: ''
  };

  @bind(actions.updateEmail)
  updateEmail(email) {
    this.user.email = email;
  }

  @bind(actions.updatePass)
  updatePass(pass) {
    this.user.pass = pass;
  }

  @bind(actions.loginUser)
  loginUser(user) {
    console.log('LOGIN ' + user.email);
    this.user = user;
  }

  @bind(actions.logoutUser)
  logoutUser() {
    console.log('LOGOUT');
    this.user = {email: '', pass: ''};
  }
}

export default LoginStore;
