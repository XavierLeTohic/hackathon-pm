(function(React, ReactDOM, window) {


    var IndexPage = React.createClass({

        render: function () {
            return (
                <h2>This content is generated on client-side with React !</h2>
            );
        }
    });

    //ReactDOM.render(<IndexPage/>, document.getElementById('IndexPage'));

})(React, ReactDOM, window);
