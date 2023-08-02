const NavBar = ({ onSearch }) => {
  return (
    <div className="flex justify-between bg-neutral-400 py-5 px-2 rounded-sm">
      <h1 className="font-bold text-center flex items-center text-white">Search Target.com</h1>
      <form className="flex items-center">
        <div className="flex flex-col">
          <input
            type="text"
            className={`border p-2 mr-2 rounded-md `}
            placeholder="Type to search"
            style={{ width: "300px" }}
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>
    </div>
  );
};

export default NavBar;
