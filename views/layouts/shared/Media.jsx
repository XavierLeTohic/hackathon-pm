var React = require('react');

class Media extends React.Component {

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Media;