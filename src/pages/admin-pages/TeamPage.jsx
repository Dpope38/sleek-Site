import { useState } from "react";
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
} from "lucide-react";
import UserCard from "../../components/UserCard.jsx";
import TeamFormCreate from "../../components/TeamFormCreate.jsx";
import SearchUser from "../../components/SearchUser.jsx";

import { useFetchUsers } from "../../fetching-mutating/userQuery.js";

function TeamPage() {
  const useData = useFetchUsers();
  const [active, setActive] = useState(null);
  // if (useData) return JSON.stringify(useData?.data?.data, null, 2);

  return (
    <div className="flex  justify-between  ">
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
          </ul>
        </nav>
      </div>
      <main className="w-full  overflow-y-auto py-5">
        <UserCard Userdata={useData?.data?.data} />
      </main>
      {active === "create" && <TeamFormCreate />}
      {active === "search" && <SearchUser />}
    </div>
  );
}

export default TeamPage;

//  {menuItems.map((item, index) => {
// const IconComponent = item.icon;
