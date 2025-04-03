"use server";

import { addWorkspaceService } from "@/service/workspace-service";
import { AddWorkSpaceFomSchema, RegisterFomSchema } from "@/validation/rules";
import { Bounce, toast } from "react-toastify";

export const addWorkspaceAction = async (state, formData) => {
  const name = formData.get("workspaceName");
  const validationFields = AddWorkSpaceFomSchema.safeParse({
    name,
  });
  if (!validationFields.success) {
    return {
      errors: validationFields.error.flatten().fieldErrors,
    };
  }
  const data = await addWorkspaceService({ name });
  return data;
};
