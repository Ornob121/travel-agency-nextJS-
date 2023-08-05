import { dancing_script } from "@/app/layout";
import React from "react";

const WinterResorts = () => {
  return (
    <section className="max-w-[1300px] mx-auto mb-32">
      <div className="text-center">
        <h4
          className={`text-[50px] ${dancing_script.variable} font-fontDan text-[#3FD0D4]`}
        >
          Choose Your
        </h4>
        <h5 className="text-7xl font-semibold pb-10 font-dancing">
          Winter Resort
        </h5>
        <p className="pb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ut,
          quos <br /> accusamus aut quaerat perspiciatis.
        </p>
      </div>
      <div className="pt-24 grid grid-cols-1 md:grid-cols-3 gap-y-6">
        <div className="w-[400px] h-[400px] overflow-hidden relative rounded-full">
          <div
            style={{
              background: "url('/winterIsland1.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transition: "transform 2s ease-in-out",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
            }}
            className="hover:scale-[1.05] absolute flex justify-center items-center"
          ></div>
          <h2
            className={`${dancing_script.variable} relative top-[43%] left-0 right-0 font-fontDan text-white text-center text-6xl z-50`}
          >
            Finland
          </h2>
        </div>
        <div className="w-[400px] h-[400px] overflow-hidden relative rounded-full">
          <div
            style={{
              background: "url('/winterIsland2.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transition: "transform 2s ease-in-out",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
            }}
            className="hover:scale-[1.05] absolute flex justify-center items-center"
          ></div>
          <h2
            className={`${dancing_script.variable} relative top-[43%] left-0 right-0 font-fontDan text-white text-center text-6xl z-50`}
          >
            Mongolia
          </h2>
        </div>
        <div className="w-[400px] h-[400px] overflow-hidden relative rounded-full">
          <div
            style={{
              background: "url('/winterIsland3.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              transition: "transform 2s ease-in-out",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
            }}
            className="hover:scale-[1.05] absolute flex justify-center items-center"
          ></div>
          <h2
            className={`${dancing_script.variable} relative top-[43%] left-0 right-0 font-fontDan text-white text-center text-6xl z-50`}
          >
            Greenland
          </h2>
        </div>
      </div>
    </section>
  );
};

export default WinterResorts;
