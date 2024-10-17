import PantsAndSkirtPage from "./page.client";

export async function generateMetadata() {
  return {
    title: "Pants And Skirt",
    description:
      "Check out our collection of stylish pants and skirts for all tastes.",
    keywords: "pants, skirts, clothing, fashion, ecommerce, casual wear",
  };
}

const PantsAndSkirt = () => {
  return (
    <div>
      <PantsAndSkirtPage />
    </div>
  );
};

export default PantsAndSkirt;
