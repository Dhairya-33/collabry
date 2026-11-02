import api from "../lib/axios";

/**
 * Register new user
 */
export const registerUser = async (data) => {
  const res = await api.post("/auth/register", data);
  return res.data;
};

/**
 * Login user
 */


export const loginUser = async ({ identifier, password }) => {
  const payload = { identifier, password };
  const res = await api.post("/auth/login", payload);
  return res.data;
};


/**
 * Get current authenticated user
 */
export const getCurrentUser = async () => {
  const res = await api.get("/auth/me");
  return res.data;
};

/**
 * Complete profile (after first login)
 */
export const completeProfile = async (payload) => {
  const res = await api.put("/auth/profile/complete", payload);
  return res.data;
};

/**
 * Logout
 */
export const logoutUser = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};
