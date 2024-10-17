import Image from "next/image";
import { ShoppingCart } from "lucide-react";

interface HotSaleCardProps {
  imageSrc: string;
  productName: string;
  price: number;
  isHotSale?: boolean;
}

const HotSaleCardEcommerce = ({
  imageSrc,
  productName,
  price,
  isHotSale = false,
}: HotSaleCardProps) => {
  return (
    <div className="border rounded-xl">
      <div className="relative w-full h-75 mb-4">
        {isHotSale && (
          <span className="absolute top-3 left-3 bg-ecommerce-200 z-20 text-ecommerce-500 text-xs font-bold px-3 py-2 rounded-lg">
            HOT SALE
          </span>
        )}
        <Image
          src={imageSrc}
          alt={productName}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl object-top"
        />
      </div>
      <div className="px-4 pb-4">
        <h3 className="font-bold text-md mb-2 text-black">{productName}</h3>
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="font-semibold text-sm text-gray">Price</p>
            <span className="font-bold text-md text-black">${price}</span>
          </div>
          <button className="bg-ecommerce-500 text-white p-3 rounded">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotSaleCardEcommerce;
