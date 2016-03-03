var React = require('react');

class SearchBarLayout extends React.Component {

    getKeywordValue() {

      if(typeof this.props.kw !== 'undefined') {
        return(
          this.props.kw
        )
      }
      else {
        return(
          ""
        )
      }
    }

    render() {

        let searchBarClasses = this.props.name ? "searchBar " + this.props.name : "searchBar ";

        return (
          <form className={searchBarClasses} action="/search" method="GET">
          	<input className="searchBar_input" type="text" name="kw" defaultValue={this.getKeywordValue()} placeholder="Rechercher un produit" />
          	<div className="searchBar_submit_ctn">
          		<input className="searchBar_submit" type="submit" value="Lancer la recherche"/>
          		<span className="icon" >Search</span>
          	</div>

          </form>
        );
    }
};

module.exports = SearchBarLayout;
