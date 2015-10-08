var React = require('react');
var UserStore = require('../../stores/UserStore');
var UserActions = require('../../actions/UserActions');

var ModalLogin = require('./ModalLogin.react');

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
var Profile = React.createClass({
  
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
              <div className="col-md-12 nopad-right">
                <div className="panel panel-piluku">
                  <div className="panel-body profile-body">
                    <div className="profile-heading">
                      <div className="profile-img">
                        <img src="assets/images/avatar/three.png" alt="three" />
                      </div>
                      <div className="profile-name">
                        nina dobrev
                      </div>
                      <div className="profile-age-country">
                        23 female, student <br />
                        <i className="ion ion-ios-location"></i> Fremont, San Francisco
                      </div>
                      <div className="profile-heading-footer">
                        <div className="col-md-5 col-md-offset-1  col-xs-12">
                          <ul className="list-inline list-unstyled profile-stats">
                          <li><a href="#"><span>216</span>followers</a></li>
                            <li><a href="#"><span>689</span>following</a></li>
                            <li><a href="#"><span>5000</span>posts</a></li>
                          </ul>
                        </div>
                        <div className="col-md-5">
                          <div className="profile-buttons">
                            <a href="#" className="btn btn-green btn-icon-green btn-icon-block btn-icon-blockleft btn-profile">
                              <i className="ion ion-ios-personadd"></i>
                              <span>Add Friend</span>
                            </a>
                            <a href="#" className="btn btn-primary btn-icon-primary btn-icon-block btn-icon-blockleft btn-profile">
                              <i className="ion ion-ios-email"></i>
                              <span>Write Message</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="profile-left">
                        <div className="col-md-7 col-md-offset-1">
                          <div className="form-group">
                            <textarea name="" className="form-control text-area" cols="30" rows="10" placeholder="Share Your Mood Here..."></textarea>
                          </div>
                          <ul className="list-unstyled list-inline profile-type">
                            <li><i className="ti-text"></i></li>
                            <li><i className="ion ion-image"></i></li>
                            <li><i className="ion ion-ios-film"></i></li>
                            <li><i className="ion ion-ios-location"></i></li>
                            <li className="pull-right"><a href="#" className="btn btn-primary">Share</a></li>
                          </ul>
                          <div className="piluku-post">
                            <div className="piluku-post-header">
                              <div className="piluku-post-img">
                                <img src="assets/images/avatar/eight.png" alt="eight" />
                              </div>
                              <div className="piluku-post-time pull-right">4 hrs ago</div>
                              <div className="piluku-post-share">
                                <a href="#">paul diesel</a> shared a post
                              </div>
                              <div className="piluku-post-via">
                                <span>via</span> Mobile,New York
                              </div>
                            </div>
                            <div className="piluku-post-body">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat ultricies ex, non pulvinar nunc convallis sit amet. Maecenas sodales elementum dolor. Quisque auctor auctor dui nec convallis. Donec dictum hendrerit odio eu eleifend. Mauris nec semper est, vel tempus turpis. Proin pellentesque rhoncus scelerisque. Ut ac convallis risus. Nulla non accumsan sem. Fusce sit amet nisi et velit dictum iaculis ut et nisl. <br /> Consectetur adipiscing elit. Nulla feugiat ultricies ex, non pulvinar nunc convallis sit amet. Maecenas sodales elementum dolor. Quisque auctor auctor dui nec convallis.
                            </div>
                            <ul className="list-unstyled list-inline piluku-post-footer">
                              <li><a href="#"><i className="ion ion-ios-star-outline"></i> 1.5k</a></li>
                              <li><a href="#"><i className="ion ion-reply"></i> reply </a></li>
                              <li><a href="#"><i className="ion ion-share"></i> share </a></li>
                            </ul>
                          </div>
                          <div className="piluku-post">
                            <div className="piluku-post-header">
                              <div className="piluku-post-img">
                                <img src="assets/images/avatar/eight.png" alt="eight" />
                              </div>
                              <div className="piluku-post-time pull-right">4 hrs ago</div>
                              <div className="piluku-post-share">
                                <a href="#">paul diesel</a> shared a post
                              </div>
                              <div className="piluku-post-via">
                                <span>via</span> Mobile,New York
                              </div>
                            </div>
                            <div className="piluku-post-body">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="piluku-post-body-img">
                                    <a href="#"><img src="assets/images/post1.jpg" alt="post1" /></a>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="piluku-post-body-img">
                                    <a href="#"><img src="assets/images/post2.jpg" alt="post2" /></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul className="list-unstyled list-inline piluku-post-footer">
                              <li><a href="#"><i className="ion ion-ios-star-outline"></i> 1.5k</a></li>
                              <li><a href="#"><i className="ion ion-reply"></i> reply </a></li>
                              <li><a href="#"><i className="ion ion-share"></i> share </a></li>
                            </ul>
                          </div>
                          <div className="piluku-post">
                            <div className="piluku-post-header">
                              <div className="piluku-post-img">
                                <img src="assets/images/avatar/eight.png" alt="eight" />
                              </div>
                              <div className="piluku-post-time pull-right">4 hrs ago</div>
                              <div className="piluku-post-share">
                                <a href="#">paul diesel</a> shared a post
                              </div>
                              <div className="piluku-post-via">
                                <span>via</span> Web,New York
                              </div>
                            </div>
                            <div className="piluku-post-body">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla feugiat ultricies ex, non pulvinar nunc convallis sit amet. Maecenas sodales elementum dolor. Quisque auctor auctor dui nec convallis. Donec dictum hendrerit odio eu eleifend. Mauris nec semper est, vel tempus turpis. Proin pellentesque rhoncus scelerisque. Ut ac convallis risus. Nulla non accumsan sem. Fusce sit amet nisi et velit dictum iaculis ut et nisl. <br /> Consectetur adipiscing elit. Nulla feugiat ultricies ex, non pulvinar nunc convallis sit amet. Maecenas sodales elementum dolor. Quisque auctor auctor dui nec convallis.
                            </div>
                            <ul className="list-unstyled list-inline piluku-post-footer">
                              <li><a href="#"><i className="ion ion-ios-star-outline"></i> 1.5k</a></li>
                              <li><a href="#"><i className="ion ion-reply"></i> reply </a></li>
                              <li><a href="#"><i className="ion ion-share"></i> share </a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="profile-right">
                        <div className="col-md-3">
                          <div className="profile-sidebar">
                            <div className="profile-sidebar-heading">
                              friends
                            </div>
                            <ul className="list-unstyled list-inline profile-friends-img">
                              <li><a href="#"><img src="assets/images/avatar/two.png" alt="two" /></a></li>
                              <li><a href="#"><img src="assets/images/avatar/eight.png" alt="eight" /></a></li>
                              <li><a href="#"><img src="assets/images/avatar/seven.png" alt="seven" /></a></li>
                              <li><a href="#"><img src="assets/images/avatar/ten.png" alt="ten" /></a></li>
                              <li><a href="#"><img src="assets/images/avatar/three.png" alt="three" /></a></li>
                              <li><a href="#" className="hi">see more</a></li>
                            </ul>
                          </div>
                          <div className="profile-sidebar">
                            <div className="profile-sidebar-heading">
                              Personal Info
                              <a href="#"><i className="ion ion-edit"></i></a>
                            </div>
                            <ul className="list-inline list-unstyled profile-personal-info">
                              <li>date of birth <span>23-May-1990</span></li>
                              <li>member since <span>May-2011</span></li>
                              <li>gender <span>female</span></li>
                              <li>occupation <span>student</span></li>
                              <li>mobile number <span>+91 9949834568</span></li>
                              <li>email address <span>nina@gmail.com</span></li>
                            </ul>
                          </div>
                          <div className="profile-sidebar">
                            <div className="profile-sidebar-heading">
                              Social  Links
                            </div>
                            <ul className="list-inline list-unstyled profile-social-links">
                              <li><a href="#"><i className="ion ion-social-facebook profile-fb"></i></a></li>
                              <li><a href="#"><i className="ion ion-social-twitter profile-twitter"></i></a></li>
                              <li><a href="#"><i className="ion ion-social-googleplus profile-google"></i></a></li>
                              <li><a href="#"><i className="ion ion-social-linkedin profile-linkedin"></i></a></li>
                              <li><a href="#"><i className="ion ion-social-github profile-github"></i></a></li>
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
        </div>  
        <RightBar/>
      </div>
    );
  },

  _onChange: function() {
    this.setState(getAllUsers());
  }

});

module.exports = Profile;