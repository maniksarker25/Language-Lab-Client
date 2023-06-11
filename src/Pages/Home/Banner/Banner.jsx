import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "./../../../assets/banner/banner1.png";
import banner2 from "../../../assets/banner/banner2.png";
import banner3 from '../../../assets/banner/banner3.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Banner = () => {
  return (
    <div className="relative">
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="h-[350px] lg:h-[600px] w-full" src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px] lg:h-[600px] w-full" src={banner2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-[350px] lg:h-[600px] w-full" src={banner3} alt="" />
        </SwiperSlide>
      </Swiper>
      {/* <div className="absolute p-4 lg:p-0 xl:left-[330px] xl:right-[330px]  lg:left-[0px] lg:right-[0px] bottom-0  text-white z-10 ">
        <div className="">
          <h4 className=" text-xl lg:text-2xl uppercase">
            Welcome to Language Lab
          </h4>
          <h3 className="text-4xl lg:text-6xl my-4 leading-7 font-semibold">
            Master a New Language <br /> with Language Lab
          </h3>
          <p className="text-xl my-4 hidden lg:block">
            Donec vitae libero non enim placerat eleifend aliquam erat volutpat.
            Curabitur diam ex, <br /> dapibus purus sapien, cursus sed nisl
            tristique, commodo gravida lectus non.
          </p>
          <div className=" space-x-3 mb-4 lg:mb-32">
            <button className="primary-btn px-4 lg:px-8 py-2 lg:py-3 my-4">
              Discover More
            </button>
            <button className="px-4 lg:px-8 py-2 lg:py-3 border-2 hover:bg-[#125875]">
              Contact Us{" "}
            </button>
          </div>
          <div className="hidden lg:flex gap-6">
            <div className="bg-[#125875] hover:bg-[#FF7350] flex gap-4 p-8">
              <img className="w-24 h-24" src={bannerIcon1} alt="" />
              <div>
                <h4 className="text-2xl mb-4">Educational Services</h4>
                <p>
                  Seamlessly visualize quality ellectual capital without
                  superior collaboration and idea sharing listically
                </p>
                <p>Read More</p>
              </div>
            </div>
            <div className="bg-[#FF7350] flex gap-4 p-8">
              <img className="w-24 h-24" src={bannerIcon2} alt="" />
              <div>
                <h4 className="text-2xl mb-4">Foreign Languages</h4>
                <p>
                  We offer a wide range of comprehensive foreign language
                  services tailored to meet your unique learning goals.
                </p>
              </div>
            </div>
            <div className="bg-[#125875] hover:bg-[#FF7350] flex gap-4 p-8">
              <img className="w-24 h-24" src={bannerIcon3} alt="" />
              <div>
                <h4 className="text-2xl mb-4">Educational Services</h4>
                <p>
                  Seamlessly visualize quality ellectual capital without
                  superior collaboration and idea sharing listically
                </p>
                <p>Read More</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="absolute bottom-0 left-6 lg:left-32 p-8  text-white z-10 ">
        <div className="max-w-screen-xl mx-auto">
          <h4 className=" text-xl lg:text-2xl uppercase">
            Welcome to Language Lab
          </h4>
          <h3 className="text-3xl lg:text-6xl my-4 leading-7 font-semibold">
            Master a New Language <br /> with Language Lab
          </h3>
          <p className="text-xl my-4 hidden lg:block">
            Donec vitae libero non enim placerat eleifend aliquam erat volutpat.
            Curabitur diam ex, <br /> dapibus purus sapien, cursus sed nisl
            tristique, commodo gravida lectus non.
          </p>
          <div className=" space-x-3 mb-4 lg:mb-12">
            <button className="primary-btn px-4 lg:px-8 py-2 lg:py-3 my-4">
              Discover More
            </button>
            <button className="px-4 lg:px-8 py-2 lg:py-3 border-2 hover:bg-[#125875]">
              Contact Us{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
