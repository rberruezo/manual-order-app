import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import LoginActions from 'actions/loginActions';
import UserStorage from 'storage/userStorage';

@createStore(flux)
class LoginStore {

  constructor() {
    this.user = UserStorage.getUser();
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
    UserStorage.setUser(user);
  }

  @bind(LoginActions.loginFailed)
  loginFailed() {
    this.user.token = null;
  }

  @bind(LoginActions.logoutUser)
  logoutUser() {
    this.user = {};
    UserStorage.removeUser();
  }
}

export default LoginStore;
