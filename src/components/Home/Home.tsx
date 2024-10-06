import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen px-4 lg:px-0">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-aquamarine-950 font-black mb-4">
        Welcome!
      </h1>
      <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl text-aquamarine-950 font-black mb-6 text-center">
        Explore My Front-End Projects
      </h2>
      <button
        className="bg-aquamarine-500 mt-4 text-center w-full sm:w-64 md:w-80 lg:w-90 rounded-2xl h-14 relative text-white text-xl font-semibold group"
        type="button"
        onClick={toggleSidebar}
      >
        <div className="bg-aquamarine-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[350px] lg:group-hover:w-[351px] z-10 duration-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            height="25px"
            width="25px"
          >
            <path
              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
              fill="#ffffff"
            ></path>
            <path
              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
        <p className="translate-x-10 text-sm md:text-lg text-white font-black">
          Take a Look Around
        </p>
      </button>
      <Sidebar sidebarOpen={isSidebarOpen} setSidebarOpen={setIsSidebarOpen} />
    </section>
  );
};

export default HomePage;
