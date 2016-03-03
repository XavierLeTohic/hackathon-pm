var React = require('react'),
		SelectLayout = require('../shared/SelectLayout'),
		ImgBtnLayout = require('../shared/ImgBtnLayout'),
		FlexContainerLayout = require('../shared/FlexContainerLayout');

class HeaderSearchLayout extends React.Component {

  render () {

  	// var reloadProducts = function(val) {
  	  
  	// }

  	var statesArray = [{
  	  label: 'Neuf et Occasion'
  	},
  	{
  		label: 'Neuf'
  	},
  	{
  		label: 'Occasion'
  	}];

  	var filtersArray = [{
  	  label: 'Prix + Port'
  	},
  	{
  		label: 'Note du vendeur'
  	},
  	{
  		label: 'Etat du produit'
  	}];

    return (
    	<FlexContainerLayout nameClass="header-search">
    		<ul className ="pickerList">
    			<li><SelectLayout name="statePicker" defaultValue="Neuf et Occasions" options={statesArray}/></li>
    			<li><SelectLayout name="filterPicker" defaultValue="Neuf et Occasions" options={filtersArray}/></li>
    		</ul>
    		<ImgBtnLayout name="Panier" icon="cart imgBtn-header"></ImgBtnLayout>
    		<ImgBtnLayout name="Connexion" icon="login imgBtn-header"></ImgBtnLayout>

    	</FlexContainerLayout>
    );
  }
}

module.exports = HeaderSearchLayout;

/* onChange={reloadProducts}*/