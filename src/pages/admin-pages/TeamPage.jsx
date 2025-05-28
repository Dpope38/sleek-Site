import { useState } from "react";
import { Info } from "lucide-react";
const usersData = [
  {
    id: 1,
    name: "Maribel_Koss",
    username: "@maribelk",
    avatar: "https://i.pravatar.cc/100?img=1",
    subscribed: "Oct 01, 2022",
    renew: null,
    renewNote: "Expires soon",
    price: "$3.00",
    status: "active",
  },
  {
    id: 2,
    name: "Constantin.Morar76",
    username: "@constantin.",
    avatar: "https://i.pravatar.cc/100?img=2",
    subscribed: "Sep 02, 2022",
    renew: "Apr 17, 2023",
    renewNote: "chicken",
    price: "$7.00",
    status: "active",
  },
  {
    id: 3,
    name: "Jerrold84",
    username: "@jerrold84",
    avatar: "https://i.pravatar.cc/100?img=3",
    subscribed: "Oct 01, 2022",
    renew: null,
    renewNote: null,
    price: "$4.00",
    status: "active",
  },
  {
    id: 4,
    name: "Kali40",
    username: "@kaliunder",
    avatar: "https://i.pravatar.cc/100?img=4",
    subscribed: "Nov 17, 2022",
    renew: null,
    renewNote: null,
    price: "$7.00",
    status: "inactive",
  },
];

function TeamPage() {
  const [tab, setTab] = useState("active");

  const filteredUser = usersData.filter((user) => (user.status = tab));

  return (
    <div className="py-7 px-6">
      <h1 className="text-3xl font-bold">Teams</h1>
      <div className="mt-3">
        <button
          className="cursor-pointer bg-gradient-to-b focus:outline-offset-2 focus:outline-2 focus:outline-blue-500  from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group"
          onClick={() => setTab("active")}
        >
          <div className="relative overflow-hidden">
            <p className="group-hover:-translate-y-7 font-bold duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Active Member
            </p>
            <p className="absolute font-bold top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              70 members
            </p>
          </div>
        </button>

        <button className=" mx-2.5 cursor-pointer bg-gradient-to-b from-indigo-500 to-indigo-600 shadow-[0px_4px_32px_0_rgba(99,102,241,.70)] px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white focus:outline-offset-2 focus:outline-2 focus:outline-blue-500  font-medium group">
          <div className="relative overflow-hidden">
            <p className="group-hover:-translate-y-7 font-bold duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              Inactive Members
            </p>
            <p className="absolute font-bold top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              70 members
            </p>
          </div>
        </button>
        {/* User Cards */}
        <div className="mt-6 space-y-4">
          {filteredUser.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
            >
              {/* user Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-800 flex items-center gap-1">
                    {user.name}
                    <span className="text-blue-500">✔</span>
                  </div>
                  <p className="text-sm text-gray-500">{user.username}</p>
                </div>
              </div>
              {/* // *Date and Price */}

              <div className="flex items-center gap-10 text-2xl text-gray-700">
                <div>
                  <p className="font-medium text-gray-500">Renew Date</p>
                  <p className="flex items-center gap-1">
                    {user.renew}
                    {user.renewNote && (
                      <span className="text-yellow-600 flex items-center text-xs">
                        <Info className="w-4 h-4" />
                        {user.renewNote}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
