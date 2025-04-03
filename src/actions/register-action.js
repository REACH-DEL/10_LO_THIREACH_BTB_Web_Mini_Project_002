"use server";

import { registerService } from "@/service/auth-service";
import { RegisterFomSchema } from "@/validation/rules";
import { redirect } from "next/navigation";

export const registerAction = async (state, formData) => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  console.log("datas user: ", username, email, password);

  const validationFields = RegisterFomSchema.safeParse({
    username,
    email,
    password,
  });
  if (!validationFields.success) {
    return {
      errors: validationFields.error.flatten().fieldErrors,
    };
  }
  await registerService({ username, email, password });
  redirect("/login");
};
