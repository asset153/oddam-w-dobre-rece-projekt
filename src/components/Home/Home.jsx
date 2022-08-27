import React from "react";
import HomeAboutUs from "../HomeAboutUs/HomeAboutUs";
import HomeHeader from "../HomeHeader/HomeHeader";
import HomeSectionThreeColumns from "../HomeSectionThreeColumns/HomeSectionThreeColumns";
import HomeSimplySteps from "../HomeSimplySteps/HomeSimplySteps";

function Home() {
  return (
    <main className="mainContainer">
      <HomeHeader />
      <HomeSectionThreeColumns />
      <HomeSimplySteps />
      <HomeAboutUs />
    </main>
  );
}

export default Home;
