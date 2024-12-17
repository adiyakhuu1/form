"use client";
import * as React from "react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function PageDone({ setCurrent }) {
  return (
    <div
      className={`w-[480px] h-[250px] relative bg-white m-auto mt-20 ${inter.className}`}>
      <div className="w-[416px] h-[385px] absolute top-8 left-8 right-8">
        <div className="pb-2">
          <img src="./img/pinecone-logo.svg" />
          <p className="text-[26px] leading-[31.47px]">You're All Set 🔥</p>
          <p className="text-gray-500 text-[16px] leading-[21.78px]">
            We have received your submission. Thank you!
          </p>
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            setCurrent(3);
          }}
          className="w-[128px] h-11 text-black rounded-sm border-[1px] border-gray-300 absolute bottom-8 left-8 "
          type="submit">
          Back
        </button>
      </div>
    </div>
  );
}
