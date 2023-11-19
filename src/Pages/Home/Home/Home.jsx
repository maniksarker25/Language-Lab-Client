import { Helmet } from "react-helmet-async";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import TopInstructors from "../TopInstructors/TopInstructors";
import PopularClasses from "../PopularClasses/PopularClasses";
import PeopleLike from "../PeopleLike/PeopleLike";
import OurPricing from "../OurPricing/OurPricing";
import PeopleSays from "../PeopleSays/PeopleSays";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LanguageLab-Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutSection />
      <PopularClasses />
      <TopInstructors />
      <PeopleLike />
      <OurPricing />
      <PeopleSays />
    </div>
  );
};

export default Home;
