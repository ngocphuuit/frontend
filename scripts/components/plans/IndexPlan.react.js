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
var IndexPlan = React.createClass({
  
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
				<div className="col-md-6">
				<div className="panel panel-piluku">
					<div className="panel-heading">
						<h3 className="panel-title">
							New Plans
							<span className="panel-options">
								<a href="#" className="panel-refresh">
									<i className="icon ti-reload"></i> 
								</a>
								<a href="#" className="panel-minimize">
									<i className="icon ti-angle-up"></i> 
								</a>
								<a href="#" className="panel-close">
									<i className="icon ti-close"></i> 
								</a>
							</span>
						</h3>
					</div>
					<div className="panel-body no-padding timeline-widget">
						<ul className="list-inline list-unstyled wline">
							<li className="wtimeline">
								<div className="wtime-icon">
									<img src="assets/images/avatar/six.png" alt="" width="20px" height="20px" />
								</div>
								<div className="wtimeline-description">
									<div className="wshape"></div>
									<div className="wtimeline-heading">Apple I</div>
									<div className="wtimeline-time">July, 1976</div>
									<div className="wtimeline-content">Product Release</div>
								</div>

							</li>
							<li className="wtimeline">
								<div className="wtime-icon">
									<img src="assets/images/avatar/six.png" alt="" width="20px" height="20px" />
								</div>
								<div className="wtimeline-description">
									<div className="wshape"></div>
									<div className="wtimeline-heading">Mike Markkula introduced to Steve Jobs</div>
									<div className="wtimeline-time">August, 1976</div>
									<div className="wtimeline-content">Employment</div>
								</div>
							</li>
							<li className="wtimeline">
								<div className="wtime-icon">
									<i className="ion ion-radio-waves"></i>
								</div>
								<div className="wtimeline-description">
									<div className="wshape"></div>
									<div className="wtimeline-heading">Mike Markkula became Chairman</div>
									<div className="wtimeline-time">January, 1977</div>
									<div className="wtimeline-content">Employment</div>
								</div>
							</li>
							<li className="wtimeline">
								<div className="wtime-icon">
									<i className="ion ion-monitor"></i>
								</div>
								<div className="wtimeline-description">
									<div className="wshape"></div>
									<div className="wtimeline-heading">Michael Scott became President</div>
									<div className="wtimeline-time">February, 1977</div>
									<div className="wtimeline-content">Employment</div>
								</div>
							</li>
							<li className="wtimeline">
								<div className="wtime-icon">
									<i className="ion ion-nuclear"></i>
								</div>
								<div className="wtimeline-description">
									<div className="wshape"></div>
									<div className="wtimeline-heading">Apple II</div>
									<div className="wtimeline-time">April, 1977</div>
									<div className="wtimeline-content">Product Release</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

				<div className="col-md-6 nopad-right">
					<div className="panel panel-piluku">
						<div className="panel-heading">
							<h3 className="panel-title">
								Mail widget
								<span className="panel-options">
									<a href="#" className="panel-refresh">
										<i className="icon ti-reload"></i> 
									</a>
									<a href="#" className="panel-minimize">
										<i className="icon ti-angle-up"></i> 
									</a>
									<a href="#" className="panel-close">
										<i className="icon ti-close"></i> 
									</a>
								</span>
							</h3>
						</div>
						<div className="panel-body mail_widget">
							<ul className="tabs">
								<li className="tab col-md-3"><a href="#test12" className="active">Inbox</a>
								</li>
								<li className="tab col-md-3"><a href="#test13">Sent</a>
								</li>
								<li className="tab col-md-3"><a href="#test14">Important</a>
								</li>
								<li className="tab col-md-3"><a href="#test15">Personal</a>
								</li>
							</ul>
							<div className="content-holder">
								<div id="test12" className="col-md-12 no_padding">
									<div className="mail_list">
										<ul className="list-unstyled mails_holder">
											<li>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/two.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Henry richards</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatRedc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Research have been going on the project will report the results asap in a few days.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/one.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Hola fan</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/seven.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Nemo</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/eight.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Tupakula Vijay</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/nine.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">lucky</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/one.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">venky</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div id="test13" className="col-md-12 no_padding">
									<div className="mail_list">
										<ul className="list-unstyled mails_holder">
											<li>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/two.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Mila kunis</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatRedc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Research have been going on the project will report the results asap in a few days.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/one.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">rescort</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/three.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">deal buzz</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/four.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">carlson</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/five.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">richie rich</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/one.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Tupakula Vijay</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div id="test14" className="col-md-12 no_padding">
									<div className="mail_list">
										<ul className="list-unstyled mails_holder">
											<li>
												<a href="#">
													<div className="message_list_block starred">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/two.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Henry richards</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatRedc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Research have been going on the project will report the results asap in a few days.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block starred">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/ten.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Romeo roadie</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatRedc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>waiting for your approval, many pending verifications!!</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block starred">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/eight.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Jonny</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatRedc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Help me urgent.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block starred">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/six.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">pretty</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatRedc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>login have been going on the project will report the results asap in a few days.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block starred">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/two.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Henry richards</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatRedc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Research have been going on the project will report the results asap in a few days.</h4>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div id="test15" className="col-md-12 no_padding">
									<div className="mail_list">
										<ul className="list-unstyled mails_holder">
											<li>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/two.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Henry richards</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatRedc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Research have been going on the project will report the results asap in a few days.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/one.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Hola fan</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/seven.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Nemo</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/eight.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">Tupakula Vijay</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/nine.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">lucky</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
												<a href="#">
													<div className="message_list_block">
														<div className="left">
															<div className="avatar_holder">
																<img src="assets/images/avatar/one.png" alt="" />
															</div>
														</div>
														<div className="right">
															<span className="name">venky</span>
															<div className="pull-right right_details">
																<ul className="list-unstyled list-inline">
																	<li>12:30</li>
																	<li><i className="ion ion-record flatGreenc status"></i>
																	</li>
																	<li><i className="ion-android-attach"></i>
																	</li>
																</ul>
															</div>
															<h4>Searching for the best cafe around ?? come to meet at given location.</h4>
														</div>
													</div>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
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

module.exports = IndexPlan;