const FilterEcommerce = () => {
  return (
    <div className="relative w-1/3">
      <select className="appearance-none w-full p-4 pr-10 border-gray rounded-lg bg-gray/20 text-gray shadow-md transition duration-300 ease-in-out hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ecommerce-300 focus:ring-opacity-50 border">
        <option className="text-gray bg-gray/20 w-4">
          Sort by: Most Popular
        </option>
        <option className="text-gray bg-gray/20 w-4">Price: Low to High</option>
        <option className="text-gray bg-gray/20 w-4">Price: High to Low</option>
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
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15 12H3"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 18H3"
          stroke="gray"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default FilterEcommerce;
