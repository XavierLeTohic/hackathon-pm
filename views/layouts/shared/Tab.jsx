var React = require('react'),
		Media = require('./Media'),
		TextBlock = require('./TextBlock'),
		Reviews = require('./Reviews'),
		ButtonLayout = require('./ButtonLayout'),
		Img = require('./Img');

class Tab extends React.Component {

		getTemplate() {

			let nameClass = this.props.type ? this.props.type : "";
			if (this.props.type === 'advert') {
				return(
					<li >
						<Media>
						  <Img src="../medias/icons/piece.png"/>
						  <TextBlock>
						    <p>12 € - Comme neuf</p>
						    <p className="infos">Livraison gratuite</p>
						  </TextBlock>
						</Media>
					</li>
				)

			}

			else if (this.props.type === 'btn') {
				return(
					<li ><ButtonLayout href={this.props.url} className={this.props.className}>{this.props.name}</ButtonLayout></li>
				)

			}

			else if (this.props.type === 'reviews') {
				return(
					<li ><Reviews id={this.props.id} url={this.props.url} nbReviews={this.props.params.nbr} reviewsAverageNote={this.props.params.reviewsAverageNote} dataModal={this.props.params.modalID}/></li>
				)

			}

			return(
				<li ><a id={this.props.id} href={this.props.url} className={nameClass}>{this.props.name}</a></li>
			)
		}

		render() {
				return (
						this.getTemplate()

				);
		}
};

module.exports = Tab;
