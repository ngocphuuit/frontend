var React = require('react');
var UserStore = require('../../stores/UserStore');
var UserActions = require('../../actions/UserActions');

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
var ShowPlan = React.createClass({
  
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

					<div className="main-content">
						<div className="row">

							<div className="col-md-8 col-sm-8 col-xs-12 nopad-right">
									<div className="panel-piluku panel no-pad">
										<div className="card">
											<div className="card-image waves-effect waves-block waves-light">
												<img className="activator" src="assets/images/post4.jpg" alt="" />
											</div>
											<div className="card-content">
												<span className="card-title activator">Latest News<i className="mdi-navigation-more-vert pull-right"></i></span>
												<p>You can read the full news by clicking on the image displayed at the top or the icon which is displayed on the right side corner beside the news title only the maximum text is displayed after clikcing the image. thanks for supporting us more widgets are comming soon we will update the theme asap Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto culpa ea nesciunt, debitis sunt quidem recusandae vel atque magnam doloribus, labore adipisci similique veritatis laudantium tenetur ipsam, cum aut maiores.</p>
											</div>
											<div className="card-reveal">
												<span className="card-title flatGreenc">
													Full Information <i className="mdi-navigation-close pull-right"></i>
												</span>
												<p>
													The Apple Watch became available to pre-order on Friday and fans in Asia and Europe flocked to the stores to get their hands on the latest product from the U.S. tech giant. In London, Apple opened a special pop-up shop within iconic department store Selfridges, right next to many of the luxury watchmaker kiosks – evidence the Cupertino, CA-based giant wants to be seen as a luxury timepiece player.
												</p>
											</div>
										</div>
									</div>

									<div className="col-md-12 col-sm-12 col-xs-12 nopad-right" style={{'padding-left': '0'}}>
										<div className="panel panel-piluku">
											<div className="panel-body timeline-block">
												<div className="form-heading">
													Timeline Modal 1
												</div>
												<div className="row">
													<div className="col-md-1 col-md-offset-3">
														<div className="timeline-year">
															mar-2015
														</div>
													</div>
												</div>
												<div className="time-bar"></div>
												<div className="row">
													<div className="col-md-2 col-md-offset-1">
														<div className="timeline-date">
															30-Mar-2015,
															<br />Mon 11:30
														</div>
													</div>
													<div className="col-md-1">
														<div className="timeline-icon flatBlue">
															<i className="ti-save-alt"></i>
														</div>
													</div>
													<div className="col-md-6">
														<div className="timeline-hover">
															<div className="timeline-heading flatBlue">
																<div className="timeline-arrow arrow-blue"></div>
																Dwayne Smith
															</div>
															<div className="timeline-content">
																Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna sollicitudin neque congue fermentum ut et ligula. Nam <a href="#" className="green-link">vestibulum</a>, leo sed finibus convallis, arcu nisi sollicitudin augue, nec aliquam odio mauris vitae ligula. Quisque vitae <a href="#" className="green-link">sodales</a> sem.
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-2 col-md-offset-1">
														<div className="timeline-date">
															29-Mar-2015,
															<br />Sun 13:30
														</div>
													</div>
													<div className="col-md-1">
														<div className="timeline-icon flatGreen">
															<i className="ti-wallet"></i>
														</div>
													</div>
													<div className="col-md-6">
														<div className="timeline-hover">
															<div className="timeline-heading flatGreen">
																<div className="timeline-arrow arrow-green"></div>
																Paul Walker
															</div>
															<div className="timeline-comment">
																Commented on your post: <span>“Awesome Job”</span>
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-2 col-md-offset-1">
														<div className="timeline-date">
															14-Mar-2015,
															<br />Sat 16:30
														</div>
													</div>
													<div className="col-md-1">
														<div className="timeline-icon flatRed">
															<i className="ti-game"></i>
														</div>
													</div>
													<div className="col-md-6">
														<div className="timeline-hover">
															<div className="timeline-heading flatRed">
																<div className="timeline-arrow arrow-red"></div>
																Vin Diesel
															</div>
															<div className="timeline-comment">
																Tag <a href="#" className="green-link">Paul Walker</a> for <a href="#">Fast and Furious 7</a> Collection.
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-2 col-md-offset-1">
														<div className="timeline-date">
															03-Mar-2015,
															<br />Tue 13:30
														</div>
													</div>
													<div className="col-md-1">
														<div className="timeline-icon flatOrange">
															<i className="ti-gift"></i>
														</div>
													</div>
													<div className="col-md-6">
														<div className="timeline-hover">
															<div className="timeline-heading flatOrange">
																<div className="timeline-arrow arrow-orange"></div>
																Paul Walker
															</div>
															<div className="timeline-comment">
																Commented on your post: <span>“Feeling Annoying”</span>
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-1 col-md-offset-3">
														<div className="timeline-year timeline-pad">
															feb-2015
														</div>
													</div>
												</div>
												<div className="time-bar"></div>
												<div className="row">
													<div className="col-md-2 col-md-offset-1">
														<div className="timeline-date">
															28-Feb-2015,
															<br />Sat 11:30
														</div>
													</div>
													<div className="col-md-1">
														<div className="timeline-icon flatBlue">
															<i className="ti-alarm-clock"></i>
														</div>
													</div>
													<div className="col-md-6">
														<div className="timeline-hover">
															<div className="timeline-heading flatBlue">
																<div className="timeline-arrow arrow-blue"></div>
																Dwayne Smith
															</div>
															<div className="timeline-content">
																Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget magna sollicitudin neque congue fermentum ut et ligula. Nam <a href="#" className="green-link">vestibulum</a>, leo sed finibus convallis, arcu nisi sollicitudin augue, nec aliquam odio mauris vitae ligula. Quisque vitae <a href="#">sodales</a> sem.
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-2 col-md-offset-1">
														<div className="timeline-date">
															18-Feb-2015,
															<br />Wed 18:30
														</div>
													</div>
													<div className="col-md-1">
														<div className="timeline-icon flatGreen">
															<i className="ti-basketball"></i>
														</div>
													</div>
													<div className="col-md-6">
														<div className="timeline-hover">
															<div className="timeline-heading flatGreen">
																<div className="timeline-arrow arrow-green"></div>
																Paul Walker
															</div>
															<div className="timeline-comment">
																Commented on your post: <span>I am Feeling Great</span>
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-2 col-md-offset-1">
														<div className="timeline-date">
															14-Feb-2015,
															<br />Sat 20:00
														</div>
													</div>
													<div className="col-md-1">
														<div className="timeline-icon flatOrange">
															<i className="ti-package"></i>
														</div>
													</div>
													<div className="col-md-6">
														<div className="timeline-hover">
															<div className="timeline-heading flatOrange">
																<div className="timeline-arrow arrow-orange"></div>
																Vin Diesel
															</div>
															<div className="timeline-comment">
																Tag <a href="#" className="green-link">Paul Walker</a> for <a href="#">Fast and Furious 7</a> Collection.
															</div>
														</div>
													</div>
												</div>
												<div className="row">
													<div className="col-md-2 col-md-offset-1">
														<div className="timeline-date">
															02-Feb-2015,
															<br />Mon 13:30
														</div>
													</div>
													<div className="col-md-1">
														<div className="timeline-icon flatRed">
															<i className="ti-crown"></i>
														</div>
													</div>
													<div className="col-md-6">
														<div className="timeline-hover">
															<div className="timeline-heading flatRed">
																<div className="timeline-arrow arrow-red"></div>
																Paul Walker
															</div>
															<div className="timeline-comment">
																Commented on your post: <span>“Awesome Job”</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
							</div>

							<div className="col-md-4 col-sm-4 col-xs-12 nopad-right">
								<div className="piluku-panel no-pad todo_widget panel">
									<div className="todo_heading">
										<div className="left-icon">
											<div className="ms-hover">
												<input type="checkbox" className="mark-all" id="todo" />
												<label htmlFor="todo"><span></span></label>
											</div>
										</div>
										Todo
										<a href="#" className="right-icon">
											<i className="ion-ios-bell"></i>
										</a>
									</div>
									<ul className="list-group list-todo">
										<li className="list-group-item add-to-input">
											<input type="text" className="form-control" name="add_todo" id="add_todo" placeholder="Add new task here..." />
										</li>
									</ul>
								</div>
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

module.exports = ShowPlan;