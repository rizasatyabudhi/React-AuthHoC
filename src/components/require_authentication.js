import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {
    
    // This is required so our component can use this.context
    // We pass properties from router (react-router) to this component
    static contextTypes = {
      router: React.PropTypes.object
    }

    // When the component is about to be rendered,
    // if the user is not authenticated, then redirect them to home
    componentWillMount(){
      if (!this.props.authenticated){
        this.context.router.history.push('/');
      }
    }

    // When the component is going to change state (from authenticated (singed in) to not authenticated (signed out) )
    // redirect the user to home
    componentWillUpdate(nextProps){
      if (!nextProps.authenticated){
        this.context.router.history.push('/');
      }

    }

    
    render() {
      
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}

