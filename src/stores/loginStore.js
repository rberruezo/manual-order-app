import flux from 'control';
import {createStore, bind} from 'alt/utils/decorators';
import actions from 'actions/loginActions';

@createStore(flux)
class LoginStore {
  name = 'awesome';

  @bind(actions.updateName)
  updateName(name) {
    this.name = name;
  }
}

export default LoginStore;
