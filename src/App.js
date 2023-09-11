import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Plan from "./components/Plan/Plan";
import PlanMobile from "./components/Plan/PlanMobile/PlanMobile";
import AboutUs from "./components/AboutUs/AboutUs";
import AboutUsMobile from "./components/AboutUs/AboutUsMobile/AboutUsMobile";
import Reviews from "./components/Reviews/Reviews";
import OurPartners from "./components/OurPartners/OurPartners";
import FollowOurProjects from "./components/FollowOurProjects/FollowOurProjects";
import FollowOurProjectMobile from "./components/FollowOurProjects/FollowOurProjectMobile/FollowOurProjectMobile";
import CounterTotal from "./components/CounterTotal/CounterTotal";
import Blog from "./components/Blog/Blog";
import OurPartnersMobile from "./components/OurPartners/OurPartnersMobile/OurPartnersMobile";
import WannaJoin from "./components/WannaJoin/WannaJoin";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
