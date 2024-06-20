import { useState } from "react";
import { TestimonialData } from "../data/data"
import { PiCaretLeftBold , PiCaretRightBold } from "react-icons/pi";

const Testimonial = () => {


   const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TestimonialData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TestimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="mt-28 w-auto  h-[350px] relative overflow-x-hidden">
      <div className="w-full flex">
          <div className="w-[35%] h-full flex flex-col justify-center items-center">
             <div className="w-[25%] ">
            <h1 className="p-1.5  bg-[#F2EBFF]  text-purple font-bold text-base uppercase">
              Testimonial
            </h1>
          </div>

          <div className="mt-5 w-full">
            <div className="w-[50%] mx-auto">
            <h1 className="text-5xl  text-start font-medium">
              Voices of Satisfaction:
            </h1>
            </div>
          </div>

          <div className="w-[80%] flex justify-end mt-4">
             <p onClick={handlePrev}>
              <PiCaretLeftBold size={25} className="hover:text-purple"/>
            </p>
            <p onClick={handleNext}>
              <PiCaretRightBold size={25} className="hover:text-purple"/>
            </p>
          </div>
          </div>

          {/* Testimonial slider  */}
          <div className="ml-[10%] flex gap-x-10 items-center relative">
  

          <div className="h-[220px] w-[600px] flex flex-col justify-center items-center bg-white shadow-lg">
            <div className="w-[85%] h-[80%]">
              <div>
                <h1 className="text-purple text-2xl">
                  {TestimonialData[currentIndex].name}
                </h1>
                <p className="text-base mt-1 text-[#808080]">
                  {TestimonialData[currentIndex].position}
                </p>
              </div>
              <div className="mt-4">
                <p className="text-base text-[#30303C]">
                  {TestimonialData[currentIndex].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial