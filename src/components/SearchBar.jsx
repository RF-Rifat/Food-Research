import React from "react";

function SearchBar({ search, setSearch, fetchFood }) {
  return (
    <div className="py-10">
      <div className="grid place-items-center">
        <div className="join">
          <input
            type="text"
            value={search}
            placeholder="Search your food"
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered join-item"
          />
          <button onClick={fetchFood} className="btn join-item">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
