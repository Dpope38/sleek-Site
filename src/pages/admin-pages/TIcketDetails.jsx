import React, { useState } from "react";

const TicketDetails = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-4xl">
        {/* Header */}
        <div className="flex justify-between items-start border-b pb-4">
          <div>
            <p className="text-sm text-gray-500">
              Christian Eggert • 2 weeks ago
            </p>
            <h2 className="text-xl font-semibold text-gray-800 mt-1">
              Can’t install macOS High Sierra on my machine
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full font-medium">
              Resolved
            </span>
            <p className="text-xs text-gray-500 mt-2">19 Jan 2019</p>
            <ul className="text-xs text-gray-600 mt-2 space-y-1 text-right">
              <li>📎 Onboarding</li>
              <li>🏢 Office Stuff</li>
            </ul>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex space-x-6 text-sm border-b pb-2">
          {["info", "updates", "notes"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                  : "text-gray-600"
              } capitalize pb-1`}
            >
              {tab === "info" && "All Info"}
              {tab === "updates" && "Status Updates (2)"}
              {tab === "notes" && "Internal Notes (3)"}
            </button>
          ))}
        </div>

        {/* Messages */}
        <div className="mt-6 space-y-6 text-sm text-gray-700">
          {activeTab === "info" && (
            <>
              <div className="bg-gray-50 p-4 rounded-xl">
                <p>
                  I'm trying to upgrade to macOS High Sierra from Yosemite since
                  10.10 is getting old now and wasn't the best OS to start, but
                  I can’t seem to get beyond the "Install macOS High Sierra"
                  installation manager.
                </p>
                <div className="text-right mt-2 text-xs text-gray-500">
                  — Christian Eggert • 2 weeks ago
                </div>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <p>✅ Request status updated to resolved</p>
                <div className="text-right mt-2 text-xs text-gray-500">
                  — Johnny Harris • 2 weeks ago
                </div>
              </div>
            </>
          )}

          {activeTab === "updates" && (
            <div className="text-gray-600 italic">Status update history...</div>
          )}
          {activeTab === "notes" && (
            <div className="text-gray-600 italic">
              Internal notes go here...
            </div>
          )}
        </div>

        {/* Footer Message Box */}
        <div className="mt-8 border-t pt-4">
          <textarea
            placeholder="Send a message back or add a note for your team"
            className="w-full border rounded-xl p-3 text-sm outline-none focus:ring-2 focus:ring-blue-300 resize-none"
            rows={3}
          ></textarea>
          <div className="mt-3 flex justify-between items-center">
            <label className="text-sm flex items-center space-x-2">
              <input type="checkbox" className="rounded" />
              <span>Send as internal note</span>
            </label>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm hover:bg-blue-700">
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetails;
