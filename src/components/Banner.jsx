import Image from "next/image";
import React from "react";

import { dancing_script } from "@/app/layout";

const Banner = () => {
  return (
    <div
      style={{
        background: ' url("/banner1.jpg")',
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
      className="h-[420px] pt-20 font-semibold text-center"
    >
      <div className={`text-white`}>
        <h2 className={`text-[70px] ${dancing_script.variable} font-fontDan`}>
          Enjoy Your
        </h2>
        <h4 className="text-[70px] pb-4 font-dancing">Winter Vacations</h4>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          alias dolore atque sit blanditiis eum. <br /> Ullam temporibus dolores
          eius maxime!
        </p>
      </div>
    </div>
  );
};

export default Banner;
