import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvide } from "./contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import AdminPage from "./pages/admin-pages/AdminPage";
import TeamPage from "./pages/admin-pages/TeamPage";
import StatsDashboard from "./pages/admin-pages/StatsDashboard";
import Error404 from "./pages/Error404";
import TicketGrid from "./pages/admin-pages/TicketDashboard";
import TIcketDetails from "./pages/admin-pages/TIcketDetails";
import AgentDashboard from "./pages/agent-pages/AgentDashboard";
import LoginForm from "./components/LoginForm";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: 5, retryDelay: 1000 } },
  });
  return (
    <AuthProvide>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-right"
          toastOptions={{
            className: "",
            duration: 3000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
        <ReactQueryDevtools initialIsOpen={false} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminPage />}>
              <Route path="" element={<StatsDashboard />} />
              <Route path="users" element={<TeamPage />} />
              <Route path="tickets" element={<TicketGrid />} />
              <Route path="tickets/:ticketId" element={<TIcketDetails />} />
            </Route>
          </Route>
          <Route path="/agent" element={<AgentDashboard />} />
          <Route path="*" element={<Error404 />} />
          {/* <Route path="/agent/login" element={<LoginForm />} /> */}
        </Routes>
      </QueryClientProvider>
    </AuthProvide>
  );
}

export default App;
