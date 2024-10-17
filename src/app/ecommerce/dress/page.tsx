import DressPage from "./page.client";

export async function generateMetadata() {
  return {
    title: "Dress",
    description:
      "Discover our stunning range of dresses, perfect for any event or season.",
    keywords: "dresses, clothing, fashion, ecommerce, formal wear, casual",
  };
}

const Dress = () => {
  return (
    <div>
      <DressPage />
    </div>
  );
};

export default Dress;
