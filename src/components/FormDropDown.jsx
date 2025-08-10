import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../contexts/AuthContext.jsx";

import { useFetchUsers } from "../fetching-mutating/userQuery.js";

function FormDropDown({ refCode }) {
  const [agentEmail, setAgentEmail] = useState("");
  let [localFirstLetters, setLocalFirstLetters] = useState(null);
  const queryClient = useQueryClient();
  const teamData = useFetchUsers();

  const [auth] = useAuth();
  console.log("from console.log", import.meta.env.VITE_BASEURL_API);
  const updateAgent = useMutation({
    mutationFn: (data) => {
      return axios.put(
        `${import.meta.env.VITE_BASEURL_API}admin/tickets/${refCode}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
    },
    onSuccess: (refCode) => {
      queryClient.invalidateQueries(["fetchTicket", refCode]);
    },
    onError: (error) => {
      console.error("Error updating ticket:", error);
    },
  });

  const dataTeam = teamData?.data?.data;
  const firstLetters = updateAgent.data?.data?.data?.assignedAgent;

  useEffect(() => {
    const LocalStorageFirstLetters = JSON.parse(
      localStorage.getItem("firstLetters")
    );
    if (LocalStorageFirstLetters) {
      setLocalFirstLetters(LocalStorageFirstLetters);
    }
    if (firstLetters) {
      setLocalFirstLetters(firstLetters);
      localStorage.setItem("firstLetters", JSON.stringify(firstLetters));
    }
  }, [firstLetters]);

  const mapFirstLetter = Object.values(localFirstLetters || {})
    .map((item) => {
      return item.charAt(0).toUpperCase();
    })
    .join("");

  const filterAdmin = dataTeam?.filter((user) => user.role === "AGENT");

  const handleUpdateAgent = (e) => {
    try {
      e.preventDefault();
      updateAgent.mutate({ agentEmail });
      toast.success("Agent assigned successfully!");
    } catch (error) {
      console.error("Error updating agent:", error);
    }
  };
  return (
    <form onSubmit={handleUpdateAgent} className="flex items-center gap-2">
      <div className="space-y-4 w-full ">
        <label className="block text-sm font-poppins font-medium text-gray-700 mb-1">
          Current Status
          <div className="flex items-center my-2 border border-gray-300 px-2 py-2 rounded-[11px] gap-2">
            <div className="flex py-2 px-2  items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
              <h1>{mapFirstLetter}</h1>
            </div>

            <div>
              <h1>{localFirstLetters?.name}</h1>
              <p>{localFirstLetters?.email}</p>
            </div>
          </div>
        </label>
        <select
          value={agentEmail}
          onChange={(e) => setAgentEmail(e.target.value)}
          name="Agent"
          className="w-full px-3 py-2 space-x-3 hover:bg-gray-300 cursor-pointer overflow-y-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option disabled>Select an agent...</option>
          {filterAdmin &&
            filterAdmin.map((user) => (
              <option key={user.id} value={user.email}>
                {user.name} ({user.email})
              </option>
            ))}
        </select>
        <button
          className="w-full bg-slate-950 text-gray-200 text-[17px]  hover:bg-slate-800 py-2  focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 rounded-[13px] font-poppins"
          type="submit"
          disabled={updateAgent.isPending || !agentEmail}
        >
          Assign Agent
        </button>
      </div>
    </form>
  );
}

export default FormDropDown;

/* 


<form
            onSubmit={handleUpdateStatus}
            className="flex items-center gap-2"
          >
            <div className="space-y-4 w-full ">
              <label className="block text-sm font-poppins font-medium text-gray-700 mb-1">
                Current Status
                <div className="flex items-center my-2 border border-gray-300 px-2 py-2 rounded-[11px] gap-2">
                  <div className="flex py-2 px-2  items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
                    <h1>TK</h1>
                  </div>

                  <div>
                    <h1>Sarah Name</h1>
                    <p>email address</p>
                  </div>
                </div>
              </label>
              <select
                value={agentEmail}
                onChange={(e) => setAgentEmail(e.target.value)}
                name="Agent"
                className="w-full px-3 py-2 space-x-3 hover:bg-gray-300 cursor-pointer overflow-y-auto border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option default disabled>
                  Select an agent...
                </option>
                {filterAdmin &&
                  filterAdmin.map((user) => (
                    <option key={user.id} value={user.email}>
                      {user.name} ({user.email})
                    </option>
                  ))}
              </select>
              <button
                className="w-full bg-slate-950 text-gray-200 text-[17px]  hover:bg-slate-800 py-2  focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 rounded-[13px] font-poppins"
                // onClick={handleUpdateStatus}
                // disabled={updateAgent.isPending || !agentEmail}
                type="submit"
              >
                Assign Agent
              </button>
            </div>
          </form>

          export default  */
