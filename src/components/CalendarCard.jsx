const ClaendarCard = () => {
  const date = new Date().toGMTString().split(" ");
  return (
    <div className="border rounded-lg shadow-md p-3 bg-white">
      {date
        .slice(0, 4)
        .map((v) => v)
        .join(" ")}
    </div>
  );
};

export default ClaendarCard;
