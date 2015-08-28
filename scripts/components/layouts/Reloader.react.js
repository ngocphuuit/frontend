var React = require('react');

// Flux cart view
var Reloader = React.createClass({

  // Render cart view
  render: function() {

    return (
      <div className="piluku-preloader text-center">
        <div className="loader">Loading...</div>
      </div>
    );
  }

});

module.exports = Reloader;