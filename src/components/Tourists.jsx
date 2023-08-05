"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import { blurData } from "@/utils/blurData";
import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import CountUp from "react-countup";

const Tourists = () => {
  const [tourists, setTourists] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loadTouristData = await import("../utils/loadTouristData");
        const touristsData = await loadTouristData.default();
        setTourists(touristsData);
      } catch (error) {
        console.log("Error while fetching tourist data", error);
      }
    };
    fetchData();
  }, []);
  console.log(tourists);

  return (
    <div className="mb-24">
      <div className="grid grid-cols-4">
        {tourists.map((tourist, i) => {
          return (
            <div key={i} className="main-div-hover">
              <Image
                src={tourist.photo}
                alt="tourist photo"
                width={400}
                height={600}
                className="w-full h-[600px] hover-image"
              />
              <div className="hidden-div text-center text-white pt-6">
                <h4 className="text-2xl font-semibold">{tourist.name}</h4>
                <p className="py-3">{tourist.details}</p>
                <div className="flex gap-x-4 text-lg justify-center">
                  <span>
                    <FaPinterestP className=" cursor-pointer" />
                  </span>
                  <span>
                    <FaTwitter className=" cursor-pointer" />
                  </span>
                  <span>
                    <FaFacebookF className=" cursor-pointer" />
                  </span>
                  <span>
                    <FaInstagram className=" cursor-pointer" />
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-[#3FD0D4] grid grid-cols-4 py-20">
        <div className="text-white text-center">
          <h6 className="text-5xl font-bold">
            <CountUp
              end={450}
              duration={5}
              scrollSpyOnce={true}
              enableScrollSpy={true}
            />
          </h6>
          <p className="text-xl font-semibold">Tourists</p>
        </div>
        <div className="text-white text-center">
          <h6 className="text-5xl font-bold">
            <CountUp
              end={110}
              duration={5}
              scrollSpyOnce={true}
              enableScrollSpy={true}
            />
          </h6>
          <p className="text-xl font-semibold">Years</p>
        </div>
        <div className="text-white text-center">
          <h6 className="text-5xl font-bold">
            <CountUp
              end={180}
              duration={5}
              scrollSpyOnce={true}
              enableScrollSpy={true}
            />
          </h6>
          <p className="text-xl font-semibold">Cottages</p>
        </div>
        <div className="text-white text-center">
          <h6 className="text-5xl font-bold">
            <CountUp
              end={300}
              duration={5}
              scrollSpyOnce={true}
              enableScrollSpy={true}
            />
          </h6>
          <p className="text-xl font-semibold">Restaurants</p>
        </div>
      </div>
    </div>
  );
};

export default Tourists;
