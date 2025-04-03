export const loginService = async ({ email, password }) => {
  const res = await fetch(`http://96.9.81.187:8080/api/v1/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });
  const data = await res.json();
  return data;
};

export const registerService = async ({ username, email, password }) => {
  try {
    const res = await fetch("http://96.9.81.187:8080/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Registration failed");
    }

    const data = await res.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    console.error("Fetch Error:", error.message);
    throw error;
  }
};
