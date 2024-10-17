"use client";

import { useState } from "react";
import ProductCardEcommerce from "@/components/EcommerceComponents/Cards/ProductCardEcommerce/ProductCardEcommerce";
import LabelsEcommerce from "@/components/EcommerceComponents/LabelsEcommerce/LabelsEcommerce";
import PaginationEcommerce from "@/components/EcommerceComponents/PaginationEcommerce/PaginationEcommerce";
import { tShirtData } from "@/components/EcommerceComponents/Cards/ProductCardEcommerce/customs/productcustoms";
import PageTitleEcommerce from "@/components/EcommerceComponents/PageTitleEcommerce/PageTitleEcommerce";

const TshirtPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="bg-white relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <main className="flex-1 p-6 overflow-y-auto lg:mx-auto lg:w-1/2 no-scrollbar">
          <div className="flex lg:flex-row flex-col justify-start lg:justify-between items-start lg:items-center pt-10 pb-5">
            <PageTitleEcommerce />
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
            {tShirtData.map((tshirt, i) => (
              <ProductCardEcommerce
                key={i}
                imageSrc={tshirt.imageSrc}
                productName={tshirt.productName}
                price={tshirt.price}
                isNew={tshirt.isNew}
                isBestSeller={tshirt.isBestSeller}
                isHotPromo={tshirt.isHotPromo}
                isFavorite={tshirt.isFavorite}
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

export default TshirtPage;
