var React = require('react');

// Flux cart view
var LerfBar = React.createClass({

  // Render cart view
  render: function() {

    return (
        <div className="left-bar ">
					<div className="admin-logo">
						<div className="logo-holder pull-left">
							<img className="logo" src="assets/images/example.png" alt="logo" />	
						</div>		
						<a href="#" className="menu-bar  pull-right"><i className="ti-menu"></i></a>
					</div>
					<ul className="list-unstyled menu-parent" id="mainMenu">
						<li>
							<a href="index-2.html" className="waves-effect waves-light">
								<i className="icon ti-home"></i>
								<span className="text ">Dashboard</span>
							</a>
						</li>
						<li className="submenu">
							<a className="waves-effect waves-light" href="#layouts">
								<i className="icon ti-layout"></i>
								<span className="text">Unique Layouts</span>
								<i className="chevron ti-angle-right"></i>
							</a>
							<ul className="list-unstyled">
								<li><a href="collapsed-sidebar.html">Collapsed Sidebar</a></li>
								<li><a href="left-sidebar-version2.html">Menu with header</a></li>
								<li><a href="horizontal-menu.html">Horizontal Menu</a></li>					
								<li><a href="right-sidebar.html">Right Sidebar</a></li>
								<li><a href="boxed-layout.html">Boxed Layout</a></li>
								<li><a href="static-sidebar.html">Static Sidebar</a></li>
							</ul>
						</li>
						<li className="submenu">
							<a className="waves-effect waves-light" href="#piluku_premium">
								<i className="icon ti-gift"></i>
								<span className="text">Piluku Premium</span>
								<i className="chevron ti-angle-right"></i>
							</a>
							<ul className="list-unstyled" id="piluku_premium">
								<li><a href="widgets.html">Widgets</a></li>
								<li><a href="tasks.html">Tasks</a></li>
								<li><a href="mailbox.html">Mailbox</a></li>
								<li className='current'><a className='current' href="profile.html">Profile</a></li>
								<li><a href="invoice.html">Invoice</a></li>
								<li><a href="timeline.html">Timeline</a></li>
								<li><a href="pricing.html">Pricing</a></li>
								<li><a href="gallery.html">Gallery</a></li>
								<li><a href="calendar.html">Calendar</a></li>
								<li><a href="masonry-gallery.html">Masonry Gallery</a></li>
								<li><a href="rotated-gallery.html">Rotated Gallery</a></li>
							</ul>
						</li>
						<li>
							<a href="typography.html">
								<i className="icon ti-smallcap"></i>
								<span className="text">Typography</span>
							</a>
						</li>				
						<li className="submenu">
							<a className="waves-effect waves-light" href="#components">
								<i className="icon ti-briefcase"></i>
								<span className="text">Components</span>
								<i className="chevron ti-angle-right"></i>
							</a>
							<ul className="list-unstyled" id="components">
								<li className="submenu">
									<a className="waves-effect waves-light" href="#alerts">
										Alerts
										<span className="pull-right drop-arrow">
											<i className="drop-indicator ti-angle-right chevron"></i>
										</span>
									</a>
									<ul className="list-unstyled" id="alerts">
										<li><a href="basic-alerts.html">Basic Alerts</a></li>
										<li><a href="sweet-alerts.html">Sweet Alerts</a></li>
									</ul>
								</li>
								<li><a href="progress-bars.html">Progress Bars</a></li>
								<li><a href="dropdowns.html">Dropdowns</a></li>
								<li><a href="info-boxes.html">Info Boxes</a></li>
								<li><a href="notifications.html">Notifications</a></li>
								<li><a href="buttons.html">Buttons</a></li>
								<li><a href="tree-view.html">Tree View</a></li>
								<li><a href="css3-animations.html">CSS3 Animations</a></li>
								<li><a href="sliders.html">Sliders</a></li>
								<li><a href="nestable-lists.html">Nestable Lists</a></li>
								<li><a href="carousel.html">Carousel</a></li>
								<li><a href="portlets.html">Portlets</a></li>
								<li className="submenu">
									<a className="waves-effect waves-light" href="#icons">
										Icons
										<span className="pull-right drop-arrow">
											<i className="drop-indicator ti-angle-right chevron"></i>
										</span>
									</a>
									<ul className="list-unstyled" id="icons">
										<li><a href="ion-icons.html">Ion Icons</a></li>
										<li><a href="font-awesome.html">Font Awesome</a></li>
										<li><a href="themify.html">Themify Icons</a></li>
									</ul>
								</li>
								<li><a href="tooltips.html">Tooltips</a></li>
								<li><a href="labels-badges.html">Labels Badges</a></li>
								<li><a href="list-groups.html">List Groups</a></li>
								<li><a href="breadcrumbs-wells.html">Breadcrumbs</a></li>
								<li><a href="tabs-accordions.html">Tabs Accordions</a></li>
								<li><a href="file-manager.html">File Manager</a></li>
								<li><a href="modals.html">Modals</a></li>
								<li><a href="pagination.html">Pagination</a></li>

							</ul>
						</li>
						<li className="submenu">
							<a className="waves-effect waves-light" href="#forms_elements">
								<i className="icon ti-book"></i>
								<span className="text">Forms</span>
								<i className="chevron ti-angle-right"></i>
							</a>
							<ul className="list-unstyled">
								<li><a href="dropzone-file-upload.html">Dropzone File Upload</a></li>
								<li><a href="form-validation.html">Form Validation</a></li>
								<li><a href="form-wizard.html">Form Wizard</a></li>
								<li><a href="input-groups.html">Input Groups</a></li>
								<li><a href="form-elements.html">Form Elements</a></li>
								<li><a href="multiple-file-upload.html">Multiple File Upload</a></li>
								<li><a href="image-crop-zoom.html">Image Crop Zoom</a></li>
								<li><a href="wysiwig.html">WYZIWIG &amp; Markdown</a></li>
							</ul>
						</li>
						<li className="submenu">
							<a className="waves-effect waves-light" href="#tables">
								<i className="icon ti-layout-grid2"></i>
								<span className="text">Tables</span>
								<i className="chevron ti-angle-right"></i>
							</a>
							<ul className="list-unstyled" id="tables">
								<li><a href="basic-tables.html">Basic Tables</a></li>
								<li><a href="dynamic-tables.html">Dynamic Tables</a></li>
								<li><a href="editable-tables.html">Editable Tables</a></li>
								<li><a href="users-table.html">Users Table</a></li>
							</ul>
						</li>
						<li className="submenu">
							<a className="waves-effect waves-light" href="#piluku_utility">
								<i className="icon ti-heart"></i>
								<span className="text">Piluku Utility</span>
								<i className="chevron ti-angle-right"></i>
							</a>
							<ul className="list-unstyled" id="piluku_utility">
								<li className="submenu">
									<a className="waves-effect waves-light" href="#register">
										Register
										<span className="pull-right drop-arrow">
											<i className="drop-indicator ti-angle-right chevron"></i>
										</span>
									</a>
									<ul className="list-unstyled" id="register">
										<li><a href="signup.html">Modal One</a></li>
										<li><a href="signup2.html">Modal Two</a></li>
									</ul>
								</li>
								<li className="submenu">
									<a className="waves-effect waves-light" href="#login">
										Login
										<span className="pull-right drop-arrow">
											<i className="drop-indicator ti-angle-right chevron"></i>
										</span>
									</a>
									<ul className="list-unstyled" id="login">
										<li><a href="signin.html">Modal One</a></li>
										<li><a href="signin2.html">Modal Two</a></li>
									</ul>
								</li>
								<li><a href="forgot-password.html">Forgot Password</a></li>
								<li><a href="lock-screen.html">Lock Screen</a></li>
								<li><a href="lock-screen2.html">Lock Screen 2</a></li>
								<li><a href="faq.html">FAQ</a></li>
								<li><a href="404.html">404</a></li>
								<li><a href="505.html">505</a></li>
								<li><a href="template.html">Template</a></li>
							</ul>
						</li>
						<li className="submenu">
							<a className="waves-effect waves-light" href="#charts">
								<i className="icon ti-bar-chart-alt"></i>
								<span className="text">Charts</span>
								<i className="chevron ti-angle-right"></i>
							</a>
							<ul className="list-unstyled" id="charts">
								<li><a href="line-area-charts.html">Line &amp; Area Charts</a></li>
								<li><a href="bar-charts.html">Bar Charts</a></li>
								<li><a href="pie-charts.html">Pie Charts</a></li>
								<li><a href="nvd3-charts.html">NVD3 Charts</a></li>
							</ul>
						</li>
						<li className="submenu">
							<a className="waves-effect waves-light" href="#maps">
								<i className="icon ti-location-pin"></i>
								<span className="text">Maps</span>
								<i className="chevron ti-angle-right"></i>
							</a>
							<ul className="list-unstyled" id="maps">
								<li className="submenu">
									<a className="waves-effect waves-light" href="#google_maps">
										Google Maps
										<span className="pull-right drop-arrow">
											<i className="drop-indicator ti-angle-right chevron"></i>
										</span>
									</a>
									<ul className="list-unstyled" id="google_maps">
										<li><a href="google-maps.html">Basic Maps</a></li>
										<li><a href="markers-maps.html">Markers Maps</a></li>
										<li><a href="routes-maps.html">Routes Maps</a></li>
									</ul>
								</li>
								<li><a href="vector-maps.html">Vector Maps</a></li>
							</ul>
						</li>

						<li className="submenu">
							<a className="waves-effect waves-light" href="#menu_levels">
								<i className="icon ti-layout-list-thumb"></i>
								<span className="text">Menu Levels</span>
								<i className="chevron ti-angle-right"></i>
							</a>
							<ul className="list-unstyled" id="menu_levels">
								<li className="submenu">
									<a className="waves-effect waves-light" href="#menu_level_one">Menu Level 1.1
										<span className="pull-right drop-arrow">
											<i className="drop-indicator ti-angle-right chevron"></i>
										</span>
									</a>
									<ul className="list-unstyled" id="menu_level_one">
										<li><a href="#">Menu Level 2.1</a></li>
										<li><a href="#">Menu Level 2.2</a></li>
										<li><a href="#">Menu Level 2.3</a></li>
									</ul>
								</li>
								<li><a href="#">Menu Level 1.2</a></li>
								<li><a href="#">Menu Level 1.3</a></li>
							</ul>
						</li>
					</ul>
				</div>
    );
  }

});

module.exports = LerfBar;