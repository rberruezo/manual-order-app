import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import UserService from 'services/userService';
import AuthService from 'services/authService';

@createActions(flux)
class AuthActions {
  authenticateApp() {
  	if (!UserService.isUserTokenSet()) {  	
			AuthService.authenticateApp()
		    .then((status) => {
		      UserService.setUserToken(status.user_token);
		      this.dispatch(status.user_token);
		    })
		    .catch((errorMessage) => {
		      console.log(errorMessage);
		      alert(errorMessage);
		    });
    }
  }
}

export default AuthActions;
