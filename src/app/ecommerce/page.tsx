import CarouselEcommerce from "@/components/EcommerceComponents/CarouselEcommerce/CarouselEcommerce";
import HotSaleCardEcommerce from "@/components/EcommerceComponents/HotSaleCardEcommerce/HotSaleCardEcommerce";
import { spotData } from "@/components/EcommerceComponents/SpotCardEcommerce/customs/spotcustoms";
import SpotCardEcommerce from "@/components/EcommerceComponents/SpotCardEcommerce/SpotCardEcommerce";

export const metadata = { title: "Ecommerce" };

const ECommerceHomePage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <main className="flex-1 overflow-y-auto lg:mx-auto lg:w-1/2 no-scrollbar">
        <CarouselEcommerce />
        <div className="w-3/5 mx-auto py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {spotData.map((spot, i) => (
              <SpotCardEcommerce
                key={i}
                imageSrc={spot.imageSrc}
                title={spot.title}
                subTitle={spot.subTitle}
                href={spot.href}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2 mx-auto py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <HotSaleCardEcommerce
                key={i}
                imageSrc={`/ecommerce/landing/hot-sale-${i + 1}.jpg`}
                productName={`Product Name ${i + 1}`}
                price={200}
                isHotSale={true}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
export default ECommerceHomePage;
