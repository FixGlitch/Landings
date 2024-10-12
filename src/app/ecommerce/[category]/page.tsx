const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params;

  const renderContent = () => {
    switch (category) {
      case "t-shirt":
        return <div>T-Shirt Collection</div>;
      case "sweatshirt":
        return <div>Sweatshirt Collection</div>;
      case "dress":
        return <div>Dress Collection</div>;
      case "pants-and-skirt":
        return <div>Pants and Skirt Collection</div>;
      case "sweater":
        return <div>Sweater Collection</div>;
      case "stuff-and-accessories":
        return <div>Stuff and Accessories Collection</div>;
      default:
        return <div>Welcome to our E-commerce!</div>;
    }
  };

  return <>{renderContent()}</>;
};

export default CategoryPage;
