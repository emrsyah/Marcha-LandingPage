import React from "react";
import Hiasan from "../assets/hiasan-1.svg";

function Hero() {
  return (
    <div className="text-center my-16">
      <div className="relative">
        <h1 className="font-bold text-6xl mb-6 leading-[72px] z-50">
          All Your <span className="text-purple-600">Social</span>
          <br />
          Payment Made Easy
        </h1>
        <img src={Hiasan} alt="" className="absolute top-24 left-[232px] z-[-10]" />
      </div>
      <p className="font-light mb-10 max-w-xs mx-auto opacity-90">
        The social payment app to make your payment easy, fun, interactive.
      </p>
      <h5 className="font-semibold bg-purple-600 max-w-max mx-auto px-12 py-4 rounded-lg text-white cursor-pointer hover:bg-purple-700">
        See Our Progress
      </h5>
    </div>
  );
}

export default Hero;
