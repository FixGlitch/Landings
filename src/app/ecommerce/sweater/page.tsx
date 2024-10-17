import SweaterPage from "./page.client";

export async function generateMetadata() {
  return {
    title: "Sweater",
    description:
      "Browse through our selection of cozy and fashionable sweaters for any occasion.",
    keywords: "sweaters, clothing, fashion, winter wear, ecommerce",
  };
}

const Sweater = () => {
  return (
    <div>
      <SweaterPage />
    </div>
  );
};

export default Sweater;
