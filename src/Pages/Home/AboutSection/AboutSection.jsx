import img1 from "../../../assets/about/aboutImg1.jpg";
import img2 from "../../../assets/about/aboutImg2.png";

const AboutSection = () => {
  return (
    <div className="my-36 ">
      <div className="lg:flex px-4 lg:px-0 space-y-4 lg:space-y-0 gap-8">
        <div className="lg:w-3/12">
          <img
            className="rounded-2xl border-4 h-full border-[#FF7350]"
            src={img1}
            alt=""
          />
        </div>
        <div className="lg:w-3/12 text-center text-white">
          <div className="bg-[#FF7350] py-8 border-b-4 mb-4 border-[#125875] rounded-2xl">
            <h2 className="text-6xl font-bold">25+</h2>
            <p className="text-2xl font-bold">Year Of Experience</p>
          </div>
          <img
            className="rounded-2xl border-4 border-[#125875]"
            src={img2}
            alt=""
          />
        </div>
        <div className="lg:w-6/12">
          <p className="font-bold text-xl text-[#FF7350]">
            About Our Language Lab
          </p>
          <h3 className="text-3xl lg:text-5xl font-semibold my-4 ">
            A Few Words About the Language Lab
          </h3>
          <p className="text-[#125875] text-xl font-semibold">
            The Language Lab is an innovative and comprehensive online platform
            designed to deliver exceptional foreign language courses. Our
            website is dedicated to providing a top-notch language learning
            experience for individuals seeking to enhance their linguistic
            skills.
          </p>
          <p className="my-4 text-md text-gray-600">
            We are proud to offer top ranige in employment services such and
            asser payroll and benefits administrato managemen and asistance with
            global business range ployment employer readings from religious
            texts or literature are also commonly inc compliance.
          </p>

          <div className="mt-6 flex">
            <div className="flex gap-4">
              <p className="text-3xl  bg-[#FF7350]  rounded-full  text-white">
                01
              </p>
              <div>
                <h6 className="text-2xl font-bold mb-4">Spoken English</h6>
                <p>Most of the people learn spoken english from here</p>
              </div>
            </div>
            <div className="flex gap-4">
              <p className="text-3xl bg-[#FF7350]  rounded-full  text-white">
                01
              </p>
              <div>
                <h6 className="text-2xl font-bold mb-4">Global Student</h6>
                <p>Consectetur adipiscing elit sed do eiusmod tem incid idunt.</p>
              </div>
            </div>
          </div>
          <button className="bg-[#125875] px-12 mt-8 rounded-md py-4 text-white font-bold hover:bg-[#FF7350]">See More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
