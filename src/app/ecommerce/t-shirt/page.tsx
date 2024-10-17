import TshirtPage from "./page.client";

export async function generateMetadata() {
  return {
    title: "T-Shirt",
    description:
      "Discover our range of comfortable and trendy t-shirts for all occasions.",
    keywords: "t-shirts, clothing, fashion, ecommerce, casual wear",
  };
}

const Tshirt = () => {
  return (
    <div>
      <TshirtPage />
    </div>
  );
};

export default Tshirt;
