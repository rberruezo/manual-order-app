import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import LoginActions from 'actions/loginActions';
import UserService from 'services/userService';

@createStore(flux)
class LoginStore {

  constructor() {
    this.user = UserService.getPersistedUser();
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
    this.user = {};
    UserService.logoutUser();
  }
}

export default LoginStore;
