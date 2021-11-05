import React from "react";
import HomeThreeColumns from "./HomeComponents/ThreeColumns";
import HomeSimpleSteps from "./HomeComponents/SimpleSteps";
import HomeAboutUs from "./HomeComponents/AboutUs";
import HomeWhoWeHelp from "./HomeComponents/WhoWeHelp/WhoWeHelp";
import HomeContact from "./HomeComponents/Contact";
import HomeHeader from "./HomeComponents/Header";

const Home = () => {
	return (
		<div>
			<div>
				<HomeHeader />
				<HomeThreeColumns />
				<HomeSimpleSteps />
				<HomeAboutUs />
				<HomeWhoWeHelp />
				<HomeContact />
			</div>
		</div>
	);
};

export default Home;
