import z from "zod";

export const INIT_USER = {
  _id: "",
  fullname: "",
  email: "",
  isSuperAdmin: false,
};

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export const addUserSchema = z.object({
  email: z.string().email(),
  fullname: z.string().min(3, {
    message: "Name must be at least 3 characters",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});
