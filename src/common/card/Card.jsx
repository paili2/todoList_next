import { Children } from "react";

const Card = ({ title, children }) => {
  return (
    <div
      className={`w-full ${
        title.toUpperCase().includes("LIST") ? "h-[500px]" : "h-fit"
      } border-0 rounded-4xl shadow-md p-7 bg-white text-2xl`}
    >
      <h2 className="pb-3 border-b-1 mb-5 font-bold">{title}</h2>
      {children}
    </div>
  );
};

export default Card;
