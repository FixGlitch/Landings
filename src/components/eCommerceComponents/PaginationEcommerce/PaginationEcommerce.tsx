import { sweatshirtData } from "../Cards/ProductCardEcommerce/customs/productcustoms";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationEcommerce = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = [...Array(totalPages)].map((_, index) => index + 1);

  return (
    <div className="mt-8 flex justify-center space-x-2">
      <button
        className="px-3 py-1 font-semibold text-sm text-black cursor-pointer"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-3 py-1 border-2 border-gray text-black  rounded-lg ${
            currentPage === page
              ? "bg-ecommerce-100 text-ecommerce-500 border-2 border-ecommerce-200 font-bold"
              : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="px-3 py-1 font-semibold text-sm text-black cursor-pointer"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages || (currentPage * 9) >= sweatshirtData.length}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationEcommerce;
