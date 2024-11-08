import React from "react";
import SideNavMain from "./includes/SideNavMain";
import TopNav from "./includes/TopNav";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <TopNav />
      <div
        className={`flex flex-col justify-center w-full mx-auto ${
          pathname == "/" ? "max-w-full" : ""
        }`}
      >
        <div className="">{children}</div>
        <SideNavMain />
      </div>
    </>
  );
}
