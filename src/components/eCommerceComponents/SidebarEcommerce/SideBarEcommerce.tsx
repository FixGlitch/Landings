"use client";

import Separator from "@/components/common/Separator";
import SidebarLinkGroup from "@/components/Sidebar/SidebarComponents/SidebarLInkGroup";
import { Trash } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SidebarEcommerce = () => {
  const pathname = usePathname();
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
      document.body.classList.toggle("sidebar-expanded", sidebarExpanded);
    }
  }, [sidebarExpanded]);

  return (
    <>
      <aside className="bg-white w-64 border-r-aquamarine-950 border-[0.5px] fixed left-0 top-0 z-40 h-screen">
        <div className="flex items-center justify-center gap-2 px-4 py-9.5">
          <h1 className="text-aquamarine-900 text-4xl md:text-xl font-bold">
            Logo
          </h1>
        </div>
        <Separator />
        <h2 className="text-aquamarine-900 font-semibold p-6">Category</h2>
        <ul className="space-y-2">
          <li>
            <Link
              href="/e-commerce/t-shirt"
              className={`group relative flex items-center gap-2.5 rounded-md mx-10 p-2 font-medium text-primary duration-300 ease-in-out hover:text-aquamarine-300 hover:bg-aquamarine-50 ${
                pathname === "/e-commerce/t-shirt" && "text-primary"
              }`}
            >
              T-Shirt
            </Link>
          </li>
          <li>
            <Link
              href="/e-commerce/sweatshirt"
              className={`group relative flex items-center gap-2.5 rounded-md mx-10 p-2 font-medium text-primary duration-300 ease-in-out hover:text-aquamarine-300 hover:bg-aquamarine-50 ${
                pathname === "/e-commerce/sweatshirt" && "text-primary"
              }`}
            >
              Sweatshirt
            </Link>
          </li>
          <li>
            <Link
              href="/e-commerce/dress"
              className={`group relative flex items-center gap-2.5 rounded-md mx-10 p-2 font-medium text-primary duration-300 ease-in-out hover:text-aquamarine-300 hover:bg-aquamarine-50 ${
                pathname === "/e-commerce/dress" && "text-primary"
              }`}
            >
              Dress
            </Link>
          </li>
          <li>
            <Link
              href="/e-commerce/pants-and-kirt"
              className={`group relative flex items-center gap-2.5 rounded-md mx-10 p-2 font-medium text-primary duration-300 ease-in-out hover:text-aquamarine-300 hover:bg-aquamarine-50 ${
                pathname === "/e-commerce/pants-and-kirt" && "text-primary"
              }`}
            >
              Pants and Skirt
            </Link>
          </li>
          <li>
            <Link
              href="/e-commerce/sweater"
              className={`group relative flex items-center gap-2.5 rounded-md mx-10 p-2 font-medium text-primary duration-300 ease-in-out hover:text-aquamarine-300 hover:bg-aquamarine-50 ${
                pathname === "/e-commerce/sweater" && "text-primary"
              }`}
            >
              Sweater
            </Link>
          </li>
          <li>
            <Link
              href="/e-commerce/stuff-and-accessories"
              className={`group relative flex items-center gap-2.5 rounded-md mx-10 p-2 font-medium text-primary duration-300 ease-in-out hover:text-aquamarine-300 hover:bg-aquamarine-50 ${
                pathname === "/e-commerce/stuff-and-accessories" &&
                "text-primary"
              }`}
            >
              Stuff and Accessories
            </Link>
          </li>
        </ul>
        <ul className="mb-6 flex flex-col gap-1.5">
          <SidebarLinkGroup
            activeCondition={pathname === "/" || pathname.includes("home")}
          >
            {(handleClick, open) => {
              return (
                <React.Fragment>
                  <Link
                    href="#"
                    className={`group relative flex items-center gap-2.5 rounded-md mt-8 px-4 py-2 text-aquamarine-900 font-semibold duration-300 ease-in-out hover:bg-aquamarine-300 ${
                      (pathname === "/" || pathname.includes("home")) &&
                      "bg-aquamarine-100"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      if (sidebarExpanded) {
                        handleClick();
                      } else {
                        setSidebarExpanded(true);
                      }
                    }}
                  >
                    Filter by:
                    <svg
                      className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
                        open && "rotate-180"
                      }`}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                        fill=""
                      />
                    </svg>
                  </Link>
                  <div
                    className={`translate transform overflow-hidden ${
                      !open && "hidden"
                    }`}
                  >
                    <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-4">
                      <li className="">
                        <h3
                          className="text-aquamarine-900 font-semibold cursor-pointer my-2"
                          onClick={handleClick}
                        >
                          - Type -
                        </h3>
                        <label className="text-aquamarine-900 hover:text-aquamarine-300">
                          <input type="checkbox" className="mr-2" />
                          Basic
                        </label>
                      </li>
                      <li>
                        <label className="text-aquamarine-900 hover:text-aquamarine-300">
                          <input type="checkbox" className="mr-2" />
                          Pattern
                        </label>
                      </li>
                      <li>
                        <label className="text-aquamarine-900 hover:text-aquamarine-300">
                          <input type="checkbox" className="mr-2" />
                          Hoodie
                        </label>
                      </li>
                      <li>
                        <label className="text-aquamarine-900 hover:text-aquamarine-300">
                          <input type="checkbox" className="mr-2" />
                          Zipper
                        </label>
                      </li>
                      <li>
                        <label className="text-aquamarine-900 hover:text-aquamarine-300">
                          <input type="checkbox" className="mr-2" checked />
                          Oversize
                        </label>
                      </li>
                    </ul>
                  </div>
                </React.Fragment>
              );
            }}
          </SidebarLinkGroup>
        </ul>

        <div className="space-y-4">
          <SidebarLinkGroup activeCondition={false}>
            {(handleClick, open) => (
              <>
                <h3
                  className="text-aquamarine-900 font-medium mb-2 cursor-pointer"
                  onClick={handleClick}
                >
                  Colour
                </h3>
                {open && (
                  <ul className="space-y-1">
                    <li>
                      <label className="text-aquamarine-900 hover:text-aquamarine-300">
                        <input type="checkbox" className="mr-2" />
                        Black
                      </label>
                    </li>
                    <li>
                      <label className="text-aquamarine-900 hover:text-aquamarine-300">
                        <input type="checkbox" className="mr-2" />
                        Red
                      </label>
                    </li>
                    <li>
                      <label className="text-aquamarine-900 hover:text-aquamarine-300">
                        <input type="checkbox" className="mr-2" />
                        Brown
                      </label>
                    </li>
                    <li>
                      <label className="text-aquamarine-900 hover:text-aquamarine-300">
                        <input type="checkbox" className="mr-2" checked />
                        Multicolour
                      </label>
                    </li>
                    <li>
                      <label className="text-aquamarine-900 hover:text-aquamarine-300">
                        <input type="checkbox" className="mr-2" />
                        Grey
                      </label>
                    </li>
                    <li>
                      <label className="text-aquamarine-900 hover:text-aquamarine-300">
                        <input type="checkbox" className="mr-2" />
                        Blue
                      </label>
                    </li>
                  </ul>
                )}
              </>
            )}
          </SidebarLinkGroup>

          <SidebarLinkGroup activeCondition={false}>
            {(handleClick, open) => (
              <>
                <h3
                  className="text-aquamarine-900 font-medium mb-2 cursor-pointer"
                  onClick={handleClick}
                >
                  Size
                </h3>
                {open && (
                  <ul className="space-y-1">
                    <li>
                      <label className="text-aquamarine-900 hover:text-aquamarine-300">
                        <input type="checkbox" className="mr-2" />S
                      </label>
                    </li>
                    <li>
                      <label className="text-aquamarine-900 hover:text-aquamarine-300">
                        <input type="checkbox" className="mr-2" />M
                      </label>
                    </li>
                    <li>
                      <label className="text-aquamarine-900 hover:text-aquamarine-300">
                        <input type="checkbox" className="mr-2" />L
                      </label>
                    </li>
                    <li>
                      <label className="text-aquamarine-900 hover:text-aquamarine-300">
                        <input type="checkbox" className="mr-2" />
                        XL
                      </label>
                    </li>
                    <li>
                      <label className="text-aquamarine-900 hover:text-aquamarine-300">
                        <input type="checkbox" className="mr-2" />
                        XXL
                      </label>
                    </li>
                  </ul>
                )}
              </>
            )}
          </SidebarLinkGroup>

          <SidebarLinkGroup activeCondition={false}>
            {(handleClick, open) => (
              <>
                <h3
                  className="text-aquamarine-900 font-medium mb-2 cursor-pointer"
                  onClick={handleClick}
                >
                  Price
                </h3>
                {open && (
                  <div className="space-y-2">
                    <input
                      type="range"
                      className="w-full"
                      min="0"
                      max="1000"
                      step="10"
                    />
                    <div className="flex justify-between text-aquamarine-900">
                      <span>$0</span>
                      <span>$1000</span>
                    </div>
                  </div>
                )}
              </>
            )}
          </SidebarLinkGroup>

          <div className="flex items-center justify-between">
            <button className="w-1/2 bg-aquamarine-500 text-primary font-semibold py-2 rounded">
              Apply
            </button>
            <button className="p-2 text-red-600 hover:text-red-800 rounded-md border-aquamarine-900">
              <Trash color="#1C4E5D" size={20} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarEcommerce;
