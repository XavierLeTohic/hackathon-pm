var React = require('react');

class FlexContainerLayout extends React.Component {

    render() {
        let ctnClass = this.props.nameClass ? "flexContainer "+ this.props.nameClass : "flexContainer";

        return (
            <div className={ctnClass}>
                {this.props.children}
            </div>
        );
    }
}

module.exports = FlexContainerLayout;