interface SeparatorProps {
  fullWidth?: boolean;
}

const SeparatorEcommerce = ({ fullWidth = false }: SeparatorProps) => {
  return (
    <div
      className={`mx-auto border-b-2 border-gray ${
        fullWidth ? "w-full" : "w-[80%]"
      }`}
    ></div>
  );
};

export default SeparatorEcommerce;
