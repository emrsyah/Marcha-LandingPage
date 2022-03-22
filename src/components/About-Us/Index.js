import React from "react";
import { Icon } from "@iconify/react";
import hustler from "../pictures/hustler.jpg";
import hacker from "../pictures/hacker.jpg";
import hipster from "../pictures/hipster.jpg";

function Index() {
  return (
    <div className="text-center mx-20 my-12">
      <h1 className="text-6xl font-semibold my-4">About Us</h1>
      <p className="text-light opacity-80 mx-auto">
        ORBIT (Organization Basic of Information Technology) is an
        extracurricular organization from SMKN 4 Bandung.
        <br />
        However the development of Marcha is held by 3 cool student from ORBIT.
      </p>
      <div className="flex mt-12 justify-between w-4/5 mx-auto">
        <div className="flex flex-col items-center border-gray-100 rounded-md border-2 max-w-max py-5 px-10 transition-all duration-150 ease-out hover:scale-105">
          <img
            src={hipster}
            className="h-28 w-28 rounded-full object-cover"
            alt=""
          />
          <h5 className="font-semibold mt-5">Muhammad Favian J.</h5>
          <p className="font-light">Hipster</p>
          <div className="flex mt-8 gap-6 w-max">
            <Icon
              icon="akar-icons:github-fill"
              className="h-7 w-7 text-purple-600 cursor-pointer hover:text-purple-700"
            />
            <Icon
              icon="akar-icons:instagram-fill"
              className="h-7 w-7 text-purple-600 cursor-pointer hover:text-purple-700"
            />
            <Icon
              icon="akar-icons:twitter-fill"
              className="h-7 w-7 text-purple-600 cursor-pointer hover:text-purple-700"
            />
          </div>
        </div>
        <div className="flex flex-col items-center border-gray-100 rounded-md border-2 max-w-max py-5 px-10">
          <img
            src={hacker}
            className="h-28 w-28 rounded-full object-cover"
            alt=""
          />
          <h5 className="font-semibold mt-5">Yahya Alfon Sinaga</h5>
          <p className="font-light">Hacker</p>
          <div className="flex mt-8 gap-6 w-max">
            <Icon
              icon="akar-icons:github-fill"
              className="h-7 w-7 text-purple-600 cursor-pointer hover:text-purple-700"
            />
            <Icon
              icon="akar-icons:instagram-fill"
              className="h-7 w-7 text-purple-600 cursor-pointer hover:text-purple-700"
            />
            <Icon
              icon="akar-icons:twitter-fill"
              className="h-7 w-7 text-purple-600 cursor-pointer hover:text-purple-700"
            />
          </div>
        </div>
        <div className="flex flex-col items-center border-gray-100 rounded-md border-2 max-w-max py-5 px-10">
          <img
            src={hustler}
            className="h-28 w-28 rounded-full object-cover"
            alt=""
          />
          <h5 className="font-semibold mt-5">Muhammad Emirsyah</h5>
          <p className="font-light">Hustler</p>
          <div className="flex mt-8 gap-6 w-max">
            <Icon
              icon="akar-icons:github-fill"
              className="h-7 w-7 text-purple-600 cursor-pointer hover:text-purple-700"
            />
            <Icon
              icon="akar-icons:instagram-fill"
              className="h-7 w-7 text-purple-600 cursor-pointer hover:text-purple-700"
            />
            <Icon
              icon="akar-icons:twitter-fill"
              className="h-7 w-7 text-purple-600 cursor-pointer hover:text-purple-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
