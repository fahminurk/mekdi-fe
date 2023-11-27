import { IoFastFoodOutline, IoMenu } from "react-icons/io5";
import { useMemo, useState } from "react";
import Drawer from "react-modern-drawer";
import { HiHome, HiOutlineLogout } from "react-icons/hi";
import { BiCategoryAlt, BiUser } from "react-icons/bi";
import { MdOutlineTask } from "react-icons/md";
import { useLocation } from "react-router-dom";
import "react-modern-drawer/dist/index.css";

import SidebarItem from "./SidebarItem";
import { useUserContext } from "@/context/useUserContext";

const Navbar = () => {
  const { payload } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

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
    <div className="border-b-2">
      <div className="flex justify-between items-center sm:justify-end p-2 px-4">
        <div
          className="sm:hidden rounded-full p-1 hover:bg-yellow-200 cursor-pointer"
          onClick={toggleDrawer}
        >
          <IoMenu size={30} />
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          size={170}
        >
          <div className=" flex-col gap-y-2 bg-red-600 h-full p-2 ">
            <div>
              <div className="flex flex-col gap-y-4 p-2">
                {routes.map((item) => (
                  <SidebarItem key={item.label} {...item} burger={true} />
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
                <SidebarItem
                  icon={HiOutlineLogout}
                  label="logout"
                  href="/login"
                  burger={true}
                />
              </div>
            </div>
          </div>
        </Drawer>
        <div className="text-right">
          <p className="font-bold">{payload?.fullname}</p>
          <p className="text-xs">
            {payload?.isSuperAdmin ? "Super Admin" : "Admin"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
