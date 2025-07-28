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
    <div className="min-h-screen min-w-screen bg-gray-50">
      <Navbar userRole="admin" />

      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminPage;
