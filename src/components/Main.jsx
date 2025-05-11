"use client";

import CalendarCard from "@/src/components/CalendarCard";
import { useEffect, useState } from "react";
import TodoListCard from "./TodoListCard";
import CompleteListCard from "./CompleteListCard";
import AddTodo from "./AddTodo";

const Main = () => {
  const [userId, setUserId] = useState("");
  const [lastLoginTime, setLastLoginTime] = useState("");

  useEffect(() => {
    setUserId(() => localStorage.getItem("userId"));
    const now = new Date();
    const fommated = `${now.getHours().toString().padStart("2", 0)}시 ${now
      .getMinutes()
      .toString()
      .padStart("2", 0)}분 ${now.getSeconds().toString().padStart("2", 0)}초`;
    setLastLoginTime(() => fommated);
  }, []);

  return (
    <div className="w-full max-w-screen mx-auto grid grid-cols-4">
      <div className="col-span-3 p-10 flex flex-col gap-y-8 bg-blue-50 ">
        <div className="  bg-white font-bold text-2xl p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold text-blue-600 mb-2">
            Good Day, {userId} 님
          </h1>
          <span className="text-sm text-gray-500">
            최종 접속시간은 {lastLoginTime}입니다
          </span>
        </div>
        <AddTodo></AddTodo>
        <div className="grid grid-cols-2 gap-x-15">
          <TodoListCard>
            <span>하이</span>
            <span>헬로</span>
          </TodoListCard>
          <CompleteListCard>
            <span>헬로</span>
            <span>헬로</span>
          </CompleteListCard>
        </div>
        {/* <ListCard title={"Life Quotes"}></ListCard> */}
      </div>
      <div className="col-span-1 p-10">
        <CalendarCard></CalendarCard>
      </div>
    </div>
  );
};
export default Main;
