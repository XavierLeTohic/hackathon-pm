var React = require('react');

var FlexContainerLayout = React.createClass({

    render: function() {
        var ctnClass = this.props.nameClass ? "flexContainer "+ this.props.nameClass : "flexContainer";

        return (
            <div className={ctnClass}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = FlexContainerLayout;