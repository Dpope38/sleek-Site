import React, { useState } from "react";
import { Search, Filter, Clock, AlertTriangle } from "lucide-react";
import TicketStatus from "../../components/TicketStatus";
import StatCard from "../../components/StatCard";
import NavBar from "../../components/NavBar";
import DropdownMenu from "../../components/DropdownMenu";

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
      title: "Resolved Tickets",
      value: "Total",
      icon: Clock,
      color: "blue",
    },
    {
      title: "Open Tickets",
      value: "Open",
      icon: AlertTriangle,
      color: "yellow",
    },
    {
      title: "Total Tickets",
      value: "Resolved",
      change: "+2 from yesterday",
      changeType: "positive",
      icon: Clock,
      color: "green",
    },
  ];

  return (
    <div className="h-screen overflow-hidden px-4 py-6 bg-gray-100">
      {/* <NavBar userRole="agent" /> */}
      <nav className=" fixed w-full my-4 top-0 left-0   h-[70px] ">
        <div className="  flex justify-between  sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Agent Dashboard
            </h1>
          </div>
          <div className="flex items-center justify-between py-4">
            <DropdownMenu />
          </div>
        </div>
      </nav>

      <header className=" h-[calc(50vh-10rem)] mt-17 overflow-hidden px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.length > 0 &&
            stats.map((stat) => (
              <StatCard
                key={stat.title}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
        </div>
      </header>
      <div className="relative mb-2">
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
        className="px-3 py-2 border mb-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="all">All Status</option>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>

      <button className="p-2 text-gray-400 hover:text-gray-600 border border-gray-300 rounded-md">
        <Filter className="w-5 h-5" />
      </button>

      <div className="overflow-y-auto">
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
  );
};

export default AgentDashboard;
