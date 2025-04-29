import NavBar from "./components/NavBar";
import CareerPath from "./sections/CareerPath";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <FeatureCards />
      <CareerPath />
    </>
  );
};
export default App;
