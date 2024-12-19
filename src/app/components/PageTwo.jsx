"use client";
import * as React from "react";

import { Inter } from "next/font/google";
import { validate } from "../utils/validate";
const inter = Inter({ subsets: ["latin"] });
export default function PageTwo({
  setCurrent,
  onChange,
  errorEmail,
  setErrorEmail,
  error1,
  setErrorNumber,
  errorNumber,
  form,
  current,
  errors,
  setErrors,
}) {
  const regularStyle = `w-[416px] h-11 border-[1px] rounded-lg p-2 border-gray-300`;
  const warningStyle = `w-[416px] h-11 border-[1px] rounded-lg p-2 border-red-500`;
  const { isValid, newErrors } = validate(form, current);
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
        <form>
          {!isValid && (
            <p className="text-red-500 ">Бүх талбарыг бөглөнө үү!</p>
          )}
          <div className="my-3">
            <label htmlFor="email" className="text-[14px]">
              Email
            </label>
            <br />
            <input
              required
              onChange={onChange}
              id="email"
              className={!errors.email ? warningStyle : regularStyle}
              placeholder="baldangiin email"
              type="email"
            />
            <p className="text-red-500">{errors.email}</p>
          </div>
          <div className="my-3">
            <label htmlFor="name" className="text-[14px]">
              Phone number
            </label>
            <br />
            <input
              required
              onChange={onChange}
              id="tel"
              className={!errors.tel ? warningStyle : regularStyle}
              placeholder="baldangiin utasnii dugaar"
              type="tel"
            />
            <p className="text-red-500">{errors.tel}</p>
          </div>
          <div className="my-3">
            <label htmlFor="name" className="text-[14px]">
              Password
            </label>
            <br />
            <input
              required
              onChange={onChange}
              id="password1"
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
              required
              onChange={onChange}
              id="password2"
              className={regularStyle}
              placeholder="baldangiin password"
              type="password"
            />
          </div>
        </form>
      </div>
      <div>
        <button
          onClick={() => {
            setCurrent(1);
          }}
          className="w-[128px] h-11 text-black rounded-sm border-[1px] border-gray-300 absolute bottom-8 left-8 "
          type="submit">
          Back
        </button>

        <button
          onClick={() => {
            if (isValid) {
              setCurrent(3);
            } else {
              setErrors(newErrors);
            }
          }}
          className={`w-[280px] h-11 ${
            isValid ? `bg-black` : `bg-gray-400 cursor-not-allowed`
          }  text-white rounded-sm absolute bottom-8 right-8 `}
          type="submit">
          Continue 2/3
        </button>
      </div>
    </div>
  );
}
