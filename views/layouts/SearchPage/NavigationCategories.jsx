var React = require('react');

class NavigationCategories extends React.Component {

  getTargetUrl(key, value) {

    let targetPageUrl = this.props.targetPageUrl;

    if(targetPageUrl.indexOf(key + '=') > -1) {
      var reg=new RegExp(key + '=[^&]*', "g");
      return targetPageUrl.replace(reg, key + '=' + value);
    }
    return targetPageUrl + (targetPageUrl.split('/search')[1] === '' ? "?" : "&") + key + '=' + value ;
  }

  getCategories() {

    let cats = this.props.cats;

    if(Object.keys(cats).length === 0) {
      return (
        <span></span>
      );
    }

    return (
        <ul>
          <li><b>CATEGORIES</b></li>
          {cats.map(function(cat) {
            let url = this.getTargetUrl('category', cat.name);
            return (
              <li key={cat.name}>
                <a href={url}>{cat.label} <span class='navCounter'>({cat.productsCount})</span></a>
              </li>
            );
          }.bind(this))}
        </ul>
    )
  }

  render() {

    return (
      this.getCategories()
    )
  }
}


module.exports = NavigationCategories;
