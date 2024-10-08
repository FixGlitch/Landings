"use client";
import { Heart, ShoppingCart, User, Search, ChevronDown } from "lucide-react";

const NavbarEcommerce = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-20 flex w-full bg-white drop-shadow-1 border-b-2 border-aquamarine-900">
      <div className="container bg-white mx-auto px-4 py-7.5 flex flex-wrap items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="bg-white shadow-md rounded-md p-[7px]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#1C4E5D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16L16 12L12 8"
                stroke="#1C4E5D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="#1C4E5D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <h1 className="ml-10 text-aquamarine-900 text-4xl md:text-xl font-bold">
            Logo
          </h1>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-indigo-600"></div>
        </div>

        <div className="flex-1 w-full mt-4 sm:mt-0 max-w-full sm:max-w-md lg:max-w-xl px-4 relative">
          <input
            type="search"
            placeholder="Search among 100+ products"
            className="w-full p-2 pl-10 border rounded"
          />
          <Search
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0">
          <button className="p-2 text-sm">
            ENG <ChevronDown size={16} className="inline" />
          </button>
          <button className="p-2">
            <Heart size={20} />
          </button>
          <button className="p-2">
            <ShoppingCart size={20} />
          </button>
          <button className="p-2">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarEcommerce;
