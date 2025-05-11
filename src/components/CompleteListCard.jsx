import React from "react";
import { Children } from "react";
import Card from "../common/card/Card";

const CompleteListCard = ({ title, children }) => {
  return (
    <Card title={"Complete List"}>
      <div className="flex flex-col gap-2">
        {React.Children.map(children, (v, i) => {
          return (
            <div className="flex items-center gap-3" key={i}>
              <div className="flex items-center">
                <input className="border-none outline-none" type="checkbox" />
              </div>
              <div className="text-lg">{v}</div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default CompleteListCard;
