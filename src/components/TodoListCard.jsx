"use client";
import React, { useEffect, useState } from "react";
import { Children } from "react";
import Card from "../common/card/Card";

const TodoListCard = ({ children }) => {
  const [checkedValue, setCheckedValue] = useState([]);

  useEffect(() => {
    if (checkedValue) {
      localStorage.setItem("checkedValue", checkedValue);
    }
  }, [checkedValue]);

  return (
    <Card title={"Todo List"}>
      <div className="flex flex-col gap-2">
        {React.Children.map(children, (v, i) => {
          const value = typeof v === "string" ? v : v.props.children;
          return (
            <div className="flex items-center gap-3" key={i}>
              <div className="flex items-center">
                <input
                  className="border-none outline-none"
                  type="checkbox"
                  value={value}
                  onChange={(e) => setCheckedValue(() => e.target.value)}
                />
              </div>
              <div className="text-lg">{v}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default TodoListCard;
