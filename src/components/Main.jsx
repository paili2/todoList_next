"use client";

import ListCard from "@/src/components/ListCard";
import CalendarCard from "@/src/components/CalendarCard";
import { useEffect, useState } from "react";

const Main = () => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setUserId(() => localStorage.getItem("userId"));
  }, []);

  return (
    <div className="w-full max-w-screen mx-auto grid grid-cols-4">
      <div className="col-span-3 p-10 flex flex-col gap-y-8 bg-blue-50 ">
        <div className="  bg-white font-bold text-2xl p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            Good Day, {userId} 님
          </h1>
          <span className="text-sm text-gray-500">
            최종 접속시간은 10시 02분 40초입니다
          </span>
        </div>
        <div className="flex justify-between">
          <div className="w-19/20 border-0 shadow-md bg-white p-3 rounded-4xl">
            <input
              className="w-full appearance-none outline-none border-none bg-transparent"
              type="text"
              placeholder="While a To Do and Press Enter"
            />
          </div>
          <button className="w-10 h-10 rounded-full bg-blue-500 text-white text-xl shadow-md hover:bg-blue-600 transition duration-200">
            +
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-15">
          <ListCard title={"Todo List"}></ListCard>{" "}
          <ListCard title={"Complete List"}></ListCard>
        </div>
        <ListCard title={"Life Quotes"}></ListCard>
      </div>
      <div className="col-span-1 p-10">
        <CalendarCard></CalendarCard>
      </div>
    </div>
  );
};
export default Main;
