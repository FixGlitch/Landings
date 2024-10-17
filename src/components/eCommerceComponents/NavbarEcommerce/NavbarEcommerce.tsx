"use client";

import { Heart, ShoppingCart, User, Search } from "lucide-react";
import DropdownLanguageEcommerce from "./DropdownLanguageEcommerce";

const NavbarEcommerce = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-20 flex w-full bg-white border-b-2 border-gray">
      <div className="container bg-white mx-auto px-4 py-7.5 flex flex-wrap items-center justify-between">
        <div className="flex items-center  w-[30%] gap-2 sm:gap-4">
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
                stroke="#6438e2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 16L16 12L12 8"
                stroke="#6438e2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="#6438e2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="ml-10 text-black text-4xl md:text-xl font-bold lg:hidden">
            Logo
          </h1>
          <div className="flex-1 w-full mt-4 sm:mt-0 max-w-full sm:max-w-md lg:max-w-xl px-4 relative">
            <input
              type="search"
              placeholder="Search among 100+ products"
              className="w-full p-4 pl-10 border border-gray rounded-lg bg-gray/20 text-black shadow-md transition duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ecommerce-300 focus:ring-opacity-50"
            />
            <Search
              className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray"
              size={20}
            />
          </div>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4 mt-4 sm:mt-0">
          <DropdownLanguageEcommerce />
          <button className="flex flex-row text-sm p-4 bg-ecommerce-100 gap-2 rounded-lg text-black hover:text-ecommerce-500 font-semibold hover:font-bold hover:bg-ecommerce-50 focus:outline-none focus:ring-2 focus:ring-ecommerce-500 focus:ring-opacity-50">
            Wishlist
            <Heart size={20} />
          </button>
          <button className="flex flex-row text-sm p-4 bg-ecommerce-100 gap-2 rounded-lg text-black hover:text-ecommerce-500 font-semibold hover:font-bold hover:bg-ecommerce-50 focus:outline-none focus:ring-2 focus:ring-ecommerce-500 focus:ring-opacity-50">
            Your Cart
            <ShoppingCart size={20} />
          </button>
          <button className="flex flex-row text-sm p-4 bg-ecommerce-100 gap-2 rounded-lg text-black hover:text-ecommerce-500 font-semibold hover:font-bold hover:bg-ecommerce-50 focus:outline-none focus:ring-2 focus:ring-ecommerce-500 focus:ring-opacity-50">
            <User size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavbarEcommerce;
