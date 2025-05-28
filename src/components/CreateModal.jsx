import React, { useState } from "react";
import { X } from "lucide-react";

const CreateTicketModal = ({ isOpen, onClose, onSubmit }) => {
  //   const [formData, setFormData] = useState({
  //     title: '',
  //     description: '',
  //     priority: 'medium',
  //     customer: ''
  //   });

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const newTicket = {
  //       id: Date.now().toString(),
  //       ...formData,
  //       status: 'open',
  //       createdAt: new Date().toISOString(),
  //       updatedAt: new Date().toISOString()
  //     };
  //     onSubmit(newTicket);
  //     setFormData({ title: '', description: '', priority: 'medium', customer: '' });
  //     onClose();
  //   };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-linear-to-r from-green-200 to-red-200  flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            Create New Ticket
          </h2>
          <button className="text-gray-400 hover:text-gray-600"></button>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer Name
            </label>
            <input
              type="text"
              required
              // value={formData.customer}
              // onChange={(e) =>
              // setFormData({ ...formData, customer: e.target.value })
              // }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              required
              // value={formData.title}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              required
              rows={4}
              // value={formData.description}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Priority
            </label>
            <select
              // value={formData.priority}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="urgent">Urgent</option>
            </select>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              // onClick={onClose}
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
    </div>
  );
};

export default CreateTicketModal;
