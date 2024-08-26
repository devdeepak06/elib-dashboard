import axios from "axios";

const api = axios.create({
  baseURL:"http://localhost:5513",
  headers: {
    "Content-Type": "application/json",
  },
});
interface LoginResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    password: string;
  };
}

interface RegisterResponse {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    password: string;
  };
}
export const login = async (data: { email: string; password: string }) => {
  return api.post<LoginResponse>("/api/users/login", data);
};

export const register = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return api.post<RegisterResponse>("api/users/register", data);
};

// export const login = async (data: { email: string; password: string }) => {
//   return api.post("/api/users/login", data);
// };
// export const register = async (data: {
//   name: string;
//   email: string;
//   password: string;
// }) => {
//   return api.post("api/users/register", data);
// };
