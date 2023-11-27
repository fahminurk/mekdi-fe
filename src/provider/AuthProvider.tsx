import api from "@/lib/axios";
import { AuthStore, useAuthStore } from "@/store/authStore";
import { AxiosError } from "axios";
import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const AuthContext = createContext<AuthStore | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { onAuthSuccess, onLogout, payload } = useAuthStore();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // console.log(token);
  // console.log(payload);

  const checkAuthUser = async () => {
    try {
      const res = await api.get("/auth/token");

      if (res.data) {
        onAuthSuccess({ payload: res.data });
      }
    } catch (error) {
      // console.log(error);
      const err = error as AxiosError<{ message: string }>;
      // toast.error(err.response?.data.message);
      // localStorage.removeItem("token");
      // navigate("/login");
    }
  };

  useEffect(() => {
    if (!token && payload?._id) {
      onLogout();
    }
    checkAuthUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, navigate, payload?._id]);

  const value = {
    payload,
    onAuthSuccess,
    onLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
