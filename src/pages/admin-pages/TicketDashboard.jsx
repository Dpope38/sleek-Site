import React, { useState } from "react";
import { Ticket, Hourglass, TicketCheck, TicketX, Search } from "lucide-react";
import { useFetchTicket } from "../../fetching-mutating/fetchQueries";
import DataGrid from "../../components/DataGrid";

function TicketGrid() {
  const ticketData = useFetchTicket();
  const [selectedTickets, setSelectedTickets] = useState([]); // 2nd varibale
  const [selectAll, setSelectAll] = useState(false);

  const tickets = ticketData.data?.data;
  const options = {
    setSelectedTickets,
    setSelectAll,
    tickets,
  };

  const ticketDetails = {
    totalTickets: ticketData.data?.data.length,
    totalStatus: ticketData.data?.data.filter((item) => item.status === "OPEN")
      .length,
    totalResolve: ticketData.data?.data.filter(
      (item) => item.status === "RESOLVED"
    ).length,
  };

  if (ticketData.isError) return JSON.stringify(ticketData.isError, null, 2);
  // if (ticketData) return JSON.stringify(ticketData.data?.data, null, 2);
  if (ticketData.isLoading) return <p>Loading</p>;

  // const getBackgroundClasses = cn({
  //   "bg-blue-700": ticketDetails.totalTickets === "Total Tickets",
  //   "bg-yellow-700": title === "Open Tickets",
  //   "bg-green-700": title === "Resolved Tickets",
  // });

  return (
    <div className="min-h-screen  px-8  py-5   ">
      <h1 className="text-2xl flex   font-poppins mb-7 font-semibold ">
        Tickets DashBoard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 max-w-6xl ">
        <div className="bg-blue-500 flex flex-row text-gray-500items-center  shadow-md rounded-xl p-5  hover:shadow-lg transition">
          <div className="bg-gray-100 flex justify-center items-center basis-1/3 rounded-2xl hover:shadow-lg transition w-[60px] h-[60px]">
            <Ticket className="text-blue-400" />
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
        <div className="bg-amber-300 flex items-center shadow-md rounded-xl p-5  hover:shadow-lg transition">
          <div className="bg-amber-50 flex justify-center items-center rounded-2xl hover:shadow-lg transition w-[60px] h-[60px]">
            <Hourglass className="text-amber-400" />
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
        <div className="bg-green-500 flex  items-center shadow-md rounded-xl p-5  hover:shadow-lg transition">
          <div className="bg-gray-100 flex justify-center items-center rounded-2xl hover:shadow-lg transition w-[60px] h-[60px]">
            <TicketCheck className="text-green-400" />
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
