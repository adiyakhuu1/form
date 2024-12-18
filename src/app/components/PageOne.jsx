"use client";
import * as React from "react";
import { useEffect } from "react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function PageOne({
  setCurrent,
  setError,
  error,
  takePageOneInfo,
  pageOneInfo,
  form,
  setForm,
  onChange,
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

  // const checkNumbers = (pageOneInfo) => {

  // };
  return (
    <div
      className={`w-[480px] h-[655px] relative bg-white m-auto mt-20 ${inter.className}`}>
      <div className="w-[416px] h-[385px] absolute top-8 left-8 right-8 ">
        <div className="pb-2">
          <img src="./img/pinecone-logo.svg" />
          <p className="text-[26px] leading-[31.47px]">Join Us! 😎</p>
          <p className="text-gray-500 text-[16px] leading-[21.78px]">
            Please provide all current information accurately.
          </p>
        </div>
        <form>
          <div className="my-3">
            <label htmlFor="name" className="text-[14px] ">
              Овог
              {error ? (
                <span className="text-red-500"> *</span>
              ) : (
                <span className="text-black"> *</span>
              )}
            </label>
            <br />
            <input
              required
              id="lastname"
              onChange={(e) => {
                onChange(e);
                // checkNumbers(e);
              }}
              // onChange={(e) => {
              //   setFirstname(e.target.value);
              //   console.log(firstname);
              //   takePageOneInfo(username + firstname + lastname);
              // }}
              // onKeyDown={(e) => {
              //   // console.log(e.target.value);
              // }}
              className={error ? warningStyle : regularStyle}
              placeholder="Your surname"
              type="text"
            />
            {error && <p className="text-red-500">Тоо оруулж болохгүй!</p>}
          </div>
          <div className="my-3">
            <label htmlFor="name" className="text-[14px]">
              Нэр
              {error ? (
                <span className="text-red-500"> *</span>
              ) : (
                <span className="text-black"> *</span>
              )}
            </label>
            <br />
            <input
              required
              // onChange={(e) => {
              //   setLastname(e.target.value);

              //   console.log(lastname);
              //   takePageOneInfo(username + firstname + lastname);
              // }}
              id="firstname"
              onChange={(e) => {
                onChange(e);
                // checkNumbers(e);
              }}
              className={error ? warningStyle : regularStyle}
              placeholder="Your name"
            />
            {error && <p className="text-red-500">Тоо оруулж болохгүй!</p>}
          </div>
          <div className="my-3">
            <label htmlFor="name" className="text-[14px]">
              Хэрэглэгчийн нэр
              {error ? (
                <span className="text-red-500"> *</span>
              ) : (
                <span className="text-black"> *</span>
              )}
            </label>
            <br />
            <input
              required
              id="username"
              // onChange={(e) => {
              //   setUsername(e.target.value);

              //   console.log(username);
              //   takePageOneInfo(username + firstname + lastname);
              // }}
              onChange={(e) => {
                onChange(e);
                // checkNumbers(e);
              }}
              className={error ? warningStyle : regularStyle}
              placeholder="Your username"
            />
            {/* {error && <p className="text-red-500">Тоо оруулж болохгүй!</p>} */}
          </div>
        </form>
      </div>
      {error ? (
        <button
          disabled
          onClick={() => {
            setCurrent(2);
          }}
          className="w-[416px] h-11 cursor-not-allowed bg-gray-400 text-white rounded-sm  absolute bottom-8 right-8 left-8"
          type="submit">
          Continue 1/3
        </button>
      ) : (
        <button
          onClick={() => {
            setCurrent(2);
          }}
          className="w-[416px] h-11 bg-black text-white rounded-sm  absolute bottom-8 right-8 left-8"
          type="submit">
          Continue 1/3
        </button>
      )}
    </div>
  );
}
