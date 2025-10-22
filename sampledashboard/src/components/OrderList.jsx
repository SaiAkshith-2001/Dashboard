import React, { useContext, useState } from "react";
import {
  Plus,
  SlidersHorizontal,
  ArrowUpDown,
  Search,
  Calendar,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";
import { ThemeContext } from "../context/themeContext";

// Mock JSON data
const ordersData = {
  title: "Order List",
  orders: [
    {
      id: "#CM9801",
      user: {
        name: "Natali Craig",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
      statusColor: "blue",
    },
    {
      id: "#CM9802",
      user: {
        name: "Kate Morrison",
        avatar: "https://i.pravatar.cc/150?img=14",
      },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
      statusColor: "green",
    },
    {
      id: "#CM9803",
      user: {
        name: "Drew Cano",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
      statusColor: "cyan",
    },
    {
      id: "#CM9804",
      user: {
        name: "Orlando Diggs",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
      statusColor: "yellow",
      checked: true,
    },
    {
      id: "#CM9805",
      user: {
        name: "Andi Lane",
        avatar: "https://i.pravatar.cc/150?img=13",
      },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
      statusColor: "gray",
      hasIcon: true,
    },
    {
      id: "#CM9801",
      user: {
        name: "Natali Craig",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: "In Progress",
      statusColor: "blue",
    },
    {
      id: "#CM9802",
      user: {
        name: "Kate Morrison",
        avatar: "https://i.pravatar.cc/150?img=14",
      },
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: "Complete",
      statusColor: "green",
    },
    {
      id: "#CM9803",
      user: {
        name: "Drew Cano",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: "Pending",
      statusColor: "cyan",
    },
    {
      id: "#CM9804",
      user: {
        name: "Orlando Diggs",
        avatar: "https://i.pravatar.cc/150?img=12",
      },
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: "Approved",
      statusColor: "yellow",
    },
    {
      id: "#CM9805",
      user: {
        name: "Andi Lane",
        avatar: "https://i.pravatar.cc/150?img=13",
      },
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: "Rejected",
      statusColor: "gray",
    },
  ],
};

const OrderList = () => {
  const [selectedOrders, setSelectedOrders] = useState([3]); // Pre-select 4th order
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const { isDarkMode } = useContext(ThemeContext);

  const statusColors = {
    blue: "text-blue-600 bg-blue-50",
    green: "text-green-600 bg-green-50",
    cyan: "text-cyan-600 bg-cyan-50",
    yellow: "text-yellow-600 bg-yellow-50",
    gray: "text-gray-600 bg-gray-50",
  };

  const toggleSelectOrder = (index) => {
    setSelectedOrders((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleSelectAll = () => {
    if (selectedOrders.length === ordersData.orders.length) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(ordersData.orders.map((_, idx) => idx));
    }
  };

  return (
    <div
      className={`flex-1 overflow-y-auto  ${
        isDarkMode ? "bg-zinc-800 text-white" : "bg-gray-50"
      }`}
    >
      <div className="p-6">
        {/* Header */}
        <h1
          className={`text-2xl font-semibold ${
            isDarkMode ? "text-white" : "text-gray-900"
          } mb-6`}
        >
          {ordersData.title}
        </h1>

        {/* Action Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button
              className={`p-2.5 ${
                isDarkMode
                  ? "bg-zinc-800 hover:bg-zinc-700"
                  : "bg-white hover:bg-gray-100"
              } rounded-lg transition-colors`}
            >
              <Plus
                className={`w-5 h-5 ${
                  isDarkMode ? "text-gray-50" : "text-gray-600"
                }`}
              />
            </button>
            <button
              className={`p-2.5 ${
                isDarkMode
                  ? "bg-zinc-800 hover:bg-zinc-700"
                  : "bg-white hover:bg-gray-100"
              } rounded-lg transition-colors`}
            >
              <SlidersHorizontal
                className={`w-5 h-5 ${
                  isDarkMode ? "text-gray-50" : "text-gray-600"
                }`}
              />
            </button>
            <button
              className={`p-2.5 ${
                isDarkMode
                  ? "bg-zinc-800 hover:bg-zinc-700"
                  : "bg-white hover:bg-gray-100"
              } rounded-lg transition-colors`}
            >
              <ArrowUpDown
                className={`w-5 h-5 ${
                  isDarkMode ? "text-gray-50" : "text-gray-600"
                }`}
              />
            </button>
          </div>

          {/* Search */}
          <div className="relative w-80">
            <Search
              className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400`}
            />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 ${
                isDarkMode ? "bg-zinc-700" : "bg-gray-50"
              } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-gray-300`}
            />
          </div>
        </div>

        {/* Table */}
        <div
          className={`${
            isDarkMode ? "bg-zinc-800" : "bg-white"
          }  rounded-lg overflow-hidden`}
        >
          <table className="w-full">
            <thead
              className={`${
                isDarkMode ? "bg-zinc-800" : "bg-gray-50"
              } border-b border-gray-200`}
            >
              <tr>
                <th className="w-12 px-6 py-3">
                  <input
                    type="checkbox"
                    checked={selectedOrders.length === ordersData.orders.length}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </th>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium ${
                    isDarkMode ? "text-white" : "text-gray-500"
                  } uppercase tracking-wider`}
                >
                  Order ID
                </th>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium ${
                    isDarkMode ? "text-white" : "text-gray-500"
                  } uppercase tracking-wider`}
                >
                  User
                </th>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium ${
                    isDarkMode ? "text-white" : "text-gray-500"
                  } uppercase tracking-wider`}
                >
                  Project
                </th>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium ${
                    isDarkMode ? "text-white" : "text-gray-500"
                  } uppercase tracking-wider`}
                >
                  Address
                </th>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium ${
                    isDarkMode ? "text-white" : "text-gray-500"
                  } uppercase tracking-wider`}
                >
                  Date
                </th>
                <th
                  className={`px-6 py-3 text-left text-xs font-medium ${
                    isDarkMode ? "text-white" : "text-gray-500"
                  } uppercase tracking-wider`}
                >
                  Status
                </th>
                <th className="w-12 px-6 py-3"></th>
              </tr>
            </thead>
            <tbody
              className={`${
                isDarkMode ? "bg-zinc-800" : "bg-white"
              } divide-y divide-gray-200`}
            >
              {ordersData.orders.map((order, index) => (
                <tr
                  key={index}
                  className={`${
                    isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-50"
                  } transition-colors`}
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedOrders.includes(index)}
                      onChange={() => toggleSelectOrder(index)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`text-sm font-medium ${
                        isDarkMode ? " text-white" : " text-gray-900"
                      }`}
                    >
                      {order.id}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <img
                        src={order.user.avatar}
                        alt={order.user.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span
                        className={`text-sm  ${
                          isDarkMode ? " text-white" : " text-gray-900"
                        }`}
                      >
                        {order.user.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`text-sm  ${
                        isDarkMode ? " text-white" : " text-gray-900"
                      }`}
                    >
                      {order.project}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm  ${
                          isDarkMode ? " text-white" : " text-gray-900"
                        }`}
                      >
                        {order.address}
                      </span>
                      {order.hasIcon && (
                        <FileText
                          className={`w-4 h-4 ${
                            isDarkMode ? " text-white" : " text-gray-900"
                          }`}
                        />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div
                      className={`flex items-center gap-2 text-sm ${
                        isDarkMode ? " text-white" : " text-gray-900"
                      }`}
                    >
                      <Calendar
                        className={`w-4 h-4 ${
                          isDarkMode ? " text-white" : " text-gray-900"
                        }`}
                      />
                      {order.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        statusColors[order.statusColor]
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          order.statusColor === "blue"
                            ? "bg-blue-600"
                            : order.statusColor === "green"
                            ? "bg-green-600"
                            : order.statusColor === "cyan"
                            ? "bg-cyan-600"
                            : order.statusColor === "yellow"
                            ? "bg-yellow-600"
                            : "bg-gray-600"
                        }`}
                      ></span>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    {index === 4 && (
                      <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                        <MoreHorizontal className="w-5 h-5 text-gray-400" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-2 mt-6">
          <button
            className={`p-2 ${
              isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-100"
            } rounded-lg transition-colors disabled:opacity-50`}
          >
            <ChevronLeft
              className={`w-5 h-5 ${
                isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-100"
              }`}
            />
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                currentPage === page
                  ? `${
                      isDarkMode
                        ? "bg-zinc-700 text-white hover:bg-zinc-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-50"
                    }`
                  : `${
                      isDarkMode
                        ? "text-white hover:bg-zinc-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`
              }`}
            >
              {page}
            </button>
          ))}
          <button
            className={`p-2 hover:bg-gray-100 ${
              isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-100"
            } rounded-lg transition-colors`}
          >
            <ChevronRight
              className={`w-5 h-5 ${
                isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-100"
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
