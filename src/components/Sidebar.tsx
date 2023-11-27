import React, { useMemo } from "react";
import { HiHome, HiOutlineLogout } from "react-icons/hi";
import { BiCategoryAlt, BiUser } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { MdOutlineTask } from "react-icons/md";

import SidebarItem from "./SidebarItem";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Dashboard",
        active: pathname === "/dashboard",
        href: "/dashboard",
      },
      {
        icon: BiCategoryAlt,
        label: "Category",
        active: pathname === "/category",
        href: "/category",
      },
      {
        icon: IoFastFoodOutline,
        label: "Product",
        active: pathname === "/product",
        href: "/product",
      },
      {
        icon: MdOutlineTask,
        label: "Order",
        active: pathname === "/order",
        href: "/order",
      },
      {
        icon: BiUser,
        label: "User",
        active: pathname === "/user",
        href: "/user",
      },
    ],
    [pathname]
  );

  return (
    <div className="flex h-screen">
      <div className="hidden sm:flex flex-col gap-y-2 bg-red-600 h-full p-2 ">
        <div>
          <div className="flex flex-col gap-y-4 p-2">
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </div>
        <div className="relative h-full p-2">
          <div
            className="abosulte bottom-0"
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            <SidebarItem icon={HiOutlineLogout} label="Logout" href="/login" />
          </div>
        </div>
      </div>
      <main className="h-full flex-1 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Sidebar;
