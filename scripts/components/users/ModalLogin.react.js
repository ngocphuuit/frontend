var React = require('react');

// Flux cart view
var ModalLogin = React.createClass({

  // Render cart view
  render: function() {

    return (
        <div className="modal fade" id="forgot" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
						<h4 className="modal-title" id="myModalLabel"><i className="ion-android-settings"></i> Reset password</h4>
					</div>
					<div className="modal-body">
						<div className="col-sm-12">
							<input type="text" className="form-control" placeholder="Enter Email here" />
							<h6 className="note"><i className="ion-android-mail"></i> password will be sent to your email</h6>
						</div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-red" data-dismiss="modal">Close</button>
						<button type="button" className="btn btn-primary">Send</button>
					</div>
				</div>
			</div>
		</div>
    );
  }

});

module.exports = ModalLogin;