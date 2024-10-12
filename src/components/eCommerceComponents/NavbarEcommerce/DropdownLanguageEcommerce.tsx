import { useState, useRef, useEffect } from "react";

const GlobeIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12H22"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DropdownLanguageEcommerce = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="text-sm text-black hover:text-ecommerce-500 font-semibold hover:font-bold flex items-center gap-2 p-4 rounded-lg hover:bg-ecommerce-100 focus:outline-none focus:ring-2 focus:ring-ecommerce-500 focus:ring-opacity-50 "
        onClick={toggleDropdown}
      >
        ENG <GlobeIcon />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-23.5">
          <button className="block w-full p-4 bg-ecommerce-100 rounded-t-lg text-sm text-black hover:text-ecommerce-500 font-semibold hover:font-bold hover:bg-ecommerce-50 focus:outline-none focus:ring-2 focus:ring-ecommerce-500 focus:ring-opacity-50">
            English
          </button>
          <button className="block w-full p-4 bg-ecommerce-100 rounded-b-lg text-sm text-black hover:text-ecommerce-500 font-semibold hover:font-bold hover:bg-ecommerce-50 focus:outline-none focus:ring-2 focus:ring-ecommerce-500 focus:ring-opacity-50 ">
            Español
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownLanguageEcommerce;
