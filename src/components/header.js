import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { authenticate } from '../actions/index';

class Header extends Component {

  authButton() {
    if (this.props.authenticated) {
      return (<button
        className="btn btn-primary"
        onClick={() => this.props.authenticate(false)}
      >
      Sign Out</button>);
    }
    return (<button
      className="btn btn-primary"
      onClick={() => this.props.authenticate(true)}
    >
      Sign In</button>);
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
          </li>
        </ul>
      </nav>
    );
  }
}


function mapStateToProps(state) {
  // state.authenticated must be the same as the one in our reducer
  // so now, our Header can use the state by : this.props.authenticated
  return { authenticated: state.authenticated };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ authenticate }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
