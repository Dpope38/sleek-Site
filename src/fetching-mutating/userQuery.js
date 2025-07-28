import { useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useAuth} from "../contexts/AuthContext.jsx"
import { useMemo } from "react";



const fetchUsers= async (auth)=>{
     try {
      const data = await axios.get(
        `${import.meta.env.VITE_BASEURL_API}admin/users`,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${auth?.token}`,
          },
        }
      );
      // Log the actual data returned from the server for debugging
    //   console.log("data from fetchQuery:", data.data);
      return data.data;
    } catch (error) {
      console.log("Error fetching stats:", error);
      return null;
    }
}

export function useFetchUsers(){
    const [auth] = useAuth()
    return useQuery({
         queryKey: ["userQuery"],
    queryFn: ()=>fetchUsers(auth),

    enabled: !!auth?.token,
    })
}
