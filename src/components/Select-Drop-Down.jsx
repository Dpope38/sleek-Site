/* import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const UpdateTicket = ({ refCode, agents }) => {
  const [selectedAgentId, setSelectedAgentId] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const queryClient = useQueryClient();

  const updateTicketMutation = useMutation({
    mutationFn: (data) => {
      return axios.put(
        `${import.meta.env.VITE_BASEURL_API}admin/tickets${refCode}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${auth?.token}`}}
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["ticket", refCode]);
    },
  });

  const handleUpdate = () => {
    if (!selectedAgentId) {
      return alert("Please select both agent ");
    }

    updateTicketMutation.mutate({
      assignedAgentId: selectedAgentId,
      status: selectedStatus,
    });
  };

  return(<>
     <select
                name="status"
                value={ticketData.status}
                onChange={(e)=>setStatus(e.target.value)}
                className="w-full px-3 py-2 hover:bg-gray-200 cursor-pointer space-x-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="volvo">Volvo</option>
                <option value="audi">Audi</option>
              </select>
              <button
                className="w-full bg-slate-950 text-gray-200 text-[17px] hover:bg-slate-800 py-2 rounded-[13px] font-poppins"
                type="submit"
              >
                Update Status
              </button>
              </>
              
  )
};
 */
