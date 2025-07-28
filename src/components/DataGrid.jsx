import {
  User,
  Ticket,
  CheckCircle,
  AlertCircle,
  Clock,
  ChartPie,
  CalendarPlus2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../utility/cn.js";

const DataGrid = ({ selectedTickets, selectAll, tickets, options }) => {
  function formatDateTime(isoString) {
    const date = new Date(isoString);

    // Format options
    const options = {
      year: "numeric",
      month: "long", // e.g., May
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true, // 12-hour format with AM/PM
    };

    return date.toLocaleString(undefined, options);
  }

  const handleSelectAll = () => {
    if (selectAll) {
      options.setSelectedTickets([]);
    } else {
      options.setSelectedTickets(tickets.map((ticket) => ticket.uniqueId));
    }
    options.setSelectAll(!selectAll);
  };

  const handleSelectTicket = (uniqueId) => {
    if (selectedTickets.includes(uniqueId)) {
      options.setSelectedTickets(
        selectedTickets.filter((id) => id !== uniqueId)
      );
    } else {
      options.setSelectedTickets([...selectedTickets, uniqueId]);
    }
  };

  const getPriorityBadge = (priority) => {
    const styles = {
      HIGH: "bg-red-100 text-red-800 border-red-200",
      MEDIUM: "bg-yellow-100 text-yellow-800 border-yellow-200",
      LOW: "bg-gray-100 text-gray-800 border-gray-200",
    };
    return `px-2 py-1 text-xs font-medium rounded-md border ${styles[priority]}`;
  };

  const getStatusBadge = (status) => {
    return cn(`${status}`, {
      "bg-green-200 py-2 px-3 border border-gray-300 hover:bg-green-300":
        status === "RESOLVED",
      "bg-yellow-200 py-2 px-3 border border-gray-300 hover:bg-yellow-300":
        status === "PENDING",
      "bg-red-200 py-2 px-3 border border-gray-300 hover:bg-red-300":
        status === "OPEN",
      "bg-gray-200 py-2 px-3 border border-gray-300 hover:bg-gray-300":
        status === "unassigned",
    });
  };

  const getAvatarColor = (name) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-red-500",
      "bg-yellow-500",
      "bg-teal-500",
    ];
    return name === null ? "no name" : colors[name.length % colors.length];
  };

  return (
    <div className="max-w-6xl my-6  bg-white shadow rounded-lg px-5 pt-4">
      <h2 className="text-lg font-semibold mb-4">Recent Tickets</h2>
      <ul className="">
        {tickets &&
          tickets.length > 0 &&
          tickets.map((ticket) => (
            <li
              key={ticket.id}
              className=" flex items-center hover:bg-gray-100 justify-between border-b border-gray-200"
            >
              <div>
                <h3 className="font-semibold my-1  text-gray-800">
                  Ticket #{ticket.referenceCode}
                </h3>
                <p className="text-bold font-poppins text-gray-500">
                  {ticket.title}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`px-3 py-1 text-sm rounded-full font-medium ${getStatusBadge(
                    ticket.status
                  )}`}
                >
                  {ticket.status}
                </span>
                <button className="text-sm font-semibold text-blue-700 hover:underline">
                  {
                    <Link
                      to={`${ticket.referenceCode}`}
                      state={options.tickets}
                    >
                      View Details
                    </Link>
                  }
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DataGrid;
