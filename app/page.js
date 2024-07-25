import React from "react";
import HomeSwiper1 from "./components/swiper/HomeSwiper1";
import ReviewSwiper from "./components/swiper/ReviewSwiper";
import Journey from "./components/homepageComp/Journey";
import ProductPoster from "./components/homepageComp/ProductPoster";
import InfluencerSection from "./components/homepageComp/InfluencerSection";
import Product from "./components/product/Product";
import Link from "next/link";
import Button from "./components/button/Button";

const Page = () => {
  return (
    <>
      <HomeSwiper1 />
      <div className="h-[90vh] w-full flex flex-col items-center justify-center gap-5 mt-[33vh]">
        <h1 className="text-5xl font-juanaRegular leading-none text-center">
          We Are The Best
        </h1>
        <p className="text-sm leading-none font-medium mb-3">
          "we don’t say it our members say it"
        </p>
        <div className="mt-10">
          <ReviewSwiper />
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center gap-8 mt-[10vh]">
        <h1 className="text-xl lg:text-[3.5vmax] text-center py-5 font-juanaSemibold text-[#6A4D6F]	">
          Bad Skin Has Multiple Root Causes
        </h1>
        <div className="relative mt-[10vh]">
          <img
            src="/images/image01.webp"
            className="object-cover w-[80vw]"
            alt="internet required"
          />
        </div>
        <Button text={"Take a Test Now"} className="mt-10" />
      </div>
      <div className=" flex items-center justify-center mt-[10vh]">
        <div className="text-center flex flex-col gap-3 items-center justify-center">
          <p>we are providing here</p>
          <h1 className="text-[3vmax] font-juanaSemibold">Three Step Plan</h1>
          <h4 className="text-[2vmax] lg:text-xl text-[#DF9D43] ">
            SKIN AURA’S HOLISTIC PLAN FOR HAIR FALL
          </h4>
          <h3 className="text-sm lg:text-xl text-[#6A4D6F]">
            AYURVEDA + DERMATOLOGY + NUTRITION
          </h3>
          <p className="w-[80vw] lg:w-2/5 text-[#DF9D43] mt-10 ">
            Our approach combines the goodness of three sciences. With
            ingredients from the most authentic sources, we personalize your
            treatment delivering assured results.
          </p>
          <Button text={"Take a Test Now"} className="mt-[8vh]" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-12">
        <Journey />
        <Button text={"Take a Test Now"} className="mt-20" />
      </div>
      <div className="h-[50vh] py-5 my-[10vh]">
        <ProductPoster />
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <InfluencerSection />
        <Button text={"Take a Test Now"} className="my-10" />
      </div>
      <div className=" flex flex-col items-center justify-center gap-2">
        <div className="text-center py-5">
          <h1 className="text-[4vmax] font-juanaMedium">
            Why We are India’s Choice ?
          </h1>
          <p>"Because we provide Trust & Quality"</p>
        </div>
        <div className="relative h-[80vh] w-[80vw] bg-pink-200 rounded-3xl">
          <img src="" className=" w-[80vw] object-cover" alt="team picture" />
        </div>
      </div>
      <div className="h-[80vh] border my-2 py-2">
        <h1 className="text-[3vmax] text-center">Our Customers</h1>
        <p className="text-center">“Family Members”</p>
      </div>
      <div className="py-10 flex flex-col items-center justify-around gap-5">
        <div className="py-5">
          <h1 className="text-[3vmax] text-center">Safe And Proven</h1>
          <p className="text-center">“Green and Safe”</p>
        </div>
        <div className="h-[65vh] rounded-3xl w-[80vw] bg-red-200 relative object-cover object-center">
          <img src="" alt="product image" />
        </div>
        <Button text={"Take a Test Now"} className="mt-10" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-[3vmax]">The must haves</h1>
          <p>“Green and Safe”</p>
        </div>
        <div className="py-10 flex flex-col lg:flex-row items-center justify-center gap-8">
          <Product />
          <Product />
          <Product />
        </div>
        <button className="my-5 h-[6vh] w-[30vw] lg:h-[8vh] lg:w-[10vw] bg-red-300 rounded-lg ">
          <Link href={"/products"}>View All</Link>
        </button>
      </div>
    </>
  );
};

export default Page;
