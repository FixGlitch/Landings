"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import usePathname
import Sidebar from "@/components/Sidebar/Sidebar";
import Loader from "@/components/common/Loader";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const pathname = usePathname();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <html suppressHydrationWarning lang="en">
      <body className="bg-gradient-to-b from-aquamarine-200 to-aquamarine-100">
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <main className="flex-1 overflow-auto">
              {loading && pathname === "/" ? (
                <div className="flex justify-center items-center h-screen">
                  <Loader />
                </div>
              ) : (
                children
              )}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
