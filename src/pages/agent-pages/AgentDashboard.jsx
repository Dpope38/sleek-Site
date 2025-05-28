import React, { useState } from "react";
import { Search, Filter, Clock, AlertTriangle } from "lucide-react";
import TicketStatus from "../../components/TicketStatus";
import StatCard from "../../components/StatCard";
import NavBar from "../../components/NavBar";

const AgentDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const myTickets = [
    {
      id: "1",
      title: "Login issues with mobile app",
      description:
        'Unable to login to the mobile application. Getting error message "Invalid credentials" even with correct password.',
      status: "in-progress",
      priority: "high",
      customer: "John Smith",
      agent: "You",
      createdAt: "2024-01-15T10:30:00Z",
      updatedAt: "2024-01-15T10:30:00Z",
    },
    {
      id: "4",
      title: "Billing inquiry about subscription",
      description:
        "Customer wants to understand the difference between Pro and Enterprise plans.",
      status: "open",
      priority: "medium",
      customer: "Emma Davis",
      agent: "You",
      createdAt: "2024-01-15T09:15:00Z",
      updatedAt: "2024-01-15T09:15:00Z",
    },
  ];

  const filteredTickets = myTickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || ticket.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = [
    {
      title: "My Open Tickets",
      value: myTickets.filter((t) => t.status === "open").length,
      icon: Clock,
      color: "blue",
    },
    {
      title: "In Progress",
      value: myTickets.filter((t) => t.status === "in-progress").length,
      icon: AlertTriangle,
      color: "yellow",
    },
    {
      title: "Resolved Today",
      value: 3,
      change: "+2 from yesterday",
      changeType: "positive",
      icon: Clock,
      color: "green",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <NavBar userRole="agent" /> */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Tickets</h1>
          <p className="text-gray-600 mt-1">
            Manage your assigned support tickets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
              <h2 className="text-xl font-semibold text-gray-900">
                Assigned Tickets
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

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Status</option>
                  <option value="open">Open</option>
                  <option value="in-progress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>

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
                  <TicketStatus key={ticket.id} ticket={ticket} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Clock className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No tickets found
                </h3>
                <p className="text-gray-600">
                  {searchTerm || statusFilter !== "all"
                    ? "Try adjusting your search or filter"
                    : "No tickets assigned to you yet"}
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AgentDashboard;
