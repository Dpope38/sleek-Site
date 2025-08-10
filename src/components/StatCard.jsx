import React from "react";
import { ArrowUpRight, ArrowDownRight, Minus, TrendingUp } from "lucide-react";
import { cn } from "../utility/cn.js";
import { nav } from "framer-motion/client";

const StatsCard = ({
  title,
  value,
  change,
  changeType,
  icon: CustomIcon,
  color,
}) => {
  const getColorClasses = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-50 border-blue-200 text-blue-600";
      case "green":
        return "bg-green-50 border-green-200 text-green-600";
      case "yellow":
        return "bg-yellow-50 border-yellow-200 text-yellow-600";
      case "red":
        return "bg-red-50 border-red-200 text-red-600";
      case "purple":
        return "bg-purple-50 border-purple-200 text-purple-600";
      default:
        return "bg-blue-50 border-blue-200 text-blue-600";
    }
  };

  const getBackgroundClasses = cn({
    "bg-blue-700": title === "Total Tickets",
    "bg-yellow-700": title === "Open Tickets",
    "bg-green-700": title === "Resolved Tickets",
  });

  const getChangeColor = (type) => {
    switch (type) {
      case "positive":
        return "text-white";
      case "negative":
        return "text-red-600";
      case "neutral":
        return "text-gray-600";
      default:
        return "text-gray-600";
    }
  };

  const getChangeIcon = (type) => {
    switch (type) {
      case "positive":
        return <ArrowUpRight className="w-4 h-4 inline ml-1" />;
      case "negative":
        return <ArrowDownRight className="w-4 h-4 inline ml-1" />;
      case "neutral":
        return <Minus className="w-4 h-4 inline ml-1" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`rounded-[20px] border-gray-200 border-2 p-6 hover:shadow-md transition-all duration-200 ${getBackgroundClasses}`}
    >
      <div className="flex items-center  justify-between">
        <div className="flex-1">
          <p className="text-sm  font-poppins font-bold text-gray-50 mb-1">
            {title}
          </p>
          <p className="text-3xl font-bold text-gray-100 mb-2">{value}</p>
          {change && (
            <p
              className={`text-sm font-medium flex items-center ${getChangeColor(
                changeType
              )}`}
            >
              {change}
              {getChangeIcon(changeType)}
            </p>
          )}
        </div>

        <div
          className={`w-12 h-12 rounded-lg border flex items-center justify-center ${getColorClasses(
            color
          )}`}
        >
          {CustomIcon ? (
            <CustomIcon className="w-6 h-6" />
          ) : (
            <TrendingUp className="w-6 h-6" />
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
