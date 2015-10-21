import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import LoginActions from 'actions/loginActions';
import UserService from 'services/userService';

var APP_TOKEN = 'MO-95196396';

@createStore(flux)
class LoginStore {

  constructor() {
    this.user = UserService.getPersistedUser();
    if (this.user == null) {
      this.user = {
      	email: '',
        pass: '',
        token: APP_TOKEN
      };
    }
  }

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
    this.user = user;
    UserService.persistUser(user);
  }

  @bind(LoginActions.logoutUser)
  logoutUser() {
    this.user = {email: '', pass: '', token: APP_TOKEN};
    UserService.logoutUser();
  }
}

export default LoginStore;
