import { useState, useMemo } from "react";
import {
  Users,
  UserPlus,
  Settings,
  Shield,
  BarChart3,
  FileText,
  Calendar,
  Bell,
  Search,
  LogOut,
  Divide,
  UserMinus,
} from "lucide-react";
import UserCard from "../../components/UserCard.jsx";
import TeamFormCreate from "../../components/TeamFormCreate.jsx";
import SearchUser from "../../components/SearchUser.jsx";
import { useFilterDebounce } from "../../utility/filterTicket.js";

import { useFetchUsers } from "../../fetching-mutating/userQuery.js";
import { div } from "framer-motion/client";

function TeamPage() {
  const useData = useFetchUsers();
  const userData = useData?.data?.data;
  const [active, setActive] = useState(null);
  const [searchTeam, setSearchTeam] = useState("");
  const debouncedSearchTerm = useFilterDebounce(searchTeam, 1000);
  const filteredTickets = useMemo(() => {
    return userData?.filter((user) => {
      return user?.name
        ?.toLowerCase()
        ?.includes(debouncedSearchTerm?.toLowerCase());
    });
  }, [userData, debouncedSearchTerm]);

  // if (useData) return JSON.stringify(filteredTickets, null, 2);
  return (
    <div className="flex overflow-hidden justify-between">
      <div className="h-full bg-cyan-50 border-r border-cyan-200 flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-cyan-200">
          <h2 className="text-xl font-bold text-cyan-900">Team Admin</h2>
          <p className="text-sm text-cyan-600 mt-1">Management Dashboard</p>
        </div>
        {/* Navigation Menu */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActive(null)}
                className="w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors duration-200 bg-cyan-100 text-cyan-900 hover:bg-cyan-200 shadow-sm"
              >
                <Users className="w-5 h-5 mr-3" />
                <span className="font-medium">Team Overview</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActive("create")}
                className="w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors duration-200 bg-cyan-100 text-cyan-900 hover:bg-cyan-200 shadow-sm"
              >
                <UserPlus className="w-5 h-5 mr-3" />
                <span className="font-medium">Create User</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActive("search")}
                className="w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors duration-200 bg-cyan-100 text-cyan-900 hover:bg-cyan-200 shadow-sm"
              >
                <UserPlus className="w-5 h-5 mr-3" />
                <span className="font-medium">Search A member</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActive("search")}
                className="w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors duration-200 bg-cyan-100 text-cyan-900 hover:bg-cyan-200 shadow-sm"
              >
                <UserMinus className="w-5 h-5 mr-3" />
                <span className="font-medium">Remove a Member</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <main className="w-full h-[calc(100vh-64px)] overflow-y-auto mx-7  py-5">
        <h1 className="text-xl font-bold mb-4 text-cyan-900">Team Members</h1>
        <div className="">
          {filteredTickets?.length > 0 ? (
            <UserCard Userdata={filteredTickets} />
          ) : (
            <div className="flex justify-center items-center ">
              <p className="">NO Member Found</p>
            </div>
          )}
        </div>
      </main>
      <div className="w-[50%] p-6 bg-white border-l border-cyan-200">
        {active === "create" && <TeamFormCreate />}

        {active === "search" && (
          <SearchUser
            searchTeam={searchTeam}
            setSearchTeam={(e) => setSearchTeam(e.target.value)}
          />
        )}
      </div>
    </div>
  );
}

export default TeamPage;

//  {menuItems.map((item, index) => {
// const IconComponent = item.icon;
