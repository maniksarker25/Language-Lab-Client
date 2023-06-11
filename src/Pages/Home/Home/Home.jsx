import { Helmet } from "react-helmet-async";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import TopInstructors from "../TopInstructors/TopInstructors";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LanguageLab-Home</title>
      </Helmet>
     <Banner></Banner>
     <AboutSection/>
     <TopInstructors/>
    </div>
  );
};

export default Home;
