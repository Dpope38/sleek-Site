// import React, { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

const modalVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      // delay: 0.6,
      duration: 0.4,
    },
    scale: 1,
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

const CreateTicketModal = ({ isOpen, onClose, onSubmit, onChange, value }) => {
  if (!isOpen) return null;
  // No local state here; all state and handlers come from parent via props.
  return (
    <motion.div
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0  bg-black/60 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-poppins font-semibold text-black">
            Create New Ticket
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-900"
          >
            <p className="text-4xl font-bold ">x</p>
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-poppins font-medium text-gray-800 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={value.name}
              onChange={onChange}
              name="name" // Assuming 'name' is a field in the ticket object
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-poppins font-medium text-gray-800 mb-1">
              Email
            </label>
            <input
              type="text"
              value={value.email}
              onChange={onChange}
              name="email" // Assuming 'email' is a field in the ticket object
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-poppins font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              required
              name="title" // Assuming 'title' is a field in the ticket object
              value={value.title}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm  font-poppins font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              required
              name="description" // Assuming 'description' is a field in the ticket object
              rows={4}
              value={value.description}
              onChange={onChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-poppins font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              value={value.priority}
              onChange={onChange}
              name="priority" // Assuming 'priority' is a field in the ticket object
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="LOW">LOW</option>
              <option value="MEDIUM">MEDIUM</option>
              <option value="HIGH">HIGH</option>
              <option value="URGENT">URGENT</option>
            </select>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors"
            >
              Create Ticket
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default CreateTicketModal;
