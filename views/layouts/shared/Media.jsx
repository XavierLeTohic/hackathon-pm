var React = require('react');

class Media extends React.Component {

  render () {
  	let classCtn = this.props.nameClass ? "media " + this.props.nameClass : "media"
    return (
      <div className={classCtn}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Media;