var React = require('react');

// Flux cart view
var PageHeader = React.createClass({

  // Render cart view
  render: function() {

    return (
      <div className="page_header">
				<div className="pull-left">
					<i className="icon ti-layout-grid2-thumb page_header_icon"></i>
					<span className="main-text">Form Elements</span>
					<p className="text">
						Piluku elements are designed in an awesome way which gives a unified and professional look to the forms. 
					</p>
				</div>
				<div className="right pull-right">
					<ul className="right_bar">
						<li className="list-unstyled"><i className="icon ion-checkmark text-primary"></i> &nbsp;Input Masks</li>
						<li className="list-unstyled"><i className="icon ion-checkmark text-primary"></i> &nbsp;Group selection</li>
						<li className="list-unstyled"><i className="icon ion-checkmark text-primary"></i> &nbsp;Various Switches</li>
						<li className="list-unstyled"><i className="icon ion-checkmark text-primary"></i> &nbsp;Pickers</li>
						<li className="list-unstyled"><i className="icon ion-checkmark text-primary"></i> &nbsp;and more...</li>
					</ul>
				</div>
			</div>
    );
  }

});

module.exports = PageHeader;