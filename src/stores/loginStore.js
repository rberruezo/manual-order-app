import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/loginActions';

@createStore(flux)
class LoginStore {
  user = {
  	email: '',
  	pass: ''
  };

  is_logged_in = false;

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
    this.is_logged_in = true;
    this.user = user;
    // console.log('LOGIN ' + user.email);
    // console.log(this.user);
  }

  @bind(actions.logoutUser)
  logoutUser() {
    this.is_logged_in = false;
    this.user = {email: '', pass: ''};
    // console.log('LOGOUT');
    // console.log(this.user);
  }

  isLoggedIn() {
    // console.log('loginStore - isLoggedIn');
    // console.log(this.user);
    return this.is_logged_in;
  }
}

export default LoginStore;
