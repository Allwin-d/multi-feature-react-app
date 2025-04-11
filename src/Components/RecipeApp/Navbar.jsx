import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "./Context";

const Navbar = () => {
  const { search, SetSearch, handleSubmit } = useContext(GlobalContext);

  return (
    <div className="">
      <ul className="flex flex-row mx-auto mt-4 ml-4 mr-4 items-center justify-evenly bg-blue-700 p-4 rounded-lg md:">
        <li>
          <NavLink
            to={"/"}
            className="text-white text-3xl hover:text-4xl duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Favorites"}
            className="text-white text-3xl  hover:text-4xl duration-700"
          >
            Favorites
          </NavLink>
        </li>
        <div>
          <input
            type="text"
            placeholder="Search Recipe"
            value={search}
            onChange={(event) => {
              SetSearch(event.target.value);
            }}
            className="p-2 text-center font-semibold text-2xl"
          ></input>
          <button
            onClick={handleSubmit}
            className="ml-5 rounded-lg p-2 text-white bg-red-500 hover:bg-red-600 font-semibold text-2xl"
          >
            Search
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
