import HeroSection from "./Hero";
import Services from "./Services";
import TechStack from "./TechStack";
import IndustryGrid from "./IndustryGrid";
// import TechnologiesCarousel from "./ServiceCarousel"
import Contacts from "../contacts/page"
const HomePage = () => {
  return (
    <div >
      <HeroSection />
      {/* <TechnologiesCarousel /> */}
      <Services />
      <TechStack/>
      <IndustryGrid />
      <Contacts />
    </div>
  );
};

export default HomePage;
