"use server";

import { signIn } from "@/auth";
import { LoginFormSchema } from "@/validation/rules";
import { redirect } from "next/navigation";

export const loginAction = async (state, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");
  const validationFields = LoginFormSchema.safeParse({
    email: email,
    password: password,
  });
  if (!validationFields.success) {
    return {
      errors: validationFields.error.flatten().fieldErrors,
    };
  }
  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  redirect("/");
};
