import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email can not be empty" })
    .email({ message: "Invalid email! Please enter correct email form." })
    .trim(),
  password: z
    .string()
    .min(1, { message: "Password can not be empty" })
    .min(5, { message: "Password must be atleast 5 length" })
    .regex(/[a-zA-Z]/, { message: "Contain atleast one letter" })
    .regex(/[0-9]/, { message: "Contain atleast one number" })
    .trim(),
});

export const RegisterFomSchema = z.object({
  username: z.string().min(1, { message: "Username can not be empty" }),
  email: z
    .string()
    .min(1, { message: "Email can not be empty" })
    .email({ message: "Invalid email! Please enter correct email form." })
    .trim(),
  password: z
    .string()
    .min(1, { message: "Password can not be empty" })
    .min(5, { message: "Password must be atleast 5 length" })
    .regex(/[a-zA-Z]/, { message: "Contain atleast one letter" })
    .regex(/[0-9]/, { message: "Contain atleast one number" })
    .trim(),
});
export const AddWorkSpaceFomSchema = z.object({
  name: z.string().min(1, { message: "Workspace Name can not be empty" }),
});
