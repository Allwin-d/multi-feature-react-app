import React from "react";

const Search = (props) => {
  return (
    <div className="flex flex-row place-content-evenly mt-10">
      <input
        className="ml-24 text-2xl text-center font-semibold border-4 border-black rounded-2xl"
        type="text"
        placeholder="Search place"
        value={props.search} // FIXED: Changed from props.Search to props.search
        onChange={props.originalValue}
      />
      <button
        type="submit"
        onClick={props.handleSearch} // API call happens on button click
        className="rounded-lg p-3 text-center text-white bg-black px-14 mr-80 cursor-pointer hover:bg-red-600 hover:text-black font-semibold"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
