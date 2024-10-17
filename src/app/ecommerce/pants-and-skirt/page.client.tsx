"use client";

import React, { useState, useMemo } from "react";
import ProductCardEcommerce from "@/components/EcommerceComponents/Cards/ProductCardEcommerce/ProductCardEcommerce";
import PaginationEcommerce from "@/components/EcommerceComponents/PaginationEcommerce/PaginationEcommerce";
import {
  Product,
  pantsandskirtData,
} from "@/components/EcommerceComponents/Cards/ProductCardEcommerce/customs/productcustoms";

const ProductList = React.memo(({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((pantsandskirt) => (
        <ProductCardEcommerce
          key={pantsandskirt.id}
          imageSrc={pantsandskirt.imageSrc}
          productName={pantsandskirt.productName}
          price={pantsandskirt.price}
          isNew={pantsandskirt.isNew}
          isBestSeller={pantsandskirt.isBestSeller}
          isHotPromo={pantsandskirt.isHotPromo}
          isFavorite={pantsandskirt.isFavorite}
        />
      ))}
    </div>
  );
});

const PantsAndSkirtPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(pantsandskirtData.length / itemsPerPage);
  const currentPantsAndSkirt = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return pantsandskirtData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="bg-white relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <main className="flex-1 py-6 overflow-y-auto lg:mx-auto lg:w-1/2 no-scrollbar">
          <section aria-label="Available Products">
            <ProductList products={currentPantsAndSkirt} />
          </section>
          <footer>
            <PaginationEcommerce
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              aria-label="Pagination controls"
            />
          </footer>
        </main>
      </div>
    </div>
  );
};

export default PantsAndSkirtPage;
