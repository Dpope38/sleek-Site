import {
  Search,
  Filter,
  Ticket,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import Navbar from "../../components/NavBar";
import StatsCard from "../../components/StatCard";
import TicketCard from "../../components/TicketStatus";

function StatsDashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [tickets, setTickets] = useState([
    {
      id: "1",
      title: "Login issues with mobile app",
      description:
        'Unable to login to the mobile application. Getting error message "Invalid credentials" even with correct password.',
      status: "open",
      priority: "high",
      customer: "John Smith",
      agent: "Sarah Wilson",
      createdAt: "2024-01-15T10:30:00Z",
      updatedAt: "2024-01-15T10:30:00Z",
    },
    {
      id: "2",
      title: "Payment gateway timeout",
      description:
        "Payment processing is timing out during checkout process. Multiple customers affected.",
      status: "in-progress",
      priority: "urgent",
      customer: "Alice Johnson",
      agent: "Mike Chen",
      createdAt: "2024-01-14T14:22:00Z",
      updatedAt: "2024-01-15T09:15:00Z",
    },
    {
      id: "3",
      title: "Feature request: Dark mode",
      description:
        "Request for dark mode option in the user interface to reduce eye strain during night usage.",
      status: "resolved",
      priority: "low",
      customer: "Bob Wilson",
      createdAt: "2024-01-13T16:45:00Z",
      updatedAt: "2024-01-14T11:30:00Z",
    },
  ]);

  const filteredTickets = tickets.filter(
    (ticket) =>
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = [
    {
      title: "Total Tickets",
      value: tickets.length,
      change: "+12% from last week",
      changeType: "positive",
      icon: Ticket,
      color: "blue",
    },
    {
      title: "Open Tickets",
      value: tickets.filter((t) => t.status === "open").length,
      change: "-5% from yesterday",
      changeType: "positive",
      icon: Clock,
      color: "yellow",
    },
    {
      title: "Resolved Today",
      value: tickets.filter((t) => t.status === "resolved").length,
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
  ];

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Monitor and manage all support tickets
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Tickets Section */}
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <h2 className="text-xl font-semibold text-gray-900">
              Recent Tickets
            </h2>

            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
              </div>

              <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-300 rounded-md">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {filteredTickets.length > 0 ? (
            <div className="space-y-4">
              {filteredTickets.map((ticket) => (
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
    </>
  );
}

export default StatsDashboard;
