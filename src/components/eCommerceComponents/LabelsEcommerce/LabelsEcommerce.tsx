import { useState } from "react";

const LabelsEcommerce = () => {
  const initialLabels = [
    { id: 1, name: "Oversize", visible: true },
    { id: 2, name: "Multicolour", visible: true },
    { id: 3, name: "XXL", visible: true },
  ];

  const [labels, setLabels] = useState(initialLabels);

  const handleClose = (id: number) => {
    setLabels((prevLabels) =>
      prevLabels.map((label) =>
        label.id === id ? { ...label, visible: false } : label
      )
    );
  };

  return (
    <div className="flex space-x-2">
      {labels.map(
        (label) =>
          label.visible && (
            <div
              key={label.id}
              className="flex items-center px-4 py-1 bg-gray/50 rounded-lg text-black text-sm cursor-pointer"
            >
              {label.name}
              <button
                className="ml-2 text-black text-xl hover:text-ecommerce-500 focus:outline-none"
                onClick={() => handleClose(label.id)}
              >
                &times;
              </button>
            </div>
          )
      )}
    </div>
  );
};

export default LabelsEcommerce;
