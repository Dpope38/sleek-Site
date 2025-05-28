import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  Search,
  Filter,
  Ticket,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";
import Navbar from "../../components/NavBar";
import StatsCard from "../../components/StatCard";
import TicketCard from "../../components/TicketStatus";

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userRole="admin" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPage;
