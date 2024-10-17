"use client";

import { usePathname } from "next/navigation";

const PageTitleEcommerce = () => {
  const pathname = usePathname();

  const formatTitle = (path: string) => {
    const formattedPath = path.replace(/^\/+/, "");
    const lastSegment = formattedPath.split("/").pop();
    return lastSegment
      ? lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
      : "";
  };

  return (
    <h2 className="text-3xl font-extrabold text-black pb-5 lg:pb-0">
      {formatTitle(pathname)}
    </h2>
  );
};

export default PageTitleEcommerce;
