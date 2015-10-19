import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import UserService from 'services/userService';

@createActions(flux)
class LoginActions {
  constructor() {
    this.generateActions('updateEmail', 'updatePass');
  }

  loginUser(user) {
	  UserService.loginUser(user)
	    .then((status) => {
	    	console.log(status);
  			this.dispatch(user);
	    })
	    .catch((errorMessage) => {
	      console.log(errorMessage);
	      alert(errorMessage);
	      this.actions.loginFailed(errorMessage);
	    });
  }

	loginFailed(errorMessage) {
	  this.dispatch(errorMessage);
	}

	logoutUser() {
    UserService.logoutUser();
  	this.dispatch();
  }
}

export default LoginActions;
