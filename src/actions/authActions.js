import flux from 'control';
import {createActions} from 'alt/utils/decorators';
import AuthService from 'services/authService';

@createActions(flux)
class AuthActions {
  authenticateApp() {
		AuthService.authenticateApp()
	    .then((status) => {
	      this.dispatch(status.user_token);
	    })
	    .catch((errorMessage) => {
	      console.log(errorMessage);
	      alert(errorMessage);
	    });
  }
}

export default AuthActions;
