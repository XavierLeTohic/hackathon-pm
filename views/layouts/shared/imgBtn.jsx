var React = require('react');

var ImgBtnLayout = React.createClass({

    render: function() {
    		var imgBtnClass = "imgBtn " + this.props.icon;

        return (
          <a href="#" className={imgBtnClass}> <span className="icon">	<span className="hide">{this.props.name}</span></span> </a>
        );
    }
});

module.exports = ImgBtnLayout;