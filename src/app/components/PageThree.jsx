"use client";
import * as React from "react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function PageThree({ setCurrent, onChange }) {
  const regularStyle = `w-[416px] h-11 border-[1px] rounded-lg p-2 border-gray-300`;
  return (
    <div
      className={`w-[480px] h-[655px] relative bg-white m-auto mt-20 ${inter.className}`}
    >
      <div className="w-[416px] h-[385px] absolute top-8 left-8 right-8">
        <div className="pb-2">
          <img src="./img/pinecone-logo.svg" />
          <p className="text-[26px] leading-[31.47px]">Join Us! 😎</p>
          <p className="text-gray-500 text-[16px] leading-[21.78px]">
            Please provide all current information accurately.
          </p>
        </div>
        <form>
          <div className="my-3">
            <label htmlFor="email" className="text-[14px]">
              Date of birth
            </label>
            <br />
            <input
              id="birth-date"
              onChange={onChange}
              className={regularStyle}
              placeholder="baldangiin email"
              type="date"
            />
          </div>
          <div className="my-3">
            <label htmlFor="email" className="text-[14px]">
              Profile Image
            </label>
            <br />
            <input
              id="pfp"
              onChange={onChange}
              className={regularStyle}
              placeholder="baldangiin email"
              type="file"
            />
          </div>
        </form>
      </div>

      <div>
        <button
          onClick={() => {
            setCurrent(2);
          }}
          className="w-[128px] h-11 text-black rounded-sm border-[1px] border-gray-300 absolute bottom-8 left-8 "
          type="submit"
        >
          Back
        </button>
        <button
          onClick={() => {
            setCurrent(4);
          }}
          className="w-[280px] h-11 bg-black text-white rounded-sm  absolute bottom-8 right-8 "
          type="submit"
        >
          Continue 3/3
        </button>
      </div>
    </div>
  );
}
