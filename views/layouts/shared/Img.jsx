var React = require('react');

class Img extends React.Component {

  getTemplate () {

    if(this.props.type === 'link') {

      return (
        <a href={this.props.href}>
          <img src={this.props.src} className={this.props.nameClass}/>
        </a>
      )
    }
    else {

      return (
        <img src={this.props.src} className={this.props.nameClass}/>
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