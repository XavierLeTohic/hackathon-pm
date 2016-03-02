var React = require('react');

class BoxLayout extends React.Component {

	getTemplate() {
		if(this.props.element ==='header') {
			return (
				<header className="box">
				    {this.props.children}
				</header>
			)
		}
		
		return (
			<div className="box">
			    {this.props.children}
			</div>
		)
		
	}

  render() {
    return (
      this.getTemplate()      
    )
  }
}

module.exports = BoxLayout;