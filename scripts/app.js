var React = require('react');
var PhuotActions = require('./actions/PhuotActions');
var PhuotComponents = require('./components/PhuotComponents.react');

var Reloader = require('./components/layouts/Reloader.react');

// Front End User
var UserRegister = require('./components/users/UserRegister.react');
var UserLogin = require('./components/users/UserLogin.react');
var Profile = require('./components/users/Profile.react');
var UserList = require('./components/users/Index.react');

//Front End Plan
var IndexPlan = require('./components/plans/IndexPlan.react');
var ShowPlan = require('./components/plans/ShowPlan.react');
var CreatePlan = require('./components/plans/CreatePlan.react');

var Router = require('react-router');
var Route = Router.Route;

var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={UserLogin}/>
    <Route name="login" handler={UserLogin}/>
    <Route name="register" handler={UserRegister}/>
    <Route name="user" handler={Profile}/>
    <Route name="index" handler={UserList}/>
    <Route name="plans" handler={IndexPlan}/>
    <Route name="plans/show" handler={ShowPlan}/>
    <Route name="plans/create" handler={CreatePlan}/>
  </Route>
);
// Or, if you'd like to use the HTML5 history API for cleaner URLs:

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});