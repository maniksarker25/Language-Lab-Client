// import img1 from "../../../assets/peopleLike/peopleLike1.jpg";
// import img2 from '../../assets/peopleLike/peopleLike2.jpg';
// import logo1 from "../../assets/peopleLike/bestQuality.png";
// import logo2 from "../../assets/peopleLike/service.png";
// import logo3 from "../../assets/peopleLike/engage.png";
const PeopleLike = () => {
  return (
    <div>
      <div className="bg-[#3DCB93]  h-[400px] lg:h-[500px]   mt-32 ">
        <div className="py-12">
          <p className="text-center  font-semibold text-white">
            The mater of that
          </p>
          <h3 className="text-center text-3xl font-semibold text-white my-2">
            Why People Like Our Services
          </h3>
        </div>
      </div>
      <img
        className="lg:h-[400px] h-64 rounded-lg top-10 w-4/5 mx-auto  -mt-40 lg:-mt-72"
        src={
          "https://i.ibb.co/qx4phF2/Implementing-active-learning-and-student-centered-pedagogy.jpg"
        }
        alt=""
      />
      {/* <img className="lg:h-[500px] mx-auto lg:-mt-[450px] h-72 rounded-lg w-4/6 " src={img2} alt="" /> */}
      <div className=" mt-16 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:flex items-center p-8 lg:p-0 space-y-4">
          <img
            className="w-28 h-28 mr-3"
            src="https://i.ibb.co/dJPXn30/best-Quality.png"
            alt=""
          />
          <div>
            <h4 className="text-xl font-semibold mb-2">
              High-Quality Products
            </h4>
            <p>
              Ensure that your car toy website offers a wide range of
              high-quality products. Provide accurate product descriptions.
            </p>
          </div>
        </div>
        <div className="lg:flex items-center p-8 lg:p-0 space-y-4">
          <img
            className="w-32 h-32 mr-3"
            src="https://i.ibb.co/8jpWDth/service.png"
            alt=""
          />
          <div>
            <h4 className="text-xl  font-semibold mb-2">
              Excellent Customer Service
            </h4>
            <p>
              {" "}
              Focus on providing exceptional customer service to create a
              positive experience for your website visitors..
            </p>
          </div>
        </div>
        <div className="lg:flex items-center p-8 lg:p-0 space-y-4">
          <img
            className="w-36 h-32"
            src="https://i.ibb.co/PjwtXKr/engage.png"
            alt=""
          />
          <div>
            <h4 className="text-xl font-semibold mb-2">
              Engage with Your Customers
            </h4>
            <p>
              Actively engage with your customers through various channels.
              Utilize social media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleLike;
