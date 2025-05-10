"use client";

import { useEffect, useState } from "react";

const ClaendarCard = () => {
  const [calendar, setCalendar] = useState("");
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      const [year, month, day, hour, minute, seconds] = new Date()
        .toLocaleString("ko-KR", {
          hour12: false,
        })
        .split(" ");

      setCalendar((prev) => year + month + day);
      setTime(
        (prev) =>
          hour.replace("시", ":").padStart(2, "0") +
          minute.replace("분", ":").padStart(2, "0") +
          seconds.replace("초", "").padStart(2, "0")
      );
    }, 1000);
  }, []);

  return (
    <div className="border rounded-lg shadow-md p-5 bg-white">
      <div className="text-lg font-semibold text-blue-600 mb-1">{calendar}</div>
      <span className="text-5xl text-gray-800 font-bold">{time}</span>
    </div>
  );
};

export default ClaendarCard;
