import Image from "next/image";
import { Heart, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  imageSrc: string;
  productName: string;
  price: number;
  isNew?: boolean;
  isBestSeller?: boolean;
  isHotPromo?: boolean;
  isFavorite?: boolean;
}

const ProductCardEcommerce = ({
  imageSrc,
  productName,
  price,
  isNew = false,
  isBestSeller = false,
  isHotPromo = false,
  isFavorite = false,
}: ProductCardProps) => {
  return (
    <div className="border rounded-xl">
      <div className="relative w-full h-75 mb-4">
        {isNew && (
          <span className="absolute top-3 left-3 bg-ecommerce-200 z-20 text-ecommerce-500 text-xs font-bold px-3 py-2 rounded-lg">
            NEW
          </span>
        )}
        {isBestSeller && (
          <span className="absolute top-3 left-3 bg-ecommerce-200 z-20 text-ecommerce-500 text-xs font-bold px-3 py-2 rounded-lg">
            BEST SELLER
          </span>
        )}
        {isHotPromo && (
          <span className="absolute top-3 left-3 bg-ecommerce-200 z-20 text-ecommerce-500 text-xs font-bold px-3 py-2 rounded-lg">
            HOT PROMO
          </span>
        )}
        {isFavorite && (
          <span className="absolute top-3 right-3 z-20 text-gray text-xs font-bold px-3 py-2 rounded-lg cursor-pointer">
            <Heart/>
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

export default ProductCardEcommerce;
