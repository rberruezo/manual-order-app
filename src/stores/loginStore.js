import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import LoginActions from 'actions/loginActions';
import AuthActions from 'actions/authActions';

@createStore(flux)
class LoginStore {
  user = {
  	email: '',
    pass: '',
    token: ''
  };

  @bind(LoginActions.updateEmail)
  updateEmail(email) {
    this.user.email = email;
  }

  @bind(LoginActions.updatePass)
  updatePass(pass) {
    this.user.pass = pass;
  }

  @bind(LoginActions.loginUser)
  loginUser(user) {
    this.user.email = user.email;
    this.user.pass = user.pass;
  }

  @bind(LoginActions.logoutUser)
  logoutUser() {
    this.user = {email: '', pass: '', token: ''};
  }

  @bind(AuthActions.authenticateApp)
  authenticateApp(token) {
    console.log('authenticateApp');
    console.log(token);
    this.user.token = token;
  }
}

export default LoginStore;
