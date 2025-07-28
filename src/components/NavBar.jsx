import React from "react";

import { Ticket, Users, BarChart3, Settings, Bell } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import { useAuth } from "../contexts/AuthContext";

const NavBar = ({ userRole, ...props }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  // const menuItems = [
  //   { label: "Admin", str: "i am" },
  //   { label: "Logout", str: "i am" },
  //   // { label: "Settings", href: "/settings" },
  // ];

  const adminNavItems = [
    { icon: BarChart3, label: "Dashboard", path: "/admin" },
    { icon: Ticket, label: "All Tickets", path: "/admin/tickets" },
    { icon: Users, label: "Users", path: "/admin/users" },
    { icon: Settings, label: "Settings", path: "/admin/settings" },
  ];

  const agentNavItems = [
    { icon: Ticket, label: "My Tickets", path: "/agent" },
    { icon: Ticket, label: "Queue", path: "/agent/queue" },
  ];

  const navItems = userRole === "admin" ? adminNavItems : agentNavItems;

  return (
    <nav className=" bg-linear-to-r from-blue-300 to-blue-400 border-b sticky top-0 z-10 w-full border-b-blue-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left section: Logo and Navigation Links */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Ticket className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-indigo-800">
                TicketFlow
              </span>
            </Link>

            <div className="hidden md:flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-blue-200"
                        : "text-black font-bold text-3xl hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right section: Notifications and Role Avatar */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-950 hover:text-gray-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full"></div>
              <span className="text-sm font-medium text-gray-700 capitalize">
                <ul className="dro">
                  <li className="cursor-pointer">{userRole}</li>
                </ul>
              </span>
            </div> */}

            {isOpen && <DropdownMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
