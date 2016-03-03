var React = require('react');

class ModalLayout extends React.Component {

  render() {

    return (
      <div className="modal-backdrop" {...this.props}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = ModalLayout;
