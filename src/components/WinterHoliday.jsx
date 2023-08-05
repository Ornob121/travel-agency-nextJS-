import { dancing_script } from "@/app/layout";
import Image from "next/image";
import React from "react";

const WinterHoliday = () => {
  return (
    <section className="mb-40">
      <div className="text-center">
        <h4
          className={`text-[50px] ${dancing_script.variable} font-fontDan text-[#3FD0D4]`}
        >
          Enjoy Your
        </h4>
        <h5 className="text-7xl font-semibold pb-10 font-dancing">
          Winter Holiday
        </h5>
        <p className="pb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ut,
          quos <br /> accusamus aut quaerat perspiciatis.
        </p>
      </div>
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-4 scroll-pt-12">
        <div className="max-w-[235px] mx-auto text-center">
          <Image
            src="/winter1.png"
            alt="picture of a camera"
            width={76}
            height={78}
            className="mx-auto"
          />
          <p className="font-bold pt-7 pb-4">Restaurants</p>
          <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
        </div>
        <div className="max-w-[235px] mx-auto text-center">
          <Image
            src="/winter2.png"
            alt="picture of a camera"
            width={76}
            height={78}
            className="mx-auto"
          />
          <p className="font-bold pt-7 pb-4">Sightseeing</p>
          <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
        </div>
        <div className="max-w-[235px] mx-auto text-center">
          <Image
            src="/winter3.png"
            alt="picture of a camera"
            width={76}
            height={78}
            className="mx-auto"
          />
          <p className="font-bold pt-7 pb-4">Shops & Boutiques</p>
          <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
        </div>
        <div className="max-w-[235px] mx-auto text-center">
          <Image
            src="/winter4.png"
            alt="picture of a camera"
            width={76}
            height={78}
            className="mx-auto"
          />
          <p className="font-bold pt-7 pb-4">Where to Stay</p>
          <p>Aenean commodo ligula eget dolor. Lorem ipsum</p>
        </div>
      </div>
    </section>
  );
};

export default WinterHoliday;
