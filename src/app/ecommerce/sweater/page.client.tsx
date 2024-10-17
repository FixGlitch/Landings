"use client";

import React, { useState, useMemo } from "react";
import ProductCardEcommerce from "@/components/EcommerceComponents/Cards/ProductCardEcommerce/ProductCardEcommerce";
import PaginationEcommerce from "@/components/EcommerceComponents/PaginationEcommerce/PaginationEcommerce";
import {
  Product,
  sweaterData,
} from "@/components/EcommerceComponents/Cards/ProductCardEcommerce/customs/productcustoms";

const ProductList = React.memo(({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((sweater) => (
        <ProductCardEcommerce
          key={sweater.id}
          imageSrc={sweater.imageSrc}
          productName={sweater.productName}
          price={sweater.price}
          isNew={sweater.isNew}
          isBestSeller={sweater.isBestSeller}
          isHotPromo={sweater.isHotPromo}
          isFavorite={sweater.isFavorite}
        />
      ))}
    </div>
  );
});

const SweaterPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(sweaterData.length / itemsPerPage);
  const currentSweater = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sweaterData.slice(startIndex, startIndex + itemsPerPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex-1 py-6 overflow-y-auto lg:mx-auto lg:w-1/2 no-scrollbar">
      <main className="flex-1 py-6">
        <section aria-label="Available Products">
          <ProductList products={currentSweater} />
        </section>
      </main>
      <footer>
        <PaginationEcommerce
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          aria-label="Pagination controls"
        />
      </footer>
    </div>
  );
};

export default SweaterPage;
