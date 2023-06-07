import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaTwitter,FaViber } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="mt-24">
      <div className="bg-[#032E3F] text-white">
        <div className="max-w-screen-xl mx-auto lg:flex justify-between py-10 lg:py-20 ">
          <div>
            <h2 className="text-2xl">About Us</h2>
            <hr />
            <div className="mt-4">
              <h4 className="text-xl my-4">Language Lab</h4>
              <p>
                {" "}
                We are dedicated to helping individuals enhance <br /> their
                language skills and broaden their cultural horizons..
              </p>
            </div>
            <div className="flex gap-3 text-2xl my-4">
              <FaFacebook></FaFacebook>
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>
          <div>
            <h2 className="text-2xl">Our Links</h2>
            <hr />
            <div className="text-xl mt-4 lg:space-y-4 space-y-2">
              <p>
                {" "}
                <Link>Home</Link>
              </p>
              <p>
                <Link>Classes</Link>
              </p>
              <p className="mb-4">
                <Link>Instructors</Link>
              </p>
            </div>
          </div>
          <div className="my-6 lg:my-0">
            <h2 className="text-2xl ">Latest Post</h2>
            <hr />
          </div>
          <div>
            <h2 className="text-2xl">Contact Us</h2>
            <hr />
            <div className="text-xl my-6 space-y-2">
                <div className="flex items-center gap-2">
                    <FaViber/>
                    <p>+88 017548765614</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaMapMarkerAlt/>
                    <p>Dhaka , Bangladesh</p>
                </div>
                <div className="flex items-center gap-2">
                    <FaViber/>
                    <p>+88 017548765614</p>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FF7350]">
       <div className="max-w-screen-xl mx-auto flex justify-between text-white p-6">
       <h1 className="text-2xl font-bold">Language Lab</h1>
        <p className="text-xl font-semibold">Copyright © Qeducato 2023 . All rights reserved.</p>
       </div>
      </div>
    </div>
  );
};

export default Footer;
