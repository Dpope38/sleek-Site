
import { useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useAuth} from "../contexts/AuthContext.jsx"



async function fetchTicket(auth) {
    try {
      const data = await axios.get(
        `${import.meta.env.VITE_BASEURL_API}admin/tickets`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      );
      // Log the actual data returned from the server for debugging
      console.log("data from fetchQuery:", data.data);
      return data.data;
    } catch (error) {
      console.log("Error fetching stats:", error);
      return null;
    }
  }



export function useFetchTicket(){
    const [auth] = useAuth()
    return useQuery({
         queryKey: ["fetchTicket"],
    queryFn: ()=>fetchTicket(auth),

    enabled: !!auth?.token,
    })
}