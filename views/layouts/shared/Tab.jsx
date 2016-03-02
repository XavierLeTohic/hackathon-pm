var React = require('react'),
		Media = require('./Media'),
		TextBlock = require('./TextBlock'),
		Img = require('./Img');

class Tab extends React.Component {

		getTemplate() {

			let nameClass = this.props.type ? this.props.type : ""
			if (this.props.type === 'advert') {
				return(
					<li >
						<Media>
						  <Img src="medias/icons/piece.png"/>
						  <TextBlock>
						    <p>12 € - Comme neuf</p>
						    <p className="infos">Livraison gratuite</p>
						  </TextBlock>
						</Media>
					</li>
				)
				
			}
			return(
				<li ><a href={this.props.url} className={nameClass} >{this.props.name}</a></li>
			)
		}

		render() {
				return (
						this.getTemplate()
					
				);
		}
};

module.exports = Tab;