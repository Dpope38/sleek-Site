import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

import {
  ArrowRight,
  Ticket,
  Users,
  BarChart3,
  Shield,
  Zap,
  HeadphonesIcon,
} from "lucide-react";
import CreateTicketModal from "../components/CreateModal";
// import { NavLink } from "react-router-dom";
function LandingPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [role, setRole] = useState("");
  // const []
  // const [tickets, setTickets] = useState([]);

  //    const handleCreateTicket = (newTicket) => {
  //     setTickets([newTicket, ...tickets]);
  //   };

  const features = [
    {
      icon: Ticket,
      title: "Smart Ticket Management",
      description:
        "Organize, prioritize, and track support tickets with intelligent automation and routing.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Enable seamless collaboration between agents with shared workspaces and real-time updates.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Get insights into your support performance with detailed reports and analytics dashboards.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Enterprise-grade security with 99.9% uptime guarantee and data encryption.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Respond to customers faster with automated workflows and smart response suggestions.",
    },
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support to help you get the most out of TicketFlow.",
    },
  ];
  return (
    <div className="min-h-screen  bg-linear-to-r from-blue-700 to-blue-400">
      {/* Navigation */}
      <nav className="bg-cyan-200 border-b border-b-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold text-gray-900">
                TicketFlow
              </span>
            </div>

            <div className="flex items-center space-x-4">
              {/* <Link
                to="/admin"
                className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
              >
                Admin Portal
              </Link> */}

              <button
                onClick={() => setIsLoginModal(true)}
                className="text-gray-500 hover:text-gray-900 font-medium transition-colors"
              >
                Admin Portal
                {console.log(isLoginModal)}
              </button>
              {/* 
              <Link
                to="/agent"
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Agent Portal
              </Link> */}

              <button
                onClick={() => setIsLoginModal(true)}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
              >
                Agent Portal
              </button>

              {/* Modal for Ticket */}
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700  transition-all duration-300"
              >
                Submit Ticket
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              lorem Ipsom
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Support
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              voluptates, possimus sint vero maiores illum fuga cum nisi
              corporis iure officiis
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                // onClick={}
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Thoughts
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <div
                to="/admin"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                thoughts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything you need to excel at customer support
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features designed to help your team deliver outstanding
              customer experiences at scale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Ticket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">TicketFlow</span>
          </div>
          <p className="text-center text-gray-600 mt-4">
            © 2024 TicketFlow. All rights reserved.
          </p>
        </div>
      </footer>

      {isCreateModalOpen && (
        <CreateTicketModal
          onClose={() => setIsCreateModalOpen(false)}
          isOpen={() => setIsCreateModalOpen(true)}
        />
      )}
      {isLoginModal && (
        <LoginForm
          onClose={() => setIsLoginModal(false)}
          isOpen={() => setIsLoginModal(true)}
        />
      )}
    </div>
  );
}

export default LandingPage;
