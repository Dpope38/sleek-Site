import React, { useState } from "react";

const tickets = [
  {
    id: "1234",
    title: "My keyboard Not Worke",
    user: "Aslam",
    date: "Nov 22, 2024",
    priority: "Highest",
  },
  {
    id: "1235",
    title: "My app is very buggy",
    user: "brentrodriguez",
    date: "Nov 20, 2024",
    priority: "Highest",
  },
  {
    id: "1236",
    title: "My Network is very slowly",
    user: "brentrodriguez",
    date: "Nov 16, 2024",
    priority: "Highest",
  },
  {
    id: "1237",
    title: "Failure to start up computer",
    user: "brentrodriguez",
    date: "Nov 1, 2024",
    priority: "Highest",
  },
  {
    id: "1238",
    title: "Desktop keeps restarting",
    user: "brentrodriguez",
    date: "Nov 1, 2024",
    priority: "Highest",
  },
];
function TicketGrid() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">Tickets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="bg-white shadow-md rounded-xl p-5 relative hover:shadow-lg transition"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">{ticket.title}</h2>
              <button
                className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full"
                onClick={() =>
                  setExpandedId(expandedId === ticket.id ? null : ticket.id)
                }
              >
                OPEN
              </button>
            </div>

            {expandedId === ticket.id ? (
              <div className="text-sm space-y-2">
                <p>
                  <span className="font-semibold">User:</span> {ticket.user}
                </p>
                <p>
                  <span className="font-semibold">Submitted:</span>{" "}
                  {ticket.date}
                </p>
                <p>
                  <span className="font-semibold">Priority:</span>{" "}
                  {ticket.priority}
                </p>
                <p>
                  <span className="font-semibold">Ticket ID:</span> {ticket.id}
                </p>
              </div>
            ) : (
              <div className="text-sm text-gray-600">
                Click OPEN for details
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="px-6 py-2 bg-gray-200 rounded-full text-sm hover:bg-gray-300">
          Load More
        </button>
      </div>
    </div>
  );
}
export default TicketGrid;
