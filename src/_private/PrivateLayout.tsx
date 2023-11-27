import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useUserContext } from "@/context/useUserContext";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
export default function PrivateLayout() {
  const { payload } = useUserContext();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!payload?._id && !token) return navigate("/login");
  }, [token, payload?._id, navigate]);

  return (
    <>
      <Sidebar>
        <Navbar />
        <Outlet />
      </Sidebar>
    </>
  );
}
