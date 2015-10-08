var React = require('react');
var UserStore = require('../../stores/UserStore');
var UserActions = require('../../actions/UserActions');

//Layout

var RightBar = require('../layouts/RightBar.react');
var LeftBar = require('../layouts/LeftBar.react');
var TopBar = require('../layouts/TopBar.react');
var OverLay = require('../layouts/OverLay.react');
var Reloader = require('../layouts/Reloader.react');
var PageHeader = require('../layouts/PageHeader.react');

function getAllUsers() {
  return {
    allUsers: UserStore.getUsers()
  };
}

// Flux cart view
var CreatePlan = React.createClass({
  
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
					<PageHeader/>

					<div className="main-content">
						<div className="panel">
							<div className="panel-body">
								<div className="form-heading">
									horizontal form
								</div>
								<form className="form form-horizontal">

									<div className="form-group">
										<label className="col-sm-2 control-label">Plan Title:</label>
										<div className="col-sm-8">
											<input type="text" className="form-control" placeholder="Name" />
										</div>
									</div>

									<div className="picker">
										<div className="form-group">
											<div className="col-sm-2 control-label">
												<label className="control-label align-rt">Date range</label>
											</div>
											<div className="col-sm-8" id="date-range">
												<div className="input-group input-daterange" id="datepicker">
													<input type="date" className="form-control" name="start" />
													<span className="input-group-addon bg">
														to
													</span>
													<input type="date" className="form-control" name="end" />
												</div>
											</div>
										</div>
									</div>

									<div className="form-group">
										<label className="col-sm-2 control-label">Description :</label>
										<div className="col-sm-8">
											<textarea name="" className="form-control text-area" cols="30" rows="10" placeholder="Plan description"></textarea>
										</div>
									</div>

									<div className="form-group has-success">
										<label className="col-sm-2 control-label">Success:</label>
										<div className="col-sm-8">
											<input type="text" className="form-control" placeholder="Success input" />
										</div>
									</div>

									<div className="form-group has-error">
										<label className="col-sm-2 control-label">error:</label>
										<div className="col-sm-8">
											<input type="text" className="form-control" placeholder="Error input" />
										</div>
									</div>

								</form>
							</div>
						</div>

					</div>

        </div>  
        <RightBar/>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getAllUsers());
  }

});

module.exports = CreatePlan;