import { auth } from "@/auth";

export const getUser = async () => {
  const session = await auth();
  const token = (await session?.token) || "";

  const res = await fetch(`http://96.9.81.187:8080/api/v1/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch user");

  const data = await res.json();
  return data.payload;
};
