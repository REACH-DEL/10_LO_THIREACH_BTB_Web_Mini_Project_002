"use server";

import {
  addWorkspaceService,
  updateWorkspaceFavIdService,
} from "@/service/workspace-service";
import { AddWorkSpaceFomSchema, RegisterFomSchema } from "@/validation/rules";
import { revalidateTag } from "next/cache";
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

export const handleFavorite = async (id, isFavorite) => {
  try {
    const data = await updateWorkspaceFavIdService(id, !isFavorite);
    revalidateTag("workspace");
    return data;
  } catch (error) {
    console.error("Failed to update favorite:", error);
  }
};
