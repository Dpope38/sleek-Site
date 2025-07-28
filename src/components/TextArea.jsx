import React from "react";
import { Image, FileText, Type, Video, Clock, MapPin } from "lucide-react";

function TextArea({ label, postText }) {
  return (
    <div className="w-full flex flex-col gap-y2">
      <div className="px-4 pt-4 pb-2 bg-white rounded-lg shadow-sm border border-gray-200">
        <label className=" block text-gray-700 font-medium mb-2">{label}</label>
        <textarea
          value="hallos"
          //   onChange={(e) => setPostText(e.target.value)}
          placeholder="Type your message here..."
          rows={4}
          cols={50}
          className="w-full h-32 text-lg text-gray-900 placeholder-gray-400 border-none outline-none resize-none bg-transparent"
          style={{ fontSize: "18px" }}
        />
      </div>

      {/* Bottom Section */}
      <div className="flex items-center justify-between px-4 pb-4">
        {/* Action Icons */}
        <div className="flex items-center  space-x-4">
          <button
            className={`px-6 py-2 rounded-[11px] mt-4 font-medium transition-all ${
              postText.trim()
                ? "bg-orange-500 hover:bg-orange-600 text-white shadow-sm"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            disabled={!postText.trim()}
          >
            Post
          </button>
        </div>

        {/* Post Button */}
      </div>
    </div>
  );
}

export default TextArea;
