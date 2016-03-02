var React = require('react');

class Img extends React.Component {

  getTemplate () {

    if(this.props.type === 'link') {

      return (
        <a href={this.props.href}>
          <img src={this.props.src}/>
        </a>
      )
    }
    else {

      return (
        <img src={this.props.src}/>
      )
    }
  }

  render () {
    return (
      this.getTemplate()
    )
  }
}

module.exports = Img;