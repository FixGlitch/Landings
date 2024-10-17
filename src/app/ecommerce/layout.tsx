"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import NavbarEcommerce from "@/components/EcommerceComponents/NavbarEcommerce/NavbarEcommerce";
import SidebarEcommerce from "@/components/EcommerceComponents/SidebarEcommerce/SideBarEcommerce";
import LoaderEcomerce from "@/components/EcommerceComponents/LoaderEcommerce/LoaderEcommerce";
import FooterEcommerce from "@/components/EcommerceComponents/FooterEcommerce/FooterEcommerce";
import HeaderEcommerce from "@/components/EcommerceComponents/HeaderEcommerce/HeaderEcommerce";

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

  const handleLoading = () => {
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
          onLoading={handleLoading}
        />
      </aside>
      <div className="bg-white relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <NavbarEcommerce
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="flex-1 overflow-y-auto no-scrollbar">
          {loading ? (
            <LoaderEcomerce />
          ) : (
            <>
              {pathname !== "/ecommerce" && (
                <HeaderEcommerce
                  sidebarOpen={sidebarOpen}
                  setSidebarOpen={setSidebarOpen}
                />
              )}
              {children}
            </>
          )}
          <FooterEcommerce />
        </main>
      </div>
    </div>
  );
};

export default ECommerceLayout;
