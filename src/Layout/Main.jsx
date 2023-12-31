import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-screen-xl mx-auto">
      <Outlet></Outlet>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
