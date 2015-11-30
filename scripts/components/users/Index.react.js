var React = require('react');
var UserStore = require('../../stores/UserStore');
var UserActions = require('../../actions/UserActions');

var Router = require('react-router');
var Route = Router.Route;
var Link = Router.Link;

//Layout

var RightBar = require('../layouts/RightBar.react');
var LeftBar = require('../layouts/LeftBar.react');
var TopBar = require('../layouts/TopBar.react');
var OverLay = require('../layouts/OverLay.react');
var Reloader = require('../layouts/Reloader.react');

function getAllUsers() {
  return {
    allUsers: UserStore.getUsers()
  };
}

// Flux cart view
var Index = React.createClass({
  
  getInitialState: function() {
    return getAllUsers();
  },

  componentDidMount: function() {
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },

  register: function() {

    var email = React.findDOMNode(this.refs.email).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();

    var userData = {
      email: email,
      password: password
    }

    UserActions.login(userData);

    React.findDOMNode(this.refs.email).value = '';
    React.findDOMNode(this.refs.password).value = '';
  },

  // Render cart view
  render: function() {

    return (
      <div className="wrapper">
        <LeftBar/>
        <div className="content" id="content">
          
          <OverLay/>     
          <TopBar/>
           'asdasd'
        </div>  
        <RightBar/>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getAllUsers());
  }

});

module.exports = Index;