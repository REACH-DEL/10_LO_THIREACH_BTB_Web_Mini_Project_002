import { auth } from "@/auth";

export const addWorkspaceService = async ({ name }) => {
  const session = await auth();
  console.log("Session:", session);
  const token = (await session?.token) || "";

  const res = await fetch(`http://96.9.81.187:8080/api/v1/workspace`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      workspaceName: name,
    }),
  });
  if (!res.ok) throw new Error("Failed to fetch add");
  const data = await res.json();

  return data.payload;
};

export const getAllWorkspaceService = async () => {
  const session = await auth();
  console.log("Session:", session);
  const token = (await session?.token) || "";

  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/workspaces?pageNo=0&pageSize=100&sortBy=workspaceId&sortDirection=ASC`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      next: {tags: ["workspace"]}
    }
  );
  if (!res.ok) throw new Error("Failed to fetch");
  const data = await res.json();
  return data.payload;
};

export const getWorkspaceByIdService = async (id) => {
  const session = await auth();
  console.log("Session:", session);
  const token = (await session?.token) || "";

  const res = await fetch(`http://96.9.81.187:8080/api/v1/workspace/${id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error("Failed to fetch");
  const data = await res.json();
  return data.payload;
};

export const updateWorkspaceFavIdService = async (id, isFavorit) => {
  const session = await auth();
  console.log("Session:", session);
  const token = (await session?.token) || "";

  const res = await fetch(
    `http://96.9.81.187:8080/api/v1/workspace/${id}/favorite?favorite=${isFavorit}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!res.ok) throw new Error("Failed to fetch");
  const data = await res.json();
  return data;
};
