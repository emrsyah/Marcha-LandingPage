import React from "react";
import { CreditCardIcon, EmojiHappyIcon, PuzzleIcon } from "@heroicons/react/outline";

function Overview() {
  return (
    <div className="mx-20 my-24 relative bg-purple-600 rounded-xl p-14 items-center justify-between flex text-white">
      <div className="absolute bg-white h-24 w-24 rounded-full blur-2xl -top-6 -left-8"></div>
      <div className="absolute bg-white h-16 w-16 rounded-full blur-2xl  -bottom-8 left-80"></div>
      <div className="absolute bg-white h-20 w-20 rounded-full blur-2xl -top-10 right-96"></div>
      <div className="absolute bg-white h-20 w-20 rounded-full blur-2xl  top-20 -right-10"></div>
      <div className="flex max-w-xs">
        <CreditCardIcon className="h-16" />
        <div className="px-2 py-4">
          <h5 className="font-semibold text-xl">Easy Transaction</h5>
          <p className="mt-1 font-light">
            {" "}
            Marcha make your transaction easy, send money from anywhere anytime
            with easily.
          </p>
        </div>
      </div>
      <div className="flex max-w-xs">
        <PuzzleIcon className="h-16" />
        <div className="px-2 py-4">
          <h5 className="font-semibold text-xl">Complex Payment? Easy</h5>
          <p className="mt-1 font-light">
            {" "}
            Split bill, group payment, and other complex payment? Dont worry, we
            take care of it.
          </p>
        </div>
      </div>
      <div className="flex max-w-xs">
        <EmojiHappyIcon className="h-16" />
        <div className="px-2 py-4">
          <h5 className="font-semibold text-xl">Bye Awkwardness</h5>
          <p className="mt-1 font-light">
            {" "}
            Ever experience awkwardness when your friends owe’s a money?, hey
            marcha can help you here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
