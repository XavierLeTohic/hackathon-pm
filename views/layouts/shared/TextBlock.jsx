var React = require('react');

class TextBlock extends React.Component {

  render () {
    return (
      <div {...this.props}></div>
    )
  }
}

module.exports = TextBlock;