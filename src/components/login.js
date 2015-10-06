import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from 'stores/loginStore';
import LoginActions from 'actions/loginActions';

@connectToStores
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    }
  }

  static getStores(props) {
    return [LoginStore];
  }

  static getPropsFromStores(props) {
    return LoginStore.getState();
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.user} onChange={this.onChange}/>
        <h1>It works: {this.props.user}</h1>
      </div>
    );
  }

  onChange = evt => {
    this.setState({user: evt.target.value});
    LoginActions.updateUser(evt.target.value);
  }
}

export default Login;
