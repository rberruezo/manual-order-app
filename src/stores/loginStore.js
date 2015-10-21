import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import LoginActions from 'actions/loginActions';
import UserLocalStorage from 'storage/userLocalStorage';

@createStore(flux)
class LoginStore {

  constructor() {
    this.user = UserLocalStorage.getPersistedUser();
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
    UserLocalStorage.persistUser(user);
  }

  @bind(LoginActions.logoutUser)
  logoutUser() {
    this.user = {};
    UserLocalStorage.logoutUser();
  }
}

export default LoginStore;
