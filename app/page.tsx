"use client";

import React, { useState } from "react";

import Display from "@/components/Display";

import {
  decrementCounter,
  incrementCounter,
} from "@/store/features/counterSlice";

import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <Display />
      <div className="mt-[3rem] flex gap-[2rem]">
        <button
          className="uppercase bg-rose-500 px-[2rem] py-[0.5rem] text-white rounded-md"
          onClick={() => {
            dispatch(incrementCounter());
          }}
        >
          increment
        </button>
        <button
          className="uppercase bg-rose-500 px-[2rem] py-[0.5rem] text-white rounded-md"
          onClick={() => {
            dispatch(decrementCounter());
          }}
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
