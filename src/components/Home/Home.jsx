import React from "react";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";
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
    </main>
  );
}

export default Home;
