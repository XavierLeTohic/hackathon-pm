var React = require('react');

class ImgBtnLayout extends React.Component {

    render() {
    		let imgBtnClass = "imgBtn " + this.props.icon;

        return (
          <a href="#" className={imgBtnClass}> <span className="icon">	<span className="hide">{this.props.name}</span></span> </a>
        );
    }
};

module.exports = ImgBtnLayout;