import {cn} from "./cn.js"

const getStatusBadge = (status) => {
  return cn(`${status}`, {
    "bg-green-100  px-2  border border-gray-300 hover:bg-green-200":
      status === "RESOLVED",
    "bg-yellow-100  px-2 border border-gray-300 hover:bg-yellow-200":
      status === "PENDING",
    "bg-red-100 px-2  border border-gray-200 hover:bg-red-200":
      status === "OPEN",
    "bg-gray-100  px-2 border border-gray-300 hover:bg-gray-200":
      status === "unassigned",
  });
};

export default getStatusBadge