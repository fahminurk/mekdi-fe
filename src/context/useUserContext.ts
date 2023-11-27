import { useContext } from "react";
import { AuthStore } from "@/store/authStore";
import { AuthContext } from "../provider/AuthProvider";

export const useUserContext = (): AuthStore => {
  const contextValue = useContext(AuthContext);
  if (contextValue === undefined) {
    throw new Error("AuthContext not found");
  }
  return contextValue;
};
