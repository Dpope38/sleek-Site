import { useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
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

const fetchStats = async (auth)=>{
     try {
      const data = await axios.get(
        `${import.meta.env.VITE_BASEURL_API}admin/reports`,
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

 async function createTicket(auth,tickets){
  try{
    const ticketData = await axios.post(
       `${import.meta.env.VITE_BASEURL_API}create-ticket`,
       tickets,
       {
        headers:{
          "Content-Type":"application/json",
          Authorization:`Bearer ${auth?.token}`
        }
       }

    )
    return ticketData.data

  }catch(error){
    console.log("error from creating data >>>>", error)
  }
 }

export function useFetchStats(){
    const [auth] = useAuth()
    return useQuery({
         queryKey: ["fetchStats"],
    queryFn: ()=>fetchStats(auth),

    enabled: !!auth?.token,
    })
}
export function useFetchTicket(){
    const [auth] = useAuth()
    return useQuery({
         queryKey: ["fetchTicket"],
    queryFn: ()=>fetchTicket(auth),

    enabled: !!auth?.token,
    })
}

export function useCreateTicket() {
  const [auth] = useAuth()
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (tickets) => createTicket(auth, tickets),
    onSuccess: () => {
      queryClient.invalidateQueries(["fetchTicket"]);
    },
    onError: (error) => {
      console.error("Error creating ticket:", error);
    },
  })
  
}