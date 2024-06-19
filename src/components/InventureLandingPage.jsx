import { Link } from "react-router-dom";
import InventureLogo from "../assets/inventurelogo.png";
import { NavbarData } from "../data/data";
import CustomCarousel from "./CustomCarousel";
import { SliderData } from "../data/data";
import DematAccountForm from "./DematAccountForm";
import Inverstment from "./Inverstment";
import DematAccount from "./DematAccount";
import Testimonial from "./Testimonial";


const InventureLandingPage = () => {
  return (
    <div className="w-full h-auto">
      {/* Navbar */}
      <nav className="w-full fixed z-20 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90">
        <div className="w-[94%] h-20 mx-auto flex items-center ">
          <div className="w-[15%] mr-[2%]">
            <img src={InventureLogo} alt="Inventure Logo" />
          </div>
          <div className="flex w-[75%] justify-between px-[1%] ">
            {NavbarData.map((navdata) => (
              <Link key={navdata.id} to={navdata.link}>
                <div>
                  <h1>{navdata.Navtitle}</h1>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Slider */}
      <div>
         <CustomCarousel>
             { SliderData.map((image, index) => {
          return <img key={index} src={image.image} alt={image.alt} />;
        })}
         </CustomCarousel>
      </div>


        {/* DematAccountDiv */}
      <div className="mt-16 ">
        <DematAccountForm/>
      </div>

      {/* Investment */}
      <div className="mt-16">
        <Inverstment />
      </div>

        {/* Demat Account  */}
      <div className="mt-16">
          <DematAccount/>
      </div>

      {/* Testimonial section */}
      <div>
        <Testimonial/>
      </div>

      
    </div>
  );
};

export default InventureLandingPage;
