var React = require('react');

class SearchBarLayout extends React.Component {

    render() {
    		let searchBarClasses = this.props.name ? "searchBar " + this.props.name : "searchBar ";
        return (
          <form className={searchBarClasses}>
          	<input className="searchBar_input" type="text" name="keyword" placeholder="Rechercher un produit" />
          	<div className="searchBar_submit_ctn">
          		<input className="searchBar_submit" type="submit" name="submitbtn" value="Lancer la recherche"/>
          		<span className="icon" >Search</span>	
          	</div>	
          	
          </form>
        );
    }
};

module.exports = SearchBarLayout;