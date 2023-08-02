import { useState } from "react";

const NavBar = ({ onSearch, loading }) => {
  const [query, setQuery] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (query.trim() === "") {
      return setFormError("Please type anything to search");
    }

    onSearch(query);
  };

  return (
    <div className="flex justify-between bg-neutral-400 py-5 px-2 rounded-sm">
      <h1 className="font-bold text-center flex items-center text-white">Search Target.com</h1>
      <form onSubmit={handleSubmit} className="flex items-center">
        <div className="flex flex-col">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setFormError("");
            }}
            className={`border p-2 mr-2 rounded-md ${formError ? "border-red-500 mt-4" : ""}`}
            placeholder="Type to search"
            style={{ width: "300px" }}
          />

          <span className="text-red-500 text-sm text-left px-2">{formError}</span>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default NavBar;
