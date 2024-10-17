import { spotData } from "@/components/EcommerceComponents/Cards/SpotCardEcommerce/customs/spotcustoms";
import CarouselEcommerce from "@/components/EcommerceComponents/CarouselEcommerce/CarouselEcommerce";
import HotSaleCardEcommerce from "@/components/EcommerceComponents/Cards/HotSaleCardEcommerce/HotSaleCardEcommerce";
import SpotCardEcommerce from "@/components/EcommerceComponents/Cards/SpotCardEcommerce/SpotCardEcommerce";

export const metadata = {
  title: "Ecommerce - Discover Latest Fashion & Accessories",
  description:
    "Explore our vast collection of fashion items, including t-shirts, dresses, accessories, and more. Shop now and take advantage of hot sales and promotions!",
  keywords:
    "ecommerce, fashion, clothing, accessories, sales, hot deals, t-shirts, dresses, modern fashion, online shopping",
  openGraph: {
    title: "Ecommerce - Your Fashion Destination",
    description:
      "Shop the latest trends in clothing and accessories at unbeatable prices. Discover our hot sales and featured products today!",
    url: "",
    type: "website",
    images: [
      {
        url: "/images/ecommerce-banner.jpg",
        alt: "Ecommerce fashion banner",
      },
    ],
  },
};

const ECommerceHomePage = () => {
  return (
    <main>
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
  );
};
export default ECommerceHomePage;
