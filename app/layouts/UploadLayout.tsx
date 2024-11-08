import React from "react";
import TopNav from "./includes/TopNav";

export default function UploadLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-[#F8F8F8] h-[100vh]">
        <TopNav />
        <div className="flex justify-center mx-auto w-full px-2">
          {children}
        </div>
      </div>
    </>
  );
}
