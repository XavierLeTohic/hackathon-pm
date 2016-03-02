var React = require('react');

class SearchBarLayout extends React.Component {

    render() {
    		let searchBarClasses = this.props.name ? "searchBar " + this.props.name : "searchBar ";
        let searchBarKw = this.props.kw ? this.props.kw : "";
        return (
          <form className={searchBarClasses} get="/search">
          	<input className="searchBar_input" type="text" name="kw" value={searchBarKw} placeholder="Rechercher un produit" />
          	<div className="searchBar_submit_ctn">
          		<input className="searchBar_submit" type="submit" value="Lancer la recherche"/>
          		<span className="icon" >Search</span>	
          	</div>	
          	
          </form>
        );
    }
};

module.exports = SearchBarLayout;