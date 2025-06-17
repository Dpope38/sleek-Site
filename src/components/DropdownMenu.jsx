import { useState } from "react";
import { ChevronDown } from "lucide-react";
function DropdownMenu() {
  // const menuItems = [
  //   { label: "Admin", str: "i am" },
  //   { label: "Logout", str: "i am" },
  //   // { label: "Settings", href: "/settings" },
  // ];
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Admin", str: "I am Admin" },
    { label: "Logout", str: "I am Logout" },
    // { label: "Settings", href: "/settings" },
  ];

  return (
    <>
      <div className="flex flex-col relative mr-6 ml-5">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center focus:outline-none"
        >
          <span className="mr-1">Dropdown</span>
          <span>
            <ChevronDown />
          </span>
        </button>

        {isOpen && (
          <ul className="absolute z-10 top-10 mr-4 bg-white border rounded-md shadow-md text-gray-700 pt-1 mt-2 min-w-[140px]">
            {menuItems.map((item, i) => (
              <li
                key={i}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <h1 className="block text-gray-700">{item.label}</h1>
                <p className="text-xs text-gray-500">{item.str}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default DropdownMenu;
