import React from 'react';
import HomeThreeColumns from "./HomeComponents/HomeThreeColumns";
import HomeSimpleSteps from "./HomeComponents/HomeSimpleSteps";
import HomeAboutUs from "./HomeComponents/HomeAboutUs";
import HomeWhoWeHelp from "./HomeComponents/HomeWhoWeHelp";
import HomeContact from "./HomeComponents/HomeContact";
import HomeHeader from "./HomeComponents/HomeHeader";


const Home = () => {
    return (
        <div>
            <div>
                <HomeHeader/>
                <HomeThreeColumns/>
                <HomeSimpleSteps/>
                <HomeAboutUs/>
                <HomeWhoWeHelp/>
                <HomeContact/>

            </div>
        </div>
    );
};

export default Home;
