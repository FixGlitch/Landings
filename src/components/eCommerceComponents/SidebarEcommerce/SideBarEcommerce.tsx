"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Trash } from "lucide-react";
import SidebarLinkGroup from "@/components/Sidebar/SidebarComponents/SidebarLInkGroup";
import Separator from "@/components/common/Separator";
import {
  colorsItems,
  ecommerceItems,
  priceFilter,
  sizeItems,
  typeItems,
} from "./types/ecommerceItems";

interface SidebarEcommerceProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const SidebarEcommerce = ({
  sidebarOpen,
  setSidebarOpen,
}: SidebarEcommerceProps) => {
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(false);

  useEffect(() => {
    const storedExpandedState =
      localStorage.getItem("sidebar-expanded") === "true";
    setSidebarExpanded(storedExpandedState);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
      document.body.classList.toggle("sidebar-expanded", sidebarExpanded);
    }
  }, [sidebarExpanded]);

  const closeSidebar = useCallback(
    (event: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;

      if (
        sidebarOpen &&
        !sidebar.current.contains(event.target as Node) &&
        !trigger.current.contains(event.target as Node)
      ) {
        setSidebarOpen(false);
      }
    },
    [sidebarOpen, setSidebarOpen]
  );

  const closeOnEsc = useCallback(
    (event: KeyboardEvent) => {
      if (sidebarOpen && event.key === "Escape") {
        setSidebarOpen(false);
      }
    },
    [sidebarOpen, setSidebarOpen]
  );

  useEffect(() => {
    document.addEventListener("click", closeSidebar);
    document.addEventListener("keydown", closeOnEsc);

    return () => {
      document.removeEventListener("click", closeSidebar);
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, [closeSidebar, closeOnEsc]);

  return (
    <>
      <aside
        ref={sidebar}
        className={`absolute left-0 top-0 z-40 flex h-screen w-64 flex-col overflow-y-hidden border-r-2 border-gray bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-row-reverse items-center justify-between gap-2 mx-10 py-10">
          <button
            ref={trigger}
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
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
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 8L8 12L12 16"
                stroke="#6438e2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 12H8"
                stroke="#6438e2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <h1 className="ml-10 text-black text-4xl md:text-xl font-bold">
            Logo
          </h1>
        </div>
        <Separator fullWidth />
        <h2 className="text-black text-xl font-bold p-6">Category</h2>
        <ul className="mb-6 flex flex-col gap-1.5">
          {ecommerceItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`group relative flex items-center gap-2.5 rounded-md mx-10 py-2 font-medium text-black hover:font-semibold duration-300 ease-in-out hover:text-ecommerce-500 ${
                  pathname === item.href ? "text-ecommerce-500 font-semibold " : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <Separator />
        <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
          <nav>
            <h2 className="text-black font-semibold p-6">Filter by:</h2>
            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={pathname === "/" || pathname.includes("type")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-md mx-5 px-4 py-2 text-black font-semibold  ${
                          (pathname === "/" || pathname.includes("type")) && ""
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
                        Type:
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
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          {typeItems.map((item) => (
                            <li key={item.value}>
                              <label className="text-black hover:text-ecommerce-500 hover:font-bold mx-5 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="mr-2"
                                  value={item.value}
                                />
                                {item.label}
                              </label>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={
                  pathname === "/" || pathname.includes("colour")
                }
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-md mx-5 px-4 py-2 text-black font-semibold  ${
                          (pathname === "/" || pathname.includes("colour")) &&
                          ""
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
                        Colour:
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
                      {open && (
                        <div
                          className={`translate transform overflow-hidden ${
                            !open && "hidden"
                          }`}
                        >
                          <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                            {colorsItems.map((item) => (
                              <li key={item.value}>
                                <label className="text-black hover:text-ecommerce-500 hover:font-bold mx-5 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="mr-2"
                                    value={item.value}
                                  />
                                  {item.label}
                                </label>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={pathname === "/" || pathname.includes("size")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-md mx-5 px-4 py-2 text-black font-semibold  ${
                          (pathname === "/" || pathname.includes("size")) && ""
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
                        Size:
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
                      {open && (
                        <div
                          className={`translate transform overflow-hidden ${
                            !open && "hidden"
                          }`}
                        >
                          <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                            {sizeItems.map((item) => (
                              <li key={item.value}>
                                <label className="text-black hover:text-ecommerce-500 hover:font-bold mx-5 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    className="mr-2"
                                    value={item.value}
                                  />
                                  {item.label}
                                </label>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup
                activeCondition={pathname === "/" || pathname.includes("price")}
              >
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="#"
                        className={`group relative flex items-center gap-2.5 rounded-md mx-5 px-4 py-2 text-black font-semibold  ${
                          (pathname === "/" || pathname.includes("price")) && ""
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
                        Price:
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
                      {open && (
                        <div
                          className={`translate transform overflow-hidden ${
                            !open && "hidden"
                          }`}
                        >
                          <div className="my-4 flex flex-col gap-1.5 mx-5">
                            <input
                              type="range"
                              className="w-full"
                              min="0"
                              max="1000"
                              step="10"
                            />
                            <div className="flex justify-between text-black mx-5">
                              <span>${priceFilter.min}</span>
                              <span>${priceFilter.max}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </nav>
        </div>
        <div className="bg-white flex items-center justify-between py-10 mx-5 mt-auto">
          <button className="w-[60%] bg-ecommerce-500 text-white font-semibold p-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-ecommerce-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ecommerce-400 focus:ring-opacity-50">
            Apply
          </button>

          <button className="p-4 rounded-lg border border-ecommerce-900 shadow-md transition duration-300 ease-in-out transform hover:bg-danger-secondaryHover hover:scale-105 hover:border-danger-primary focus:outline-none focus:ring-2 focus:ring-danger-primary focus:ring-opacity-50">
            <Trash
              color="#311a5b"
              size={20}
              className="hover:stroke-danger-primary transition duration-300 ease-in-out"
            />
          </button>
        </div>
      </aside>
    </>
  );
};

export default SidebarEcommerce;
