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
  takePageOneInfo,
  pageOneInfo,
}) {
  // let red;
  // useEffect(() => {
  //   if (error) {
  //     red = "border-red-600";
  //   } else {
  //     red = "border-gray-300";
  //   }
  // }, [error]);
  const regularStyle = `w-[416px] h-11 border-[1px] rounded-lg p-2 border-gray-300`;
  const warningStyle = `w-[416px] h-11 border-[1px] rounded-lg p-2 border-red-500`;
  useEffect(() => {
    if (
      pageOneInfo.includes("1") ||
      pageOneInfo.includes("2") ||
      pageOneInfo.includes("3") ||
      pageOneInfo.includes("4") ||
      pageOneInfo.includes("5") ||
      pageOneInfo.includes("6") ||
      pageOneInfo.includes("7") ||
      pageOneInfo.includes("8") ||
      pageOneInfo.includes("9") ||
      pageOneInfo.includes("0")
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [pageOneInfo]);
  // const checkNumbers = (pageOneInfo) => {

  // };
  return (
    <div
      className={`w-[480px] h-[655px] relative bg-white m-auto mt-20 ${inter.className}`}
    >
      <div className="w-[416px] h-[385px] absolute top-8 left-8 right-8 ">
        <div className="pb-2">
          <img src="./img/pinecone-logo.svg" />
          <p className="text-[26px] leading-[31.47px]">Join Us! 😎</p>
          <p className="text-gray-500 text-[16px] leading-[21.78px]">
            Please provide all current information accurately.
          </p>
        </div>
        <div className="my-3">
          <label htmlFor="name" className="text-[14px] ">
            Овог {error && <span className="text-red-500">*</span>}
          </label>
          <br />
          <input
            onChange={(e) => {
              setFirstname(e.target.value);
              console.log(firstname);
              takePageOneInfo(username + firstname + lastname);
            }}
            onKeyDown={(e) => {
              // console.log(e.target.value);
            }}
            className={error ? warningStyle : regularStyle}
            placeholder="Your Name"
            type="text"
          />
          {error && <p className="text-red-500">Тоо оруулж болохгүй!</p>}
        </div>
        <div className="my-3">
          <label htmlFor="name" className="text-[14px]">
            Нэр {error && <span className="text-red-500">*</span>}
          </label>
          <br />
          <input
            onChange={(e) => {
              setLastname(e.target.value);

              console.log(lastname);
              takePageOneInfo(username + firstname + lastname);
            }}
            className={error ? warningStyle : regularStyle}
            placeholder="Your surname"
          />
          {error && <p className="text-red-500">Тоо оруулж болохгүй!</p>}
        </div>
        <div className="my-3">
          <label htmlFor="name" className="text-[14px]">
            Хэрэглэгчийн нэр {error && <span className="text-red-500">*</span>}
          </label>
          <br />
          <input
            onChange={(e) => {
              setUsername(e.target.value);

              console.log(username);
              takePageOneInfo(username + firstname + lastname);
            }}
            className={error ? warningStyle : regularStyle}
            placeholder="Your username"
          />
          {error && <p className="text-red-500">Тоо оруулж болохгүй!</p>}
        </div>
      </div>
      {error ? (
        <button
          disabled
          onClick={() => {
            setCurrent(2);
          }}
          className="w-[416px] h-11 cursor-not-allowed bg-gray-400 text-white rounded-sm  absolute bottom-8 right-8 left-8"
          type="submit"
        >
          Continue 1/3
        </button>
      ) : (
        <button
          onClick={() => {
            setCurrent(2);
          }}
          className="w-[416px] h-11 bg-black text-white rounded-sm  absolute bottom-8 right-8 left-8"
          type="submit"
        >
          Continue 1/3
        </button>
      )}
    </div>
  );
}
