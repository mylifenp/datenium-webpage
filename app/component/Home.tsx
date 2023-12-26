import HeroSection from "./Hero";
import Services from "./Services";
import TechStack from "./TechStack";
import IndustryGrid from "./IndustryGrid";
import ContactForm from "./ContactUs";
// import TechnologiesCarousel from "./ServiceCarousel"
import Contacts from "../contacts/page"
const HomePage = () => {
  return (
    <div className="flex flex-col item-center justify-center">
      <HeroSection />
      {/* <TechnologiesCarousel /> */}
      <Services />
      <TechStack/>
      <IndustryGrid />
      {/* <ContactForm/> */}
      {/* <Contacts /> */}
    </div>
  );
};

export default HomePage;
