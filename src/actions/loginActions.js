import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import AuthService from 'services/authService';

@createActions(flux)
class LoginActions {
  constructor() {
    this.generateActions('updateEmail', 'updatePassword', 'loginFailed', 'logoutUser');
  }

  loginUser(user) {
  	var request = user;
	  AuthService.loginUser(request)
	    .then((status) => {
	    	var userInfo = {
	    		email: user.email,
	    		token: status.user_token
	    	};
  			this.dispatch(userInfo);
	    })
	    .catch((errorMessage) => {
	      alert(errorMessage);
	      this.actions.loginFailed(errorMessage);
	    });
  }
}

export default LoginActions;
