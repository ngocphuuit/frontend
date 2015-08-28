var React = require('react');

// Flux cart view
var RightBar = React.createClass({

  // Render cart view
  render: function() {

    return (
        <div className="side-bar right-bar ">
					<div className="contacts">
						<div className="col col-md-12">
							<ul className="tabs">
								<li className="tab col-md-3"><a href="#test1" className="active">Chat</a></li>
								<li className="tab col-md-3"><a href="#test2">Settings</a></li>
								<li className="tab col-md-3"><a href="#test3">Messages</a></li>
							</ul>
						</div>
						<div className="content-holder">
							<div id="test1" className="col-md-12 no_padding">					
								<div className="panel-body no_padding">
									<div className="panel-group piluku-accordion piluku-accordion-two" id="accordionOne" role="tablist" aria-multiselectable="true">
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingModalOne">
												<h4 className="panel-title">
													<a className="collapsed" data-toggle="collapse" data-parent="#accordionOne" href="#collapseModalOne" aria-expanded="true" aria-controls="collapseOne">
														Online <i className="chevron ti-angle-down"></i>
													</a>
												</h4>
											</div>
											<div id="collapseModalOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
												<div className="panel-body no_padding">
													<ul className="list-group contacts-list">
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/one.png" alt="" />
																</div>
																<span className="name">Richards carlson</span>
																<i className="ion ion-record online"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/two.png" alt="" />
																</div>
																<span className="name">Firing Arc</span>
																<i className="ion ion-record online"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/three.png" alt="" />
																</div>
																<span className="name">strapzen</span>
																<i className="ion ion-record online"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/four.png" alt="" />
																</div>
																<span className="name">Reeves</span>
																<i className="ion ion-record online"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/five.png" alt="" />
																</div>
																<span className="name">Bootstrap Guru</span>
																<i className="ion ion-record online"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/six.png" alt="" />
																</div>
																<span className="name">Carlson</span>
																<i className="ion ion-record online"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/seven.png" alt="" />
																</div>
																<span className="name">Paris hilton</span>
																<i className="ion ion-record online"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/eight.png" alt="" />
																</div>
																<span className="name">Henry Richards</span>
																<i className="ion ion-record online"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/nine.png" alt="" />
																</div>
																<span className="name">Richie Rich</span>
																<i className="ion ion-record online"></i>
															</a>
														</li>

													</ul>	
												</div>
											</div>
										</div>
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingModalTwo">
												<h4 className="panel-title">
													<a data-toggle="collapse" data-parent="#accordionOne" href="#collapseModalTwo" aria-expanded="false" aria-controls="collapseTwo">
														offline
													</a>
												</h4>
											</div>
											<div id="collapseModalTwo" className="panel-collapse collapse " role="tabpanel" aria-labelledby="headingTwo">
												
												<div className="panel-body no_padding">
													<ul className="list-group contacts-list">
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/one.png" alt="" />
																</div>
																<span className="name">Richards carlson</span>
																<i className="ion ion-record offline"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/two.png" alt="" />
																</div>
																<span className="name">Firing Arc</span>
																<i className="ion ion-record offline"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/three.png" alt="" />
																</div>
																<span className="name">strapzen</span>
																<i className="ion ion-record offline"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/four.png" alt="" />
																</div>
																<span className="name">Reeves</span>
																<i className="ion ion-record offline"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/five.png" alt="" />
																</div>
																<span className="name">Bootstrap Guru</span>
																<i className="ion ion-record offline"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/six.png" alt="" />
																</div>
																<span className="name">Carlson</span>
																<i className="ion ion-record offline"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/seven.png" alt="" />
																</div>
																<span className="name">Paris hilton</span>
																<i className="ion ion-record offline"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/eight.png" alt="" />
																</div>
																<span className="name">Henry Richards</span>
																<i className="ion ion-record offline"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/nine.png" alt="" />
																</div>
																<span className="name">Richie Rich</span>
																<i className="ion ion-record offline"></i>
															</a>
														</li>

													</ul>	
												</div>
												
											</div>
										</div>
										<div className="panel panel-default">
											<div className="panel-heading" role="tab" id="headingModalThree" >
												<h4 className="panel-title">
													<a className="collapsed" data-toggle="collapse" data-parent="#accordionOne" href="#collapseModalThree" aria-expanded="false" aria-controls="collapseThree">
														Away
													</a>
												</h4>
											</div>
											<div id="collapseModalThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">									
												<div className="panel-body no_padding">
													<ul className="list-group contacts-list">
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/one.png" alt="" />
																</div>
																<span className="name">Richards carlson</span>
																<i className="ion ion-record away"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/two.png" alt="" />
																</div>
																<span className="name">Firing Arc</span>
																<i className="ion ion-record away"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/three.png" alt="" />
																</div>
																<span className="name">strapzen</span>
																<i className="ion ion-record away"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/four.png" alt="" />
																</div>
																<span className="name">Reeves</span>
																<i className="ion ion-record away"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/five.png" alt="" />
																</div>
																<span className="name">Bootstrap Guru</span>
																<i className="ion ion-record away"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/six.png" alt="" />
																</div>
																<span className="name">Carlson</span>
																<i className="ion ion-record away"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/seven.png" alt="" />
																</div>
																<span className="name">Paris hilton</span>
																<i className="ion ion-record away"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/eight.png" alt="" />
																</div>
																<span className="name">Henry Richards</span>
																<i className="ion ion-record away"></i>
															</a>
														</li>
														<li className="list-group-item">
															<a href="#">
																<div className="avatar">
																	<img src="assets/images/avatar/nine.png" alt="" />
																</div>
																<span className="name">Richie Rich</span>
																<i className="ion ion-record away"></i>
															</a>
														</li>
													</ul>	
												</div>
											</div>
										</div>
									</div>	
								</div> 
							</div>
							<div id="test2" className="col-md-12 no_padding">
								<br />										
								<div className="form-group">
									<div className="toggle-switch">
										<label className="col-sm-8 control-label">Reminders</label>
										<div className="col-sm-4">
											<input type="checkbox" className="mark-complete" id="toggle-switch" name="" value="" checked="" />
											<div className="toggle">
												<label htmlFor="toggle-switch"><i></i>
												</label>
											</div>
										</div>
									</div>
									<div className="toggle-switch">
										<label className="col-sm-8 control-label">theme options</label>
										<div className="col-sm-4">
											<input type="checkbox" className="mark-complete" id="toggle-switch1" name="" value="" checked="" />
											<div className="toggle">
												<label htmlFor="toggle-switch1"><i></i>
												</label>
											</div>
										</div>
									</div>
									<div className="toggle-switch">
										<label className="col-sm-8 control-label">dark / light theme</label>
										<div className="col-sm-4">
											<input type="checkbox" className="mark-complete" id="toggle-switch2" name="" value="" checked="" />
											<div className="toggle">
												<label htmlFor="toggle-switch2"><i></i>
												</label>
											</div>
										</div>
									</div>
									<div className="toggle-switch">
										<label className="col-sm-8 control-label">Email Updates</label>
										<div className="col-sm-4">
											<input type="checkbox" className="mark-complete" id="toggle-switch3" name="" value="" checked="" />
											<div className="toggle">
												<label htmlFor="toggle-switch3"><i></i>
												</label>
											</div>
										</div>
									</div>
									<div className="toggle-switch">
										<label className="col-sm-8 control-label">Notifications</label>
										<div className="col-sm-4">
											<input type="checkbox" className="mark-complete" id="toggle-switch4" name="" value="" checked="" />
											<div className="toggle">
												<label htmlFor="toggle-switch4"><i></i>
												</label>
											</div>
										</div>
									</div>							

									<div className="form-group check-radio">
										<label className="col-sm-9 control-label">Loader animation</label>
										<div className="col-sm-3">
											<ul className="list-inline checkboxes-radio">
												<li className="ms-hover">
													<input type="checkbox" className="mark-complete" id="c1" />
													<label htmlFor="c1"><span></span></label>
												</li>                                                                               
											</ul>
										</div>
									</div>
									<div className="form-group check-radio">
										<label className="col-sm-9 control-label">delay load</label>
										<div className="col-sm-3">
											<ul className="list-inline checkboxes-radio">
												<li className="ms-hover">
													<input type="checkbox" className="mark-complete" id="c2" />
													<label htmlFor="c2"><span></span></label>
												</li>                                                                               
											</ul>
										</div>
									</div>
									<div className="form-group check-radio">
										<label className="col-sm-9 control-label">Graphs animations</label>
										<div className="col-sm-3">
											<ul className="list-inline checkboxes-radio">
												<li className="ms-hover">
													<input type="checkbox" className="mark-complete" id="c3" checked="" />
													<label htmlFor="c3"><span></span></label>
												</li>                                                                               
											</ul>
										</div>
									</div>
								</div>						
							</div>
							<div id="test3" className="col-md-12 no_padding">
								<div className="heading no_border_bottom">
									Todays
									<div className="left"><a href="#"><i className="ion-android-refresh"></i></a></div>
									<div className="right"><a href="#"><i className="ion-gear-a"></i></a></div>						
								</div>
								<div className="list-group message-list">
									<a href="#" className="list-group-item">
										<h4 className="list-group-item-heading">henry richards</h4>
										<p className="list-group-item-text">has pushed all the code to github and saved some fixes too..</p>
									</a>
									<a href="#" className="list-group-item">
										<h4 className="list-group-item-heading">mary </h4>
										<p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusamus officiis vero magnam amet, quas corru</p>
									</a>							
								</div>	
								<div className="heading no_border_bottom">
									june 15 1990
									<div className="left"><a href="#"><i className="ion-android-refresh"></i></a></div>
									<div className="right"><a href="#"><i className="ion-gear-a"></i></a></div>						
								</div>
								<div className="list-group message-list">
									<a href="#" className="list-group-item">
										<h4 className="list-group-item-heading">henry richards</h4>
										<p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusamus officiis vero magnam amet, quas corru</p>
									</a>
									<a href="#" className="list-group-item">
										<h4 className="list-group-item-heading">mary </h4>
										<p className="list-group-item-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto accusamus officiis vero magnam amet, quas corru</p>
									</a>							
								</div>	
							</div>
						</div>
					</div>
				</div>
    );
  }

});

module.exports = RightBar;