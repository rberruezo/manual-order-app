import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import UserService from 'services/userService';
import AuthService from 'services/authService';

@createActions(flux)
class AuthActions {
  authenticateApp() {
		AuthService.authenticateApp()
	    .then((status) => {
	    	UserService.setUserToken(status.user_token);
	    })
	    .catch((errorMessage) => {
	      console.log(errorMessage);
	      alert(errorMessage);
	    });
  }
}

export default AuthActions;
