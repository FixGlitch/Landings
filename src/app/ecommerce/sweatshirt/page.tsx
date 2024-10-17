import SweatshirtPage from "./page.client";

export async function generateMetadata() {
  return {
    title: "Sweatshirt",
    description:
      "Explore our wide collection of modern and stylish sweatshirts.",
    keywords: "sweatshirts, clothing, fashion, ecommerce, promotions",
  };
}

const Sweatshirt = () => {
  return (
    <div>
      <SweatshirtPage />
    </div>
  );
};

export default Sweatshirt;
