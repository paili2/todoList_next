const ListCard = (props) => {
  return (
    <div className="w-1/2 border rounded-sm shadow-md">
      <h2 className="pb-3 border-b-1">{props.title}</h2>
    </div>
  );
};

export default ListCard;
