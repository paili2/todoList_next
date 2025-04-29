const ClaendarCard = () => {
  const date = new Date()
    .toLocaleString("en-US", { hour12: false })
    .replace(",", " ")
    .replaceAll("/", ".")
    .split(" ");

  return (
    <div className="border rounded-lg shadow-md p-5 bg-white">
      <div className="text-lg font-semibold text-blue-600 mb-1">
        {date[0].split(".").join(". ")}
      </div>
      <span className="text-5xl text-gray-800 font-bold">{date[2]}</span>
    </div>
  );
};

export default ClaendarCard;
