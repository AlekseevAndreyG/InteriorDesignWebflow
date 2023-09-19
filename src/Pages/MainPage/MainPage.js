import React from "react";
import Hero from "./components/Hero/Hero";
import Plan from "./components/Plan/Plan";
import PlanMobile from "./components/Plan/PlanMobile/PlanMobile";
import AboutUs from "./components/AboutUs/AboutUs";
import AboutUsMobile from "./components/AboutUs/AboutUsMobile/AboutUsMobile";
import Reviews from "./components/Reviews/Reviews";
import OurPartners from "../../components/OurPartners/OurPartners";
import OurPartnersMobile from "../../components/OurPartners/OurPartnersMobile/OurPartnersMobile";
import FollowOurProjects from "./components/FollowOurProjects/FollowOurProjects";
import FollowOurProjectMobile from "./components/FollowOurProjects/FollowOurProjectMobile/FollowOurProjectMobile";
import CounterTotal from "../../components/CounterTotal/CounterTotal";
import ArcticleAndNews from "./components/ArcticleAndNews/ArcticleAndNews";
import WannaJoin from "../../components/WannaJoin/WannaJoin";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Plan />
      <PlanMobile />
      <AboutUs />
      <AboutUsMobile />
      <Reviews />
      <OurPartners />
      <OurPartnersMobile />
      <FollowOurProjects />
      <FollowOurProjectMobile />
      <CounterTotal />
      <ArcticleAndNews />
      <WannaJoin />
    </>
  );
};
export default MainPage;
