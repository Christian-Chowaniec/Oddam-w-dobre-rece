import React from "react";
import data from "./Data";
import ChooseButton from "./ChooseButton";

import ListWithPagination from "./PaginationList";

class HomeWhoWeHelp extends React.Component {
	state = {
		currentChoose: data.fundations,
	};

	handleClick = choice => this.setState({ currentChoose: data[choice] });

	isActive = choice =>
		JSON.stringify(data[choice]) === JSON.stringify(this.currentChoose);
	render() {

		// let btn_active = document.querySelectorAll(".WhoWeHelp__buttons .WhoWeHelp__button");
		// btn_active.forEach( (item)=>{
		// 	let active_class = document.querySelector(".active");
		// 	active_class.className= active_class.className.replace("active","");
		// 	item.className+="active";
		// })
		return (
			<section id="who_we_help">
				<div className="WhoWeHelp__box">
					<h2 className="WhoWeHelp__title">Komu pomagamy</h2>
					<div className="decoration" />

					<div className="WhoWeHelp__buttons">
						<ChooseButton
							text={"Fundacjom"}
							className="WhoWeHelp__button"
							choice={"fundations"}
							isActive={this.isActive("fundations")}
							onClick={e => this.handleClick(e)}
						/>

						<ChooseButton
							text={"Organizacjom pozarządowym"}
							className="WhoWeHelp__button"
							choice={"organizations"}
							isActive={this.isActive("organizations")}
							onClick={e => this.handleClick(e)}
						/>

						<ChooseButton
							text={"Lokalnym zbiórkom"}
							className="WhoWeHelp__button"
							choice={"local"}
							isActive={this.isActive("local")}
							onClick={e => this.handleClick(e)}
						/>
					</div>

					<div className="WhoWeHelp__description_box">
						<p className="WhoWeHelp__description">
							{this.state.currentChoose.description}
						</p>
					</div>

					<div className="WhoWeHelp__pagination">
						<ListWithPagination list={this.state.currentChoose.items} />
					</div>
				</div>
			</section>
		);
	}
}

export default HomeWhoWeHelp;
