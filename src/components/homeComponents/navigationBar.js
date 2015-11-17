import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from 'stores/loginStore';
import LoginActions from 'actions/loginActions';
import {Grid, Row, Col} from 'react-flexbox-grid';

@connectToStores
class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  	this.setState(this.props);
  }

  static getStores(props) {
    return [LoginStore];
  }

  static getPropsFromStores(props) {
    return LoginStore.getState();
  }

  render() {
    return (
      <Row className='middle-md navigationBar'>
        <Col md={6}>
					<strong> {this.state.user.email} </strong> 
        </Col>
        <Col md={1} className='col-md-offset-5'>
	        <button className="logout-button" onClick={this.handleLogout}>Log out</button>
        </Col>
      </Row>
    );
  }

  handleLogout = evt => {
    evt.preventDefault();
    LoginActions.logoutUser();
  }
}

export default NavigationBar;
