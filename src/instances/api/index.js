import axios from "axios";

const { EXPO_PUBLIC_API_URL } = process.env;

export const apiInstance = axios.create({
  baseURL: EXPO_PUBLIC_API_URL,
});