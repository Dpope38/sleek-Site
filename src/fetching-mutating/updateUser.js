import { useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {useAuth} from "../contexts/AuthContext.jsx"

const updateTicket = async (data, auth) => {
  const response = await axios.put(
    `${import.meta.env.VITE_API_URL}/tickets/${data.refCode}`,
    data,
    {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    }
  );
  if (response.status !== 200) {
    throw new Error("Failed to update ticket");
  }
  return response.data;
};

export const useUpdateTicket = () => {
  const queryClient = useQueryClient();
  const auth = useAuth();

  return useMutation({
    mutationFn: (data) => updateTicket(data, auth),
    onSuccess: ({ refCode }) => {
      queryClient.invalidateQueries(["fetchTicket", refCode]);
    },
    onError: (error) => {
      console.error("Error updating ticket:", error);
    },
  });
};
