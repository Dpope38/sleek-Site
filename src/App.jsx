import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/admin-pages/AdminPage";
import TeamPage from "./pages/admin-pages/TeamPage";
import StatsDashboard from "./pages/admin-pages/StatsDashboard";
import TicketGrid from "./pages/admin-pages/TicketDashboard";
import TIcketDetails from "./pages/admin-pages/TIcketDetails";
import AgentDashboard from "./pages/agent-pages/AgentDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/admin" element={<AdminPage />}>
        <Route path="" element={<StatsDashboard />} />
        <Route path="users" element={<TeamPage />} />
        <Route path="tickets" element={<TicketGrid />} />
        <Route path="tickets/:ticketId" element={<TIcketDetails />} />
      </Route>
      <Route path="/agent" element={<AgentDashboard />} />
    </Routes>
  );
}

export default App;
