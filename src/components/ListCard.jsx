import { Children } from "react";

const ListCard = ({ height, title, text, children }) => {
  return (
    <div
      className={`w-full ${
        title.toUpperCase().includes("LIST") ? "h-[500px]" : "h-fit"
      } border-0 rounded-4xl shadow-md p-7 bg-white font-bold text-2xl`}
    >
      <h2 className="pb-3 border-b-1">{title}</h2>
      <span>{children}</span>
    </div>
  );
};

export default ListCard;
