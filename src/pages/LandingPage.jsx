import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useCreateTicket } from "../fetching-mutating/fetchQueries";

import { motion, stagger, AnimatePresence } from "framer-motion";
import ITSplash from "../assets/spalsh-I.T.jpg";

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
function LandingPage() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [tickets, setTickets] = useState({
    name: "",
    email: "",
    title: "",
    description: "",
    priority: "LOW",
  });
  const createTicket = useCreateTicket();

  function handleForm(e) {
    e.preventDefault();
    if (
      !tickets.name ||
      !tickets.email ||
      !tickets.title ||
      !tickets.description
    ) {
      alert("Please fill in all fields.");
      console.log("Please fill in all fields.");
      return;
    }
    createTicket.mutate({
      name: tickets.name,
      email: tickets.email,
      title: tickets.title,
      description: tickets.description,
      priority: tickets.priority,
    });
    console.log("from creating tickets", tickets);
    setTickets({
      name: "",
      email: "",
      title: "",
      description: "",
      priority: "LOW",
    });
    setIsCreateModalOpen(false);
  }

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

  const heroVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6,
        duration: 1,
        when: "beforeChildren",
        delayChildren: stagger(0.6),
      },
    },
  };

  const heroChildren = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6,
      },
    },
  };

  return (
    <div className="min-h-screen  bg-gray-50">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 2 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-full mx-auto px-4 sm:px-6 h-[calc(100vh - 5rem)] z-100 bg-gray-50 fixed lg:px-8"
      >
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Ticket className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold text-gray-600">
              GreenSprings.
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#3D74B6",
                color: "#FCF8DD",
              }}
              onClick={() => setIsLoginModal(true)}
              className="text-gray-800 hover:text-gray-900  border border-blue-400  px-3 py-2 rounded-md  font-medium "
            >
              Admin Portal
              {console.log(isLoginModal)}
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#3D74B6",
                color: "#FCF8DD",
              }}
              onClick={() => setIsLoginModal(true)}
              className="text-gray-800 hover:text-gray-900  border border-blue-400  px-3 py-2 rounded-md  font-medium "
            >
              Agent Portal
            </motion.button>

            {/* Modal for Ticket */}
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700  transition-all duration-300"
            >
              Create Ticket
            </button>
          </div>
        </div>
      </motion.nav>
      <header className=" flex justify-between h-screen items-center w-full">
        <motion.section
          variants={heroVariant}
          initial="hidden"
          animate="visible"
          className="py-20 w-1/2 "
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-wrap">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Welcome to Greensprings <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  School IT/Maintenance Support Desk
                </span>
              </h1>
              <motion.p
                variants={heroChildren}
                className="text-xl text-wrap text-gray-600 mb-8 max-w-3xl mx-auto"
              >
                a support ticket system where you can log in any of your
                complaints/queries/enquiries.
              </motion.p>

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
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="w-1/2 flex  px-6 items-center relative "
        >
          <div className="flex items-center justify-center overflow-hidden">
            <img
              className="object-cover rounded-[12px]"
              style={{ height: "auto", width: "100%" }}
              src={ITSplash}
              alt="I.T Splash "
            />
          </div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl text-wrap font-bold text-gray-900 mb-4">
              The aim is to improve the customer experience and to efficiently
              resolve any service disruption.
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
            <span className="text-xl font-bold text-gray-900">Ticket</span>
          </div>
          <p className="text-center text-gray-600 mt-4">
            © GreenSprings School Ticket.
          </p>
        </div>
      </footer>
      <AnimatePresence>
        {isCreateModalOpen && (
          <CreateTicketModal
            key="create Ticket"
            onChange={(event) =>
              setTickets({
                ...tickets,
                [event.target.name]: event.target.value,
              })
            }
            value={tickets}
            onSubmit={handleForm}
            onClose={() => setIsCreateModalOpen(false)}
            isOpen={() => setIsCreateModalOpen(true)}
          />
        )}
      </AnimatePresence>
      {/* Login Modal */}
      <AnimatePresence>
        {isLoginModal && (
          <LoginForm
            key="login"
            onClose={() => setIsLoginModal(false)}
            isOpen={() => setIsLoginModal(true)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default LandingPage;
