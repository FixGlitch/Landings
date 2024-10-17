"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbEcommerceProps {
  sidebarOpen: boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}

const BreadcrumbEcommerce = React.memo(
  ({ sidebarOpen, setSidebarOpen }: BreadcrumbEcommerceProps) => {
    const pathname = usePathname();
    const pathSegments = pathname.split("/").filter((segment) => segment);

    return (
      <nav aria-label="Breadcrumb navigation">
        <ol className="flex flex-wrap items-end gap-3">
          <li className="flex flex-row gap-2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 22V12H15V22"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Link
              className="flex items-center gap-3.5 font-bold text-black hover:text-ecommerce-500"
              href="/ecommerce"
            >
              Main Page
            </Link>
            <button
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              onClick={(e) => {
                e.stopPropagation();
                setSidebarOpen(!sidebarOpen);
              }}
              className="flex items-center gap-3 font-medium"
            >
              <svg
                className="fill-current"
                width="8"
                height="16"
                viewBox="0 0 8 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.819531 15.1156C0.650781 15.1156 0.510156 15.0593 0.369531 14.9468C0.116406 14.6937 0.116406 14.3 0.369531 14.0468L6.27578 7.99995L0.369531 1.9812C0.116406 1.72808 0.116406 1.33433 0.369531 1.0812C0.622656 0.828076 1.01641 0.828076 1.26953 1.0812L7.62578 7.54995C7.87891 7.80308 7.87891 8.19683 7.62578 8.44995L1.26953 14.9187C1.15703 15.0312 0.988281 15.1156 0.819531 15.1156Z"
                  fill=""
                />
              </svg>
              <span className="font-bold text-gray hover:text-ecommerce-500">
                Category
              </span>
            </button>
          </li>
          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
            return segment !== "ecommerce" ? (
              <li key={index}>
                <Link
                  className="flex items-center gap-3 font-medium"
                  href={href}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (segment === "category") {
                      setSidebarOpen(!sidebarOpen);
                    }
                  }}
                >
                  <svg
                    className="fill-current"
                    width="8"
                    height="16"
                    viewBox="0 0 8 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.819531 15.1156C0.650781 15.1156 0.510156 15.0593 0.369531 14.9468C0.116406 14.6937 0.116406 14.3 0.369531 14.0468L6.27578 7.99995L0.369531 1.9812C0.116406 1.72808 0.116406 1.33433 0.369531 1.0812C0.622656 0.828076 1.01641 0.828076 1.26953 1.0812L7.62578 7.54995C7.87891 7.80308 7.87891 8.19683 7.62578 8.44995L1.26953 14.9187C1.15703 15.0312 0.988281 15.1156 0.819531 15.1156Z"
                      fill=""
                    />
                  </svg>
                  <span className="font-bold text-gray hover:text-ecommerce-500">
                    {segment.charAt(0).toUpperCase() + segment.slice(1)}
                  </span>
                </Link>
              </li>
            ) : null;
          })}
        </ol>
      </nav>
    );
  }
);

export default BreadcrumbEcommerce;
