"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";

const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="font-poppins antialiased">
      <CustomCursor />
      <Navbar />
      {children}
    </body>
  );
}
