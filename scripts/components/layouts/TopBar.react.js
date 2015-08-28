var React = require('react');

// Flux cart view
var TopBar = React.createClass({

  // Render cart view
  render: function() {

    return (
        <div className="top-bar">
					<nav className="navbar navbar-default top-bar">
						<div className="menu-bar-mobile" id="open-left">
							<i className="ti-menu"></i>
						</div>

						<form className="navbar-left" role="search">
							<div className="search">
								<input type="text" className="form-control" placeholder="Search" />
							</div>
						</form>
						<ul className="nav navbar-nav navbar-right top-elements">
							<li className="piluku-dropdown dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><img className="flag_img" src="assets/images/flags/india-flag.jpg" alt="" /> English<span className="drop-icon"><i className="ion ion-chevron-down"></i></span>
								</a>
								<ul className="dropdown-menu dropdown-piluku-menu  animated fadeInUp wow language-drop neat_drop" data-wow-duration="1500ms" role="menu">
									<li>
										<a href="#"><img className="flag_img" src="assets/images/flags/gm.gif" alt="flags" /> German</a>
									</li>
									<li>
										<a href="#"><img className="flag_img" src="assets/images/flags/usa.png" alt="flags" /> Spanish</a>
									</li>
									<li>
										<a href="#"><img className="flag_img" src="assets/images/flags/gm.gif" alt="flags" /> german</a>
									</li>
									<li>
										<a href="#"><img className="flag_img" src="assets/images/flags/gm.gif" alt="flags" /> german</a>
									</li>
								</ul>
							</li>
							<li className="piluku-dropdown dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="ion-ios-bell-outline icon-notification"></i><span className="badge info-number message">22</span></a>
								<ul className="dropdown-menu dropdown-piluku-menu  animated fadeInUp wow notification-drop neat_drop dropdown-right" data-wow-duration="1500ms" role="menu">
									<li className='current'>
										<a className='current' href="profile.html">
											<div className="hexagon danger">
												<span><i className="ion-ios-alarm-outline"></i></span>
											</div>
											<span className="text_info"> Privacy settings have been changed</span>
											<span className="time_info">3:30am</span>
										</a>
									</li>
									<li className='current'>
										<a className='current' href="profile.html">
											<div className="hexagon success">
												<span><i className="ion-ios-body-outline"></i></span>
											</div>
											<span className="text_info"> Tim has added you as friend</span>
											<span className="time_info">4:30am</span>
										</a>
									</li>
									<li className='current'>
										<a className='current' href="profile.html">
											<div className="hexagon warning">
												<span><i className="ion-ios-cart-outline"></i></span>
											</div>
											<span className="text_info"> New item added</span>
											<span className="time_info">6:07am</span>
										</a>
									</li>
									<li className='current'>
										<a className='current' href="profile.html">
											<div className="hexagon info">
												<span><i className="ion-ios-calendar-outline"></i></span>
											</div>
											<span className="text_info"> reminder please complete the task</span>
											<span className="time_info">3:30pm</span>
										</a>
									</li>
									<li className='current'>
										<a className='current' href="profile.html">
											<div className="outline-hexagon">
												<span><i className="ion-ios-checkmark-outline"></i></span>
											</div>
											<span className="text_info"> Marked as complete</span>
											<span className="time_info">1:30pm</span>
										</a>
									</li>
									<li className='current'>
										<a href="profile.html" className="current last_info">See all notifications</a>
									</li>

								</ul>
							</li>
							<li className="piluku-dropdown dropdown">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="ion-ios-box-outline icon-notification"></i><span className="badge info-number bell">22</span></a>
								<ul className="dropdown-menu dropdown-piluku-menu  animated fadeInUp wow message_drop neat_drop dropdown-right" data-wow-duration="1500ms" role="menu">
									<li>
										<a href="mailbox.html">
											<div className="avatar_left"><img src="assets/images/avatar.jpg" alt="" /></div>
											<div className="info_right">
												<span className="text_head pull-left">Megan fox</span>
												<span className="time_info pull-right">3:30am <i className="online ion-record"></i></span>
												<div className="text_info"> Hi want to know about the company freelance for wizard</div>
											</div>							
										</a>
									</li>
									<li>
										<a href="mailbox.html">
											<div className="avatar_left"><img src="assets/images/avatar.jpg" alt="" /></div>
											<div className="info_right">
												<span className="text_head pull-left">Megan fox</span>
												<span className="time_info pull-right">3:30am <i className="online ion-record"></i></span>
												<div className="text_info"> Hi want to know about the company freelance for wizard</div>
											</div>							
										</a>
									</li>
									<li>
										<a href="mailbox.html">
											<div className="avatar_left"><img src="assets/images/avatar.jpg" alt="" /></div>
											<div className="info_right">
												<span className="text_head pull-left">Megan fox</span>
												<span className="time_info pull-right">3:30am <i className="online ion-record"></i></span>
												<div className="text_info"> Hi want to know about the company freelance for wizard</div>
											</div>	
										</a>
									</li>
									<li>
										<a href="mailbox.html">
											<div className="avatar_left"><img src="assets/images/avatar.jpg" alt="" /></div>
											<div className="info_right">
												<span className="text_head pull-left">Megan fox</span>
												<span className="time_info pull-right">3:30am <i className="online ion-record"></i></span>
												<div className="text_info"> Hi want to know about the company freelance for wizard</div>
											</div>	
										</a>
									</li>
								</ul>
							</li>
							<li className="piluku-dropdown dropdown">

								<a href="#" className="dropdown-toggle avatar_width" data-toggle="dropdown" role="button" aria-expanded="false">
									<span className="avatar-holder">
										<img src="assets/images/avatar.jpg" alt="" />
									</span>
									<span className="avatar_info">Bootstrap</span>
									<span className="drop-icon"></span>
								</a>
								<ul className="dropdown-menu dropdown-piluku-menu  animated fadeInUp wow avatar_drop neat_drop dropdown-right" data-wow-duration="1500ms" role="menu">
									<li className='current'>
										<a className='current' href="profile.html"> <i className="ion-android-settings"></i>Settings</a>
									</li>
									<li>
										<a href="mailbox.html"> <i className="ion-android-chat"></i>Messages</a>
									</li>
									<li>
										<a href="dropzone-file-upload.html"> <i className="ion-android-cloud-circle"></i>Upload</a>
									</li>
									<li className='current'>
										<a className='current' href="profile.html"> <i className="ion-android-create"></i>Edit profile</a>
									</li>
									<li>
										<a href="lock-screen.html" className="logout_button"><i className="ion-power"></i>Logout</a>
									</li>   
								</ul>
							</li>
							<li className="chat_btn">
								<a href="#" className="right-bar-toggle flatRed">
									<i className="ion-ios-people-outline"></i>                              
								</a>
							</li>
						</ul>

					</nav>

				</div>
    );
  }

});

module.exports = TopBar;