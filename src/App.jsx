import NavBar from "./components/NavBar";
import CareerPath from "./sections/CareerPath";
import Contact from "./sections/Contact";
import FeatureCards from "./sections/FeatureCards";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import TechStack from "./sections/TechStack";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <FeatureCards />
      <CareerPath />
      <TechStack />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
