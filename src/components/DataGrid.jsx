import {
  Search,
  MoreVertical,
  CheckCircle,
  AlertCircle,
  Clock,
} from "lucide-react";

const SupportTicketsTable = ({
  selectedTickets,
  selectAll,
  tickets,
  options,
}) => {
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
      High: "bg-red-100 text-red-800 border-red-200",
      Medium: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Low: "bg-gray-100 text-gray-800 border-gray-200",
    };
    return `px-2 py-1 text-xs font-medium rounded-md border ${styles[priority]}`;
  };

  const getStatusBadge = (status) => {
    const styles = {
      Pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      Solved: "bg-green-100 text-green-800 border-green-200",
    };
    const icons = {
      Pending: <Clock className="w-3 h-3 mr-1" />,
      Solved: <CheckCircle className="w-3 h-3 mr-1" />,
    };
    return (
      <span
        className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-md border ${styles[status]}`}
      >
        {icons[status]}
        {status}
      </span>
    );
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
    <div className="bg-gray-200 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" rounded-t-lg p-6 border-b border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold font-poppins text-slate-800">
              Ticket Created
            </h1>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-200 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-200 text-gray-700 placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg border-2 border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="bg-gray-300 rounded-b-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-700 border-b border-gray-600">
                <tr>
                  <th className="px-6 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={selectAll}
                      onChange={handleSelectAll}
                      className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-500 rounded focus:ring-blue-500 focus:ring-2"
                    />
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left font-poppins  text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Requested By
                  </th>
                  <th className="px-6 py-3 text-left  font-poppins text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Agent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Create Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {tickets.map((ticket) => (
                  <tr
                    key={ticket.id}
                    className={`hover:bg-gray-750 transition-colors duration-150 ${
                      selectedTickets.includes(ticket.id) ? "bg-red-500" : ""
                    }`}
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedTickets.includes(ticket.referenceCode)}
                        onChange={() =>
                          handleSelectTicket(ticket.referenceCode)
                        }
                        className="w-4 h-4 text-blue-600 bg-gray-600 border-gray-500 rounded focus:ring-blue-500 focus:ring-2"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-700">
                      {ticket.referenceCode}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-pink-500">
                      {ticket.clientId}
                    </td>
                    <td className="px-6 py-4 text-sm text-red-500 max-w-xs truncate">
                      {ticket.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={getPriorityBadge(ticket.priority)}>
                        {ticket.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className={`w-8 h-8 ${getAvatarColor(
                            ticket.assignedAgentId
                          )} rounded-full flex items-center justify-center text-white text-xs font-medium mr-3`}
                        >
                          {ticket.assignedAgentId}
                        </div>
                        <span className="text-sm text-gray-300">
                          {ticket.assignedAgentId}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-900">
                      {formatDateTime(ticket.createDate)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(ticket.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="text-gray-400 hover:text-gray-300 transition-colors duration-150">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Items Info */}
        {selectedTickets.length > 0 && (
          <div className="mt-4 bg-blue-900 border border-blue-700 rounded-lg p-4">
            <p className="text-blue-200">
              {selectedTickets.length} ticket
              {selectedTickets.length !== 1 ? "s" : ""} selected
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportTicketsTable;
