import api from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (values: { email: string; password: string }) => {
      return api.post("/auth/login", values);
    },
    onSuccess: () => {
      toast.success("Login success");
    },
  });
};
