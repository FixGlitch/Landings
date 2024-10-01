"use client";

import HomePage from "@/components/Home/Home";

const Home = () => {
  const renderContent = () => {
    return (
      <div>
        <HomePage />
      </div>
    );
  };

  return <>{renderContent()}</>;
};

export default Home;
