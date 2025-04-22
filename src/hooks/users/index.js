"use client";

import { useQuery } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { apiInstance } from "../../instances/api";

const useReadUsers = ({ enabled, id = null }) => {
  return useQuery({
    queryKey: [id ? ("user", { id }) : "users"],
    queryFn: async () => {
      try {
        const { data } = await apiInstance({
          url: `/users`,
          method: "GET",
          headers: {},
        });

        return data ?? [];
      } catch (error) {
        Toast.error("Failed to fetch users");
        console.log("Error", error);
        return error;
      }
    },
    enabled,
    retry: false,
  });
};

export default useReadUsers;
