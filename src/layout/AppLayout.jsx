import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/images/Netflix_Logo.png";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AppLayout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex items-center justify-between bg-[rgb(16,16,16)] p-2 bg-gradient-to-b from-transparent to-[(20,20,20)]">
        <div className="flex items-center space-x-6">
          <img src={logo} className="max-w-24" />
          <button
            className="text-white"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </button>
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
          <form className="flex items-center space-x-2 pr-4">
            <input
              placeholder="Search"
              className="border-2 border-red-600 rounded placeholder:text-sm p-0.5 pl-2 w-40"
            />
            <button className="text-white">
              <Search className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
