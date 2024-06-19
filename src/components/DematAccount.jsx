import React from "react";
import { DematAccountData } from "../data/data";
import DematBackgroundImage from "../assets/DematAcImages/dematBackgroundimage.jpeg";
import GroupImage from "../assets/DematAcImages/IGSL-Trade-app-Desktop-Size.jpg";
import clockviseImage from "../assets/DematAcImages/Vector1.png";
import antiClockWiseImage from "../assets/DematAcImages/Vector2.png";

const DematAccount = () => {
  return (
    <>
      <div className="w-full h-[800px] flex justify-center">
        <div className="w-[85%] h-[85%] flex flex-col justify-center">
          <div className="max-w-[25%] mx-auto">
            <h1 className="p-1.5 bg-[#F2EBFF] text-center text-purple font-bold text-base">
              Why choose us
            </h1>
          </div>

          <div className="w-[65%] mx-auto mt-5">
            <h1 className="text-5xl w-[100%] text-center font-medium">
              Benefits for opening Demat A/C with IGSL:-
            </h1>
          </div>

          <div className="w-full flex justify-center mt-8">
            <div className="grid grid-cols-4 gap-4">
              {DematAccountData.map((demataccount) => (
                <div
                  key={demataccount.id}
                  className={`border-l-[1px] border-[#E7E7E7] py-4 px-6 ${
                    demataccount.id === 4 || demataccount.id === 8
                      ? "border-r-[1px]"
                      : ""
                  }`}
                >
                  <div className="flex pb-2 border-b-[1px] border-[#111112]">
                    <img
                      src={demataccount.image}
                      alt={demataccount.title}
                      className="h-[32px] w-[32px]"
                    />
                  </div>
                  <div className="mt-4 text-start text-2xl text-[#30303C]">
                    <p className="text-xl font-medium">{demataccount.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 w-full object-contain">
        <img className="w-full  object-cover" src={GroupImage} alt="" />
      </div>

      {/* Demat Account Open */}

      <div className="w-full mt-12 flex justify-center">
        <div className="w-[85%] h-[85%] flex flex-col justify-center">
          <div className="max-w-[25%] mx-auto">
            <h1 className="p-1.5 px-3 bg-[#F2EBFF] uppercase text-center text-purple font-bold text-base">
              Steps
            </h1>
          </div>

          <div className="w-[65%] mx-auto mt-5">
            <h1 className="text-5xl w-[100%] text-center font-medium">
              Steps to Open a  <br/>
              <span className="mt-3">
               Demat Trading Account
               </span>
            </h1>
          </div>

          <div className="w-full mt-10 mb-11 relative">
           
              <div className="w-full relative flex justify-between mt-12">
                  <div className="w-[320px] h-[150px] flex items-center bg-white shadow-xl rounded-lg">
                     <div className="w-[80%] h-[50%] flex flex-col justify-between items-center">
                        <h3 className="w-[90%] mx-auto text-[#30303C] text-2xl">1. <span>Form fill up</span></h3>

                        <p className="w-[90%] mx-auto mt-2">Fill up your personal details in the form above</p>
                     </div>
                  </div>
                  <div className="w-[320px] mt-10 h-[150px] flex items-center bg-white shadow-xl rounded-lg">
                     <div className="w-[80%] h-[50%] flex flex-col justify-between items-center">
                        <h3 className="w-[90%] mx-auto text-[#30303C] text-2xl">2. <span>Share Details</span></h3>

                        <p className="w-[90%] mx-auto mt-2">Fill up your personal details in the form above</p>
                     </div>
                  </div>
                  <div className="w-[320px] h-[150px] flex items-center bg-white shadow-xl rounded-lg">
                     <div className="w-[80%] h-[50%] flex flex-col justify-between items-center">
                        <h3 className="w-[90%] mx-auto text-[#30303C] text-2xl">3. <span>OTP Authentication</span></h3>

                        <p className="w-[90%] mx-auto mt-2">Fill up your personal details in the form above</p>
                     </div>
                  </div>
              </div>
               <div className="absolute top-[2%] left-[60%]" >
               <img src={antiClockWiseImage} alt="" />
            </div>
             <div className="absolute top-[90%] left-[20%]" >
               <img src={clockviseImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DematAccount;
