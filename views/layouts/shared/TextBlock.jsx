var React = require('react');

class TextBlock extends React.Component {

  render () {
    return (
      <div className="media-body" {...this.props}></div>
    )
  }
}

module.exports = TextBlock;