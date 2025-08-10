import {
  ArrowLeft,
  BellPlus,
  CalendarPlus,
  UserRoundPlus,
  MessageSquareMore,
  CalendarCheck2,
  Captions,
  Tag,
  Mail,
} from "lucide-react";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import FormDropDown from "../../components/FormDropDown.jsx";
import { useAuth } from "../../contexts/AuthContext.jsx";

import TextArea from "../../components/TextArea";
import { useParams } from "react-router-dom";
import { useFetchTicket } from "../../fetching-mutating/fetchTickets.js";
import formatDateTime from "../../utility/dataFormat.js";
import getStatusBadge from "../../utility/dataFormat.js";
import Accordion from "../../components/Accordion";

function TIcketDetails() {
  const [selectStatus, setSelectStatus] = useState({
    status: "PENDING",
  });
  const [auth] = useAuth();

  const tickets = useFetchTicket();
  const idParams = useParams();
  const ticketsArray = tickets?.data?.data;
  const ticketId = idParams.refCode;
  const queryClient = useQueryClient();

  const updateStatus = useMutation({
    mutationFn: (data) => {
      return axios.put(
        `${import.meta.env.VITE_BASEURL_API}admin/tickets/${ticketId}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
    },
    onSuccess: (ticketId) => {
      queryClient.invalidateQueries(["fetchTicket", ticketId]);
    },
    onError: (error) => {
      console.error("Error updating ticket:", error);
    },
  });

  const handleStatusForm = (e) => {
    try {
      e.preventDefault();
      updateStatus.mutate({
        status: selectStatus.status,
      });

      console.log("update status...", updateStatus?.data?.data);

      toast.success("Ticket status updated successfully!");
    } catch (error) {
      console.error("Error handling status form:", error);
    }
  };
  // console.log(tickets);

  const ticketData = ticketsArray?.find(
    (ticket) => ticket.referenceCode === ticketId
  );

  if (tickets.isLoading) return <p>Loading...</p>;
  if (tickets.isError) return <p>Error: {tickets.error.message}</p>;

  return (
    <div className=" mt-3 px-11">
      <header className="sticky bg-gray-100 top-16 z-10 border-b py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className=" flex items-center px-2 py-2">
              <button className="text-sm flex font-semibold gap-2 items-center hover:bg-gray-100 text-blue-700 hover:underline">
                <span>
                  <ArrowLeft />
                </span>
                Back to Dashboard
              </button>
            </div>
            <div className="flex items-center gap-2">
              <BellPlus color="#27548A" />
              <span className="text-blue-600 font-semibold">New Ticket</span>
            </div>
          </div>
        </div>
      </header>
      <main className="py-4">
        <div className="grid  py-4  gap-6 lg:grid-cols-3">
          <div className="col-span-3 rounded-2xl px-3 py-3 border border-gray-200 space-y-6">
            <div className="flex items-center space-x-2">
              {/* <h1 className="font-poppins font-semibold">{` TK-ID #tick ${ticketData.referenceCode}`}</h1> */}
              <span
                className={`rounded-[11px] text-sm ${getStatusBadge(
                  ticketData.status
                )}`}
              >
                Open
              </span>
            </div>
            <div className="flex text-sm items-center gap-2">
              <Captions />
              <p className="font-poppins font-extrabold text-gray-600">{`Topic: ${ticketData.title}`}</p>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <CalendarPlus />
                <span className="text-gray-500">
                  {` Created: ${formatDateTime(ticketData.createdAt)}`}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 rounded-2xl px-3 py-3 border border-gray-200 space-y-6">
          <div className="flex items-center space-x-2">
            <h1 className="font-poppins font-semibold">
              {`Topic: ${ticketData.title}`}
            </h1>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-wrap gap-2">
              <p className="text-gray-500 leading-5 font-semibold fo">{`Description: ${ticketData.description}`}</p>
            </div>
          </div>
        </div>
        <div className="col-span-3 rounded-2xl my-4 px-3 py-3 border border-gray-200 space-y-6">
          <div className="flex items-center space-x-2">
            <h1 className="font-poppins font-semibold"> Client Information</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
              <h1>
                {ticketData.client.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </h1>
            </div>

            <div>
              <h1 className="text-[25px] font-semibold">
                {ticketData.client.name}
              </h1>
              <p className="text-gray-500">{ticketData.client.email}</p>
            </div>
          </div>
        </div>

        <div className="col-span-3 rounded-2xl my-4 px-3 py-3 border border-gray-200 space-y-6">
          <div className="flex items-center space-x-2">
            <h1 className="font-poppins font-semibold">
              Send Message to Client
            </h1>
          </div>
          <div className="flex items-center">
            {/* <TextArea label="message" postText="hello" /> */}
          </div>
        </div>
        <div className="col-span-3 rounded-2xl my-4 px-3 py-3 border border-gray-200 space-y-6">
          <div className="flex items-center space-x-2">
            <Tag />
            <h1 className="font-poppins font-semibold"> Update Status</h1>
          </div>
          <div className="flex items-center gap-2">
            <form onSubmit={handleStatusForm} className="space-y-4 w-full">
              <label
                htmlFor="status"
                className="block text-sm font-poppins font-medium text-gray-700 mb-1"
              >
                Current Status
              </label>
              <select
                name="status"
                value={selectStatus.status}
                onChange={(e) => setSelectStatus({ status: e.target.value })}
                className="w-full px-3 py-2 hover:bg-gray-200 cursor-pointer space-x-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="PENDING">Pending</option>
                <option value="OPEN">Open</option>
                <option value="RESOLVED">Resolved</option>
                <option value="CLOSED">Closed</option>
              </select>
              <button
                className="w-full bg-slate-950 text-gray-200 text-[17px] hover:bg-slate-800 py-2 rounded-[13px] font-poppins"
                type="submit"
              >
                Update Status
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-3 rounded-2xl my-4 px-3 py-3 border border-gray-200 space-y-6">
          <div className="flex items-center space-x-2">
            <UserRoundPlus />
            <h1 className="font-poppins font-semibold"> Assign Agent</h1>
          </div>
          <FormDropDown refCode={ticketData.referenceCode} />
        </div>

        <div className="col-span-3 rounded-2xl my-4 px-3 py-3 border border-gray-200 space-y-6">
          <div className="flex items-center space-x-2">
            <h1 className="font-poppins text-2xl font-semibold">
              Client Information
            </h1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <button className="flex flex-row gap-2 w-full py-2 px-3 rounded-[11px] hover:bg-gray-200 cursor-pointer">
              <span>
                <Mail />
              </span>
              <p>Email Client</p>
            </button>
            <button className="flex flex-row gap-2 w-full py-2 px-3 rounded-[11px] hover:bg-gray-200 cursor-pointer">
              <span>
                <CalendarCheck2 />
              </span>
              <p>Email Client</p>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TIcketDetails;
