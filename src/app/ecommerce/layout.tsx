"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavbarEcommerce from "@/components/EcommerceComponents/NavbarEcommerce/NavbarEcommerce";
import SidebarEcommerce from "@/components/EcommerceComponents/SidebarEcommerce/SideBarEcommerce";
import BreadcrumbEcommerce from "@/components/EcommerceComponents/BreadCrumbEcommerce/BreadCrumbEcommerce";
import LoaderEcomerce from "@/components/EcommerceComponents/LoaderEcommerce/LoaderEcommerce";
import PageTitleEcommerce from "@/components/EcommerceComponents/PageTitleEcommerce/PageTitleEcommerce";
import LabelsEcommerce from "@/components/EcommerceComponents/LabelsEcommerce/LabelsEcommerce";
import FilterEcommerce from "@/components/EcommerceComponents/FilterEcommerce/FilterEcommerce";

const ECommerceLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleLinkClick = () => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timeoutId);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <aside
        className={`transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-0"
        } flex-shrink-0`}
      >
        <SidebarEcommerce
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          onLoading={handleLinkClick}
        />
      </aside>
      <div className="bg-white relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <NavbarEcommerce
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="flex-1 overflow-y-auto no-scrollbar">
          {pathname !== "/ecommerce" && (
            <div className="py-6 lg:mx-auto lg:w-1/2">
              <BreadcrumbEcommerce
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-5">
                <PageTitleEcommerce />
                <FilterEcommerce />
              </div>
              <LabelsEcommerce />
            </div>
          )}
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <LoaderEcomerce />
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
};

export default ECommerceLayout;
