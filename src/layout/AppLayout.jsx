import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    const trimmed = keyword.trim();
    trimmed ? navigate(`/movies?q=${keyword}`) : navigate("/movies");
  };

  return (
    <div>
      <div className="flex items-center justify-between bg-[rgb(16,16,16)] p-2 bg-gradient-to-b from-transparent to-[(20,20,20)]">
        <div className="flex items-center space-x-2  sm:space-x-6">
          <img
            src={logo}
            className="max-w-24 sm:ml-10"
            onClick={() => {
              navigate("/");
            }}
          />
          {/* <button
            className="text-white"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button> */}
          <button
            className="text-white"
            onClick={() => {
              navigate("/movies");
            }}
          >
            Movies
          </button>
        </div>

        <div>
          <form
            className="flex items-center space-x-2 pr-4"
            onSubmit={searchByKeyword}
          >
            <input
              placeholder="Search"
              className="bg-[rgb(3,3,3)] border border-white rounded placeholder:text-sm p-0.5 pl-2 w-36 sm:w-60 h-9 focus:outline-none"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
            />
            <button type="submit">
              <Search className="w-0 h-0 sm:w-6 sm:h-6" />
            </button>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
