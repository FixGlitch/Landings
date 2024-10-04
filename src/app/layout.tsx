"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className="bg-aquamarine-100 h-screen overflow-hidden">
        <div className="h-screen flex">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <main className="flex-1 overflow-auto">
              {loading ? (
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
