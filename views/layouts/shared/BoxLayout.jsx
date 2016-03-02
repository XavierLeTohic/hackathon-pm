var React = require('react');

class BoxLayout extends React.Component {

	getTemplate() {
		let ctnClass = this.props.nameClass ? "box "+ this.props.nameClass : "box";
		if(this.props.element ==='header') {
			return (
				<header className={ctnClass}>
				    {this.props.children}
				</header>
			)
		}
		
		return (
			<div className={ctnClass}>
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