import React from "react";
// import data from "../WhoWeHelp/data";

class HomeWhoWeHelp extends React.Component {

	render(){
		return (
			<section id="who_we_help">
				<div className="HomeWhoWeHelp__box">
					<h2 className="HomeWhoWeHelp__title">Komu pomagamy</h2>
					<div className="decoration" />
	
					<div className="HomeWhoWeHelp__buttons">
						<div className="HomeWhoWeHelp__button">Fundacjom</div>
						<div className="HomeWhoWeHelp__button">Organizacjom <br /> pozarządowym</div>
						<div className="HomeWhoWeHelp__button">Lokalnym <br /> zbiórkom</div>
					</div>
	
					<div className="HomeWhoWeHelp__description_box">
						<p className="HomeWhoWeHelp__description">
							W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
							współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
							czego potrzebują.
						</p>
					</div>
	
					<div className="HomeWhoWeHelp__pagination">[1] [2] [3]</div>
				</div>
			</section>
		);
	}
};

export default HomeWhoWeHelp;
