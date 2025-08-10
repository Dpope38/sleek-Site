import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import toast from "react-hot-toast";
function DropdownMenu() {
  // const menuItems = [
  //   { label: "Admin", str: "i am" },
  //   { label: "Logout", str: "i am" },
  //   // { label: "Settings", href: "/settings" },
  // ];
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [auth, setAuth] = useAuth();
  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("token");
    toast.success("Logout successful");

    navigate("/");
  };

  const menuItems = [
    { label: auth.user?.name, str: auth.user?.role },
    { label: "Logout", str: logout },
    // { label: "Settings", href: "/settings" },
  ];

  return (
    <>
      <div className="flex flex-col relative mr-6 ml-5">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center focus:outline-none"
        >
          <span className="mr-1">{auth?.user.name}</span>
          <span>
            <ChevronDown />
          </span>
        </button>

        {isOpen && (
          <ul className="absolute z-10 top-10 mr-4 bg-white border rounded-md shadow-md text-gray-700 pt-1 mt-2 min-w-[140px]">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="px-4 space-y-1.5 py-2 hover:bg-gray-100 cursor-pointer"
              >
                <h1
                  onClick={item.label === "Logout" && (() => logout())}
                  className="block text-gray-700"
                >
                  {item.label}
                </h1>
                <hr className="text-gray-200" />
                <p className="text-l text-gray-500">{item.str}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default DropdownMenu;
