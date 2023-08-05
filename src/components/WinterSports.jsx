"use client";
import React from "react";

import { dancing_script } from "@/app/layout";

import { TbPlayerPlayFilled } from "react-icons/tb";

const WinterSports = () => {
  return (
    <div className="my-24 max-w-[900px] mx-auto text-center">
      <div>
        <h2
          className={`text-[50px] ${dancing_script.variable} font-fontDan text-[#3FD0D4]`}
        >
          Try Now
        </h2>
        <p className="text-7xl font-semibold pb-10">Winter Sports</p>
      </div>
      <label
        style={{
          background: ' url("/skiing.jpg")',
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-[400px] h-[200px]  md:h-[400px] md:w-[900px] flex justify-center items-center mx-auto text-center parent-div cursor-pointer"
        htmlFor="my_modal_7"
      >
        <span className="p-6 rounded-full child-span bg-[#3FD0D4]">
          <TbPlayerPlayFilled className="text-2xl text-white " />
        </span>

        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal mx-auto w-full h-full pb-16">
          <div className="mx-auto">
            <iframe
              src="https://www.youtube.com/embed/xd39Ho1kfqc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className=" w-[400px] h-[250px]  md:w-[1000px] md:h-[515px] "
            ></iframe>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </label>
      <p className="py-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        earum beatae eveniet fugit laboriosam eius molestias, iusto minima
        mollitia modi commodi cumque debitis totam odit non adipisci assumenda,
        voluptate, neque doloremque quia illum repellat. Alias quae asperiores
        assumenda enim soluta, iure nisi in vel modi accusantium quibusdam ipsam
        dolores sint eligendi? Ut vel sunt in, repudiandae nobis asperiores
        aliquid numquam.
      </p>
      <button className="uppercase w-[300px] py-4 bg-[#3FD0D4] font-medium text-white hover:bg-[#2fa2a6] tracking-wide hover:duration-1000">
        view more
      </button>
    </div>
  );
};

export default WinterSports;
