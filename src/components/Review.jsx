"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import { blurData } from "@/utils/blurData";
import Rating from "react-rating";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const loadReviewData = await import("../utils/loadReviewData");
        const reviewsData = await loadReviewData.default();
        setReviews(reviewsData);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        background: "url('/review.jpg')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
      className="py-32 mb-24"
    >
      <h2 className="text-6xl font-semibold text-center text-white">
        Top Reviews
      </h2>
      <p className="text-lg pt-5 pb-8 font-semibold text-center text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione ipsam{" "}
        <br />
        quod quis. Eaque, repudiandae vel.
      </p>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-3 items-center px-7">
              <div className="h-[120px] w-[120px]">
                <Image
                  width={120}
                  height={120}
                  src={review.photo}
                  alt="reviewer photo"
                  placeholder="blur"
                  blurDataURL={blurData}
                  className="rounded-full h-[120px] w-[120px]"
                />
              </div>
              <div className="col-span-2 text-start">
                <h2 className="text-2xl font-bold tracking-wide">
                  {review.tourPlace}
                </h2>
                <p className="py-2">
                  <Rating
                    className="text-2xl"
                    initialRating={review.rating || 0}
                    emptySymbol={<span className="text-black">&#9734;</span>} // Rendered for empty stars
                    fullSymbol={<span className="text-[#3FD0D4]">&#9733;</span>} // Rendered for filled stars
                    readonly
                  />
                </p>
                <p className="text-xs">{review.review}</p>
                <h4 className="text-2xl font-bold pt-2">{review.name}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
