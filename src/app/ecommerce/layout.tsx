"use client";

import NavbarEcommerce from "@/components/EcommerceComponents/NavbarEcommerce/NavbarEcommerce";
import SidebarEcommerce from "@/components/EcommerceComponents/SidebarEcommerce/SideBarEcommerce";
import { useState } from "react";

const ECommerceLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-0"
        } flex-shrink-0`}
      >
        <SidebarEcommerce
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
      <div className="bg-white relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <NavbarEcommerce
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        <main className="flex-1 overflow-y-auto no-scrollbar">{children}</main>
      </div>
    </div>
  );
};

export default ECommerceLayout;
