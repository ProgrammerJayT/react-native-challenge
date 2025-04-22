"use client";

import { useQuery } from "@tanstack/react-query";
import { Toast } from "toastify-react-native";
import { apiInstance } from "../../instances/api";

const useReadPosts = ({ enabled, id = null }) => {
  return useQuery({
    queryKey: [id ? ("post", { id }) : "posts"],
    queryFn: async () => {
      try {
        const { data } = await apiInstance({
          url: `/posts`,
          method: "GET",
          headers: {},
        });

        return data ?? [];
      } catch (error) {
        Toast.error("Failed to fetch posts");
        console.log("Error", error);
        return error;
      }
    },
    enabled,
    retry: false,
  });
};

export default useReadPosts;
