import React, { useRef } from 'react'
import { LuMoveLeft , LuMoveRight } from "react-icons/lu";
import { InventureData } from '../data/data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Inverstment = () => {

   const sliderRef = useRef(null);
   

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };


  return (
    <div className='w-full bg-gray h-[700px]'>
      <div className='w-[86%] h-[86%] m-auto flex  flex-col justify-center pt-[7%]'>
        <div className='w-[15%]'>
          <h1 className='p-1.5 bg-[#F2EBFF] text-center text-purple font-bold text-base'>Investment Options</h1>
        </div>
        <div className='mt-5'>
            <div className='flex w-full justify-between items-center'>
              <h1 className='font-medium text-5xl'>
                Get Everything under one Roof 
              </h1>
              <div className='flex pr-[2%]'>
                <p  onClick={handlePrev} className='p-3 bg-white mr-4 cursor-pointer rounded-md'>
                  <LuMoveLeft  />
                </p>
                <p onClick={handleNext} className='p-3 bg-white cursor-pointer  rounded-md '>
                  <LuMoveRight  />
                </p>
              </div>
            </div>
        </div>

        <div className='w-[100%] m-auto'>
          <Slider  ref={sliderRef} {...settings}>
          {
            InventureData.map((inventure) => (
              <div className='w-[380px] h-[330px] bg-white border-lightGray border-[1px]  rounded-lg' key={inventure.id}>
                <div className='w-[90%] h-[90%] flex justify-center flex-col mx-auto'>
                  <div className='h-[90px] w-[90px]'>
                      <img src={inventure.image} alt="" />
                  </div>

                  <div className='mt-4 text-2xl font-bold'>
                    <h1>{inventure.title}</h1>
                  </div>

                  <div className='mt-4 text-base text-[#474752]'>
                    <p>
                      {inventure.description}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
          </Slider>
           <style jsx>{`
            .slick-prev,
            .slick-next {
              display: none !important; // Hide default arrows
            }
          `}</style>
        </div>
      </div>
    </div>
  )
}

export default Inverstment