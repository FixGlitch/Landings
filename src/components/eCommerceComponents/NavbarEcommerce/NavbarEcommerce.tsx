"use client";
import { Heart, ShoppingCart, User, Search, ChevronDown } from "lucide-react";

const NavbarEcommerce = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-8 flex flex-wrap items-center justify-between">
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
