"use client";

import Sidebar from "@/components/SideBar/SideBar";
import "./globals.css";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <html lang="es" suppressHydrationWarning>
      <head />
      <body className="bg-aquamarine-100 h-screen overflow-hidden">
        <div className="h-screen flex">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex-1 flex flex-col overflow-hidden">
            <main className="flex-1 overflow-auto p-4">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
