"use client";

import { useState } from "react";
import Breadcrumb from "@/components/common/BreadCrumb";
import LabelsEcommerce from "@/components/EcommerceComponents/LabelsEcommerce/LabelsEcommerce";
import ProductCardEcommerce from "@/components/EcommerceComponents/ProductCardEcommerce/ProductCardEcommerce";
import PaginationEcommerce from "@/components/EcommerceComponents/PaginationEcommerce/PaginationEcommerce";

const SweatshritPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="bg-white relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <main className="flex-1 p-6 overflow-y-auto lg:mx-auto lg:w-1/2 no-scrollbar">
          <Breadcrumb
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <div className="flex lg:flex-row flex-col justify-start lg:justify-between items-start lg:items-center pt-10 pb-5">
            <h2 className="text-3xl font-extrabold text-black pb-5 lg:pb-0">
              Sweatshirt
            </h2>
            <div className="relative w-3/12">
              <select className="appearance-none w-full p-4 pr-10 border-gray rounded-lg bg-white text-black shadow-md transition duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ecommerce-300 focus:ring-opacity-50 border">
                <option>Sort by: Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 6H3"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 12H3"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18H3"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="pb-15">
            <LabelsEcommerce />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <ProductCardEcommerce
                key={i}
                imageSrc={`/ecommerce/item-${i + 1}.jpg`}
                productName={`Product Name ${i + 1}`}
                price={200}
                isNew={i === 0 || i === 4 || i === 7}
                isBestSeller={i === 2}
                isHotPromo={i === 3 || i === 6}
              />
            ))}
          </div>
          <PaginationEcommerce
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </main>
      </div>
    </div>
  );
};

export default SweatshritPage;
