import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import AuthService from 'services/authService';
import {APP_TOKEN} from 'constants/constants';

@createActions(flux)
class LoginActions {
  constructor() {
    this.generateActions('updateEmail', 'updatePass', 'loginFailed', 'logoutUser');
  }

  loginUser(user) {
  	var request = user;
  	request.app_token = APP_TOKEN;
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
