import Banner from "@/components/Banner";
import Review from "@/components/Review";
import Tourists from "@/components/Tourists";
import WinterHoliday from "@/components/WinterHoliday";
import WinterResorts from "@/components/WinterResorts";
import WinterSports from "@/components/WinterSports";
import React from "react";

const MainPage = () => {
  return (
    <div>
      <Banner />
      <WinterSports />
      <Review />
      <WinterHoliday />
      <Tourists />
      <WinterResorts />
    </div>
  );
};

export default MainPage;
