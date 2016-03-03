var React = require('react'),
    DefaultLayout = require('./layouts/DefaultLayout'),
    HeaderLayout = require('./layouts/header/HeaderLayout');

class SearchPage extends React.Component {

  render() {

    let products = this.props.products;

    return (
      <DefaultLayout title={this.props.title}>

        <HeaderLayout>
          <div>Hello {this.props.name} <br />This header is generated on server-side with React engine of Express</div>
        </HeaderLayout>



        <ul>
          {products.map(function(product) {
            let url = '/product/' + product.id;
            return <li key={product.id}><a href={url}>{product.headline}</a></li>;
          })}
        </ul>

      </DefaultLayout>
    )
  }
}

module.exports = SearchPage;