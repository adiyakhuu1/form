"use client";
import * as React from "react";
import { useEffect } from "react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function PageOne({
  setCurrent,
  username,
  setUsername,
  firstname,
  setFirstname,
  lastname,
  setLastname,
  setError,
  error,
}) {
  let red;
  useEffect(() => {
    if (error) {
      red = "border-red-600";
    } else {
      red = "border-gray-300";
    }
  }, [error]);
  return (
    <div
      className={`w-[480px] h-[655px] relative bg-white m-auto mt-20 ${inter.className}`}>
      <div className="w-[416px] h-[385px] absolute top-8 left-8 right-8">
        <div className="pb-2">
          <img src="./img/pinecone-logo.svg" />
          <p className="text-[26px] leading-[31.47px]">Join Us! 😎</p>
          <p className="text-gray-500 text-[16px] leading-[21.78px]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="">
          <label htmlFor="name" className="text-[14px]">
            First name
          </label>
          <br />
          <input
            onKeyDown={(e) => {
              setFirstname(e.target.value);
              console.log(e.target.value);
            }}
            className={`w-[416px] h-11 border-[1px] rounded-lg p-2 ${red}`}
            placeholder="baldan"
            type="text"
          />
        </div>
        <div className="">
          <label htmlFor="name" className="text-[14px]">
            Last name
          </label>
          <br />
          <input
            onKeyDown={(e) => {
              setLastname(e.target.value);
              console.log(e.target.value);
            }}
            className="w-[416px] h-11 border-[1px] rounded-lg p-2 border-gray-300"
            placeholder="baldangiin last name"
          />
        </div>
        <div className="">
          <label htmlFor="name" className="text-[14px]">
            Username
          </label>
          <br />
          <input
            onKeyDown={(e) => {
              setUsername(e.target.value);
              console.log(e.target.value);
            }}
            className="w-[416px] h-11 border-[1px] rounded-lg p-2 border-gray-300"
            placeholder="baldangiin username"
          />
        </div>
      </div>

      <button
        onClick={() => {
          setCurrent(2);
        }}
        className="w-[416px] h-11 bg-black text-white rounded-sm  absolute bottom-8 right-8 left-8"
        type="submit">
        Continue 1/3
      </button>
    </div>
  );
}
