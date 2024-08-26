import useTokenStore from "@/store";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5513",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = useTokenStore.getState().token;

  // Ensure that headers exist and are defined
  if (config.headers) {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } else {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
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

export const getBooks = async () => {
  return api.get("/api/books");
};

export const createBook = async (data: FormData) => {
  return api.post("/api/books", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
