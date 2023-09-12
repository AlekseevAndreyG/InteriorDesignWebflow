import React from "react";
import Hero from "./componenets/Hero/Hero";
import Plan from "./componenets/Plan/Plan";
import PlanMobile from "./components/Plan/PlanMobile/PlanMobile";
import AboutUs from "./components/AboutUs/AboutUs";
import AboutUsMobile from "./componenets/AboutUs/AboutUsMobile/AboutUsMobile";
import Reviews from "./components/Reviews/Reviews";
import OurPartners from "./components/OurPartners/OurPartners";
import FollowOurProjects from "./components/FollowOurProjects/FollowOurProjects";
import FollowOurProjectMobile from "./components/FollowOurProjects/FollowOurProjectMobile/FollowOurProjectMobile";
import CounterTotal from "./components/CounterTotal/CounterTotal";
import Blog from "./components/Blog/Blog";
import OurPartnersMobile from "./components/OurPartners/OurPartnersMobile/OurPartnersMobile";
import WannaJoin from "./components/WannaJoin/WannaJoin";

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
      <Blog />
      <WannaJoin />
    </>
  );
};
export default MainPage;
