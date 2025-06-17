import React, { useState } from "react";
import { Ticket, Hourglass, TicketCheck, TicketX, Search } from "lucide-react";
import { useFetchTicket } from "../../fetching-mutating/fetchQueries";
import { useParams } from "react-router-dom";
import DataGrid from "../../components/DataGrid";

function formatDateTime(isoString) {
  const date = new Date(isoString);

  // Format options
  const options = {
    year: "numeric",
    month: "long", // e.g., May
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // 12-hour format with AM/PM
  };

  return date.toLocaleString(undefined, options);
}

const ticketss = [
  {
    id: "#1846325",
    uniqueId: "ticket-1",
    requestedBy: "Mark Duan",
    subject: "Help with my purchase",
    priority: "Medium",
    agent: { name: "Jese Leos", avatar: "JL" },
    createDate: "02 Mar 2025",
    status: "Pending",
  },
];

function TicketGrid() {
  const [expandedId, setExpandedId] = useState(null);
  const ticketData = useFetchTicket();
  const [selectedTickets, setSelectedTickets] = useState([]); // 2nd varibale
  const [selectAll, setSelectAll] = useState(false);

  const options = {
    setSelectedTickets,
    setSelectAll,
  };

  // function countByStatus(data, status) {
  // return data.filter((item) => item.status === status).length;
  // }

  const tickets = ticketData.data?.data;

  const ticketDetails = {
    totalTickets: ticketData.data?.data.length,
    totalStatus: ticketData.data?.data.filter((item) => item.status === "OPEN")
      .length,
    totalResolve: ticketData.data?.data.filter(
      (item) => item.status === "RESOLVED"
    ).length,
  };

  //function to Handle the check-box input

  // Handle the selected check-box input

  // Handle priority styling

  if (ticketData.isError) return JSON.stringify(ticketData.isError, null, 2);
  if (ticketData.isLoading) return <p>Loading</p>;

  // if (ticketData) return JSON.stringify(tickets, null, 2);

  return (
    <div className="min-h-screen bg-gray-100 p-5 ">
      <h1 className="text-2xl font-poppins font-bold mb-3">Tickets</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl ">
        <div className="bg-white flex flex-row items-center  shadow-md rounded-xl p-5  hover:shadow-lg transition">
          <div className="bg-blue-500 flex justify-center items-center basis-1/3 rounded-2xl hover:shadow-lg transition w-[60px] h-[60px]">
            <Ticket className="text-amber-100" />
          </div>
          <div className="flex  flex-col basis-2/3 items-center">
            <div className="">
              <h1 className="text-4xl font-bold font-poppins">
                {ticketDetails.totalTickets}
              </h1>
              <p>Total Tickets</p>
            </div>
          </div>
        </div>
        <div className="bg-white flex items-center shadow-md rounded-xl p-5  hover:shadow-lg transition">
          <div className="bg-amber-300 flex justify-center items-center rounded-2xl hover:shadow-lg transition w-[60px] h-[60px]">
            <Hourglass className="text-amber-100" />
          </div>
          <div className="flex  flex-col basis-2/3 items-center">
            <div className="">
              <h1 className="text-4xl font-bold font-poppins">
                {ticketDetails.totalStatus}
              </h1>
              <p>Pending</p>
            </div>
          </div>
        </div>
        <div className="bg-white flex  items-center shadow-md rounded-xl p-5  hover:shadow-lg transition">
          <div className="bg-green-500 flex justify-center items-center rounded-2xl hover:shadow-lg transition w-[60px] h-[60px]">
            <TicketCheck className="text-amber-100" />
          </div>
          <div className="flex  flex-col basis-2/3 items-center">
            <div className="">
              <h1 className="text-4xl font-bold font-poppins">
                {ticketDetails.totalResolve}
              </h1>
              <p>Resolved Tickets</p>
            </div>
          </div>
        </div>
        <div className="bg-white flex items-center shadow-md rounded-xl p-5  hover:shadow-lg transition">
          <div className="bg-red-400 flex justify-center items-center rounded-2xl hover:shadow-lg transition w-[60px] h-[60px]">
            <TicketX className="text-amber-100" />
          </div>
          <div className="flex  flex-col basis-2/3 items-center">
            <div className="">
              <h1 className="text-4xl font-bold font-poppins">85,005</h1>
              <p>Total Tickets</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-between mt-7">
        <div className=" border-2 border-blue-400 bg-blue-400 hover:bg-blue-600 transition-all duration-100 rounded-[12px]"></div>
      </div>
      <hr className="mt-6 text-gray-400" />
      <DataGrid
        selectedTickets={selectedTickets}
        selectAll={selectAll}
        tickets={tickets}
        options={options}
      />
    </div>
  );
}
export default TicketGrid;
