import StuffAndAccessoriesPage from "./page.client";

export async function generateMetadata() {
  return {
    title: "Stuff And Accessories",
    description:
      "Explore a variety of accessories and other items to complement your style.",
    keywords: "accessories, fashion, ecommerce, bags, jewelry, hats",
  };
}

const StuffAndAccessories = () => {
  return (
    <div>
      <StuffAndAccessoriesPage />
    </div>
  );
};

export default StuffAndAccessories;
