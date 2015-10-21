import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import AuthService from 'services/authService';

var APP_TOKEN = 'MO-95196396';

@createActions(flux)
class LoginActions {
  constructor() {
    this.generateActions('updateEmail', 'updatePass');
  }

  loginUser(user) {
  	var request = user;
  	request.token = APP_TOKEN;
	  AuthService.loginUser(request)
	    .then((status) => {
	    	user.token = status.user_token;
	    	user.pass = null;
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
  	this.dispatch();
  }
}

export default LoginActions;
