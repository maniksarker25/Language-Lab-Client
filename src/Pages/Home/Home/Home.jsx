import { Helmet } from "react-helmet-async";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>LanguageLab-Home</title>
      </Helmet>
     <Banner></Banner>
     <AboutSection/>
    </div>
  );
};

export default Home;
