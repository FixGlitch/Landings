"use client";

import Navbar from "@/components/eCommerceComponents/NavbarEcommerce/NavbarEcommerce";
import Sidebar from "@/components/eCommerceComponents/SidebarEcommerce/SideBarEcommerce";
import { useState } from "react";

const ECommercePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        <div className={`transition-all duration-300 ${sidebarOpen ? "w-64" : "w-0"} flex-shrink-0`}>
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <div className="bg-white relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main className="flex-1 p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Sweatshirt</h2>

              <div className="relative">
                <select className="appearance-none border rounded p-2 pr-8">
                  <option>Sort by: Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border rounded-lg p-4">
                  <div className="bg-gray-200 h-48 mb-4 relative">
                    {i === 0 && (
                      <span className="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">
                        NEW
                      </span>
                    )}
                    {i === 2 && (
                      <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                        BEST SELLER
                      </span>
                    )}
                    {i === 3 && (
                      <span className="absolute top-2 left-2 bg-yellow-600 text-white text-xs px-2 py-1 rounded">
                        HOT PROMO
                      </span>
                    )}
                  </div>
                  <h3 className="font-medium mb-2">Product Name {i + 1}</h3>
                  <div className="flex justify-between items-center">
                    <span className="font-bold">$200</span>
                    <button className="bg-indigo-600 text-white p-2 rounded">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center space-x-2">
              <button className="px-3 py-1 border rounded">Previous</button>
              <button className="px-3 py-1 border rounded bg-gray-200">1</button>
              <button className="px-3 py-1 border rounded">2</button>
              <button className="px-3 py-1 border rounded bg-indigo-600 text-white">3</button>
              <button className="px-3 py-1 border rounded">4</button>
              <button className="px-3 py-1 border rounded">Next</button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ECommercePage;
