import {
  Search,
  Filter,
  Ticket,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import Navbar from "../../components/NavBar";
import StatsCard from "../../components/StatCard";
import TicketCard from "../../components/TicketStatus";
import {
  useFetchStats,
  useFetchTicket,
} from "../../fetching-mutating/fetchQueries";
import { useFilterDebounce } from "../../utility/filterTicket";

// import

function StatsDashboard() {
  const [searchTerm, setSearchTerm] = useState("");

  // Use query custom hooks
  const { data, isLoading, error } = useFetchStats();

  const ticketQuery = useFetchTicket();

  const ticketData = ticketQuery?.data?.data;
  const debouncedSearchTerm = useFilterDebounce(searchTerm, 1000);

  // const filteredTickets = useMemo(() => {
  //   if (!ticketData || !debouncedSearchTerm) return;
  //   return ticketData?.filter((ticket) =>
  //     ticket?.title?.toLowerCase()?.includes(debouncedSearchTerm?.toLowerCase())
  //   );
  // }, [ticketData, debouncedSearchTerm]);

  const filteredTickets = useMemo(() => {
    return ticketData?.filter((ticket) => {
      return ticket?.title
        ?.toLowerCase()
        ?.includes(debouncedSearchTerm?.toLowerCase());
    });
  }, [ticketData, debouncedSearchTerm]);

  const stats =
    data && data.success
      ? [
          {
            title: "Total Tickets",
            value: data.data?.totalTickets || 0,
            change: "+12% from last week",
            changeType: "positive",
            icon: Ticket,
            color: "blue",
          },
          {
            title: "Open Tickets",
            value: data.data.openTickets,
            change: "-5% from yesterday",
            changeType: "positive",
            icon: Clock,
            color: "yellow",
          },
          {
            title: "Resolved Tickets",
            value: data.data.resolvedTickets,
            change: "+8% from yesterday",
            changeType: "positive",
            icon: CheckCircle,
            color: "green",
          },
          {
            title: "Active Agents",
            value: 5,
            change: "All online",
            changeType: "neutral",
            icon: Users,
            color: "purple",
          },
        ]
      : [];

  // console.log(` from console.log ${JSON.stringify(filteredTickets, null, 2)}`);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  //
  return (
    <div className=" py-6 sm:px-6 lg:px-9">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Monitor and manage all support tickets
          </p>
        </div>
      </div>

      {/* {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {data.data &&
          stats.map((stat, index) => <StatsCard key={index} {...stat} />)}
      </div>

      {/* Tickets Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <h2 className="text-xl font-semibold text-gray-900">
              Search Ticket by Title
            </h2>
            <h1>{ticketQuery.isLoading ? "Loading..." : null}</h1>
            <h1>{ticketQuery.isError ? "Error..." : null}</h1>

            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-700" />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>

              <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-300 rounded-md">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {filteredTickets?.length > 0 ? (
            <div className="space-y-4">
              {filteredTickets?.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Ticket className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No tickets found
              </h3>
              <p className="text-gray-600">
                {searchTerm
                  ? "Try adjusting your search terms"
                  : "No tickets available currently."}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StatsDashboard;
