const AddTodo = () => {
  return (
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
  );
};

export default AddTodo;
