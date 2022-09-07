import React, { useContext } from "react";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";
import HomeFooter from "../HomeFooter/HomeFooter";
import HomeHeader from "../HomeHeader/HomeHeader";
import HomeSectionThreeColumns from "../HomeSectionThreeColumns/HomeSectionThreeColumns";
import HomeSimplySteps from "../HomeSimplySteps/HomeSimplySteps";
import HomeWhoWeHelps from "../HomeWhoWeHelps/HomeWhoWeHelps";

function Home() {
  return (
    <main className="mainContainer">
      <HomeHeader />
      <HomeSectionThreeColumns />
      <HomeSimplySteps />
      <HomeAboutUs />
      <HomeWhoWeHelps />
      <HomeFooter />
    </main>
  );
}

export default Home;
