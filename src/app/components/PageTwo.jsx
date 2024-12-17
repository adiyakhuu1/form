"use client";
import * as React from "react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function PageTwo({ setCurrent }) {
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
        <div className="my-3">
          <label htmlFor="email" className="text-[14px]">
            Email
          </label>
          <br />
          <input
            className={regularStyle}
            placeholder="baldangiin email"
            type="email"
          />
        </div>
        <div className="my-3">
          <label htmlFor="name" className="text-[14px]">
            Phone number
          </label>
          <br />
          <input
            className={regularStyle}
            placeholder="baldangiin utasnii dugaar"
            type="number"
          />
        </div>
        <div className="my-3">
          <label htmlFor="name" className="text-[14px]">
            Password
          </label>
          <br />
          <input
            className={regularStyle}
            placeholder="baldangiin password"
            type="password"
          />
        </div>
        <div className="my-3">
          <label htmlFor="name" className="text-[14px]">
            Confirm password
          </label>
          <br />
          <input
            className={regularStyle}
            placeholder="baldangiin password"
            type="password"
          />
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            setCurrent(1);
          }}
          className="w-[128px] h-11 text-black rounded-sm border-[1px] border-gray-300 absolute bottom-8 left-8 "
          type="submit"
        >
          Back
        </button>
        <button
          onClick={() => {
            setCurrent(3);
          }}
          className="w-[280px] h-11 bg-black text-white rounded-sm  absolute bottom-8 right-8 "
          type="submit"
        >
          Continue 2/3
        </button>
      </div>
    </div>
  );
}
