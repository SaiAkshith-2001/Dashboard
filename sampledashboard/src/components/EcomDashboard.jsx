import React, { useContext, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { ThemeContext } from "../context/themeContext";

// Mock JSON data
const dashboardData = {
  title: "eCommerce",
  stats: [
    {
      id: 1,
      label: "Customers",
      value: "3,781",
      change: "+11.01%",
      trend: "up",
      bgColor: "bg-blue-50",
    },
    {
      id: 2,
      label: "Orders",
      value: "1,219",
      change: "-0.03%",
      trend: "down",
      bgColor: "bg-gray-50",
    },
    {
      id: 3,
      label: "Revenue",
      value: "$695",
      change: "+15.03%",
      trend: "up",
      bgColor: "bg-gray-50",
    },
    {
      id: 4,
      label: "Growth",
      value: "30.1%",
      change: "+6.08%",
      trend: "up",
      bgColor: "bg-blue-50",
    },
  ],
  projectionsData: [
    { month: "Jan", value: 18 },
    { month: "Feb", value: 22 },
    { month: "Mar", value: 19 },
    { month: "Apr", value: 24 },
    { month: "May", value: 17 },
    { month: "Jun", value: 23 },
  ],
  revenueData: [
    { month: "Jan", current: 15, previous: 12 },
    { month: "Feb", current: 18, previous: 20 },
    { month: "Mar", current: 12, previous: 18 },
    { month: "Apr", current: 20, previous: 15 },
    { month: "May", current: 15, previous: 22 },
    { month: "Jun", current: 22, previous: 20 },
  ],
  revenueComparison: {
    current: "$58,211",
    previous: "$68,768",
  },
  revenueByLocation: [
    { city: "New York", amount: "72K", coordinates: [40.7, -74.0] },
    { city: "San Francisco", amount: "39K", coordinates: [37.7, -122.4] },
    { city: "Sydney", amount: "25K", coordinates: [33.8, 151.2] },
    { city: "Singapore", amount: "61K", coordinates: [1.3, 103.8] },
  ],
  topSellingProducts: [
    {
      name: "ASOS Ridley High Waist",
      price: "$79.49",
      quantity: 82,
      amount: "$6,518.18",
    },
    {
      name: "Marco Lightweight Shirt",
      price: "$128.50",
      quantity: 37,
      amount: "$4,754.50",
    },
    {
      name: "Half Sleeve Shirt",
      price: "$39.99",
      quantity: 64,
      amount: "$2,559.36",
    },
    {
      name: "Lightweight Jacket",
      price: "$20.00",
      quantity: 184,
      amount: "$3,680.00",
    },
    { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
  ],
  totalSales: {
    total: "$300.00",
    channels: [
      { name: "Direct", value: 300.56, color: "#1e40af", percentage: "20.9%" },
      {
        name: "Affiliate",
        value: 135.18,
        color: "#6366f1",
        percentage: "23.3%",
      },
      {
        name: "Sponsored",
        value: 154.02,
        color: "#8b5cf6",
        percentage: "15.4%",
      },
      { name: "E-mail", value: 48.96, color: "#d1d5db", percentage: "7.9%" },
    ],
  },
};

const EcommerceDashboard = () => {
  const COLORS = ["#95A4FC", "#B1E3FF", "#BAEDBD", "#1C1C1C"];
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div
      className={`flex-1 bg-gray-50 overflow-y-auto ${
        isDarkMode ? "bg-zinc-800" : "bg-gray-50"
      }`}
    >
      <div className="p-6">
        {/* Page Title */}
        <h1
          className={`text-2xl font-semibold ${
            isDarkMode ? "text-white" : "text-gray-900"
          } mb-6`}
        >
          {dashboardData.title}
        </h1>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {dashboardData.stats.map((stat) => (
            <div
              key={stat.id}
              className={`${
                isDarkMode ? "bg-zinc-700" : stat.bgColor
              }  rounded-lg p-5`}
            >
              <p
                className={`text-xs font-medium mb-2 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stat.label}
              </p>
              <div className="flex items-end justify-between">
                <h3
                  className={`text-2xl font-semibold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {stat.value}
                </h3>
                <div
                  className={`flex items-center gap-1 text-xs font-medium ${
                    stat.trend === "up" ? "text-green-500" : "text-red-500"
                  }`}
                >
                  <span>{stat.change}</span>
                  {stat.trend === "up" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {/* Projections vs Actuals */}
          <div
            className={`${
              isDarkMode ? "bg-zinc-700" : "bg-white"
            } rounded-lg p-5 shadow-sm`}
          >
            <h3
              className={`${
                isDarkMode ? "text-white" : "text-gray-900"
              } text-sm font-semibold mb-4`}
            >
              Projections vs Actuals
            </h3>
            <ResponsiveContainer width="100%" height={140}>
              <BarChart data={dashboardData.projectionsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11 }}
                  stroke="#9ca3af"
                />
                <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                    border: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                    borderRadius: "0.5rem",
                    color: isDarkMode ? "#ffffff" : "#000000",
                  }}
                  cursor={{ fill: "rgba(59, 130, 246, 0.1)" }}
                />
                <Bar dataKey="value" fill="#93c5fd" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Chart */}
          <div
            className={`${
              isDarkMode ? "bg-zinc-700" : "bg-white"
            } rounded-lg p-5 shadow-sm lg:col-span-2`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3
                className={`text-sm font-semibold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Revenue
              </h3>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <span
                    className={`font-medium ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Current Week
                  </span>
                  <span
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {dashboardData.revenueComparison.current}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`font-medium ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Previous Week
                  </span>
                  <span
                    className={`font-semibold ${
                      isDarkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {dashboardData.revenueComparison.previous}
                  </span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={140}>
              <LineChart data={dashboardData.revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="month"
                  tick={{ fontSize: 11 }}
                  stroke="#9ca3af"
                />
                <YAxis tick={{ fontSize: 11 }} stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                    border: `1px solid ${isDarkMode ? "#374151" : "#e5e7eb"}`,
                    borderRadius: "0.5rem",
                    color: isDarkMode ? "#ffffff" : "#000000",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="previous"
                  stroke="#000000"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-3 gap-4">
          {/* Top Selling Products */}
          <div
            className={` ${
              isDarkMode ? "bg-zinc-700 text-white" : "bg-white"
            }  rounded-lg p-5 shadow-sm col-span-2`}
          >
            <h3 className="text-sm font-semibold mb-4">Top Selling Products</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th
                      className={`text-left text-xs font-medium ${
                        isDarkMode ? "bg-zinc-700 text-white" : "text-gray-500"
                      } pb-3`}
                    >
                      Name
                    </th>
                    <th
                      className={`text-left text-xs font-medium ${
                        isDarkMode ? "bg-zinc-700 text-white" : "text-gray-500"
                      } pb-3`}
                    >
                      Price
                    </th>
                    <th
                      className={`text-left text-xs font-medium ${
                        isDarkMode ? "bg-zinc-700 text-white" : "text-gray-500"
                      } pb-3`}
                    >
                      Quantity
                    </th>
                    <th
                      className={`text-left text-xs font-medium ${
                        isDarkMode ? "bg-zinc-700 text-white" : "text-gray-500"
                      } pb-3`}
                    >
                      Amount
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.topSellingProducts.map((product, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-100 last:border-0"
                    >
                      <td
                        className={`py-3 text-sm ${
                          isDarkMode
                            ? "bg-zinc-700 text-white"
                            : "text-gray-900"
                        } `}
                      >
                        {product.name}
                      </td>
                      <td
                        className={`py-3 text-sm ${
                          isDarkMode
                            ? "bg-zinc-700 text-white"
                            : "text-gray-600"
                        } `}
                      >
                        {product.price}
                      </td>
                      <td
                        className={`py-3 text-sm ${
                          isDarkMode
                            ? "bg-zinc-700 text-white"
                            : "text-gray-600"
                        } `}
                      >
                        {product.quantity}
                      </td>
                      <td
                        className={`py-3 text-sm ${
                          isDarkMode
                            ? "bg-zinc-700 text-white"
                            : "text-gray-600"
                        } `}
                      >
                        {product.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Revenue by Location & Total Sales */}
          <div className="space-y-4">
            {/* Revenue by Location */}
            <div
              className={`${
                isDarkMode ? "bg-zinc-700 text-white" : "text-gray-600"
              } rounded-lg p-5 shadow-sm`}
            >
              <h3
                className={`text-sm font-semibold ${
                  isDarkMode ? "bg-zinc-700 text-white" : "text-gray-600"
                } mb-4`}
              >
                Revenue by Location
              </h3>
              <div
                className={`relative h-32 ${
                  isDarkMode
                    ? "bg-zinc-700 text-white"
                    : "bg-gray-100 text-gray-600"
                } rounded-lg mb-4 overflow-hidden`}
              >
                <svg viewBox="0 0 200 100" className="w-full h-full">
                  <circle cx="180" cy="20" r="3" fill="#3b82f6" />
                  <circle cx="40" cy="45" r="3" fill="#3b82f6" />
                  <circle cx="160" cy="75" r="3" fill="#3b82f6" />
                  <circle cx="100" cy="85" r="3" fill="#3b82f6" />
                </svg>
              </div>
              <div className="space-y-2">
                {dashboardData.revenueByLocation.map((location, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-sm"
                  >
                    <span
                      className={`${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {location.city}
                    </span>
                    <span
                      className={`font-medium ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {location.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Sales */}
            <div
              className={`rounded-lg p-5 shadow-sm  ${
                isDarkMode ? "bg-zinc-700" : "bg-gray-50"
              }`}
            >
              <h3
                className={`${
                  isDarkMode ? "text-white" : "text-gray-900"
                } text-sm font-semibold mb-4`}
              >
                Total Sales
              </h3>
              <div className="relative">
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie
                      data={dashboardData.totalSales.channels}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {dashboardData.totalSales.channels.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                      <span className="p-1 border-8">
                        <Tooltip
                          contentStyle={{
                            backgroundColor: isDarkMode ? "#1f2937" : "#ffffff",
                            border: `1px solid ${
                              isDarkMode ? "#374151" : "#e5e7eb"
                            }`,
                            borderRadius: "0.5rem",
                            color: isDarkMode ? "#fff" : "#000",
                          }}
                          cursor={{ fill: "rgba(59, 130, 246, 0.1)" }}
                        />
                      </span>
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 space-y-2">
                {dashboardData.totalSales.channels.map((channel, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between text-xs"
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: COLORS[idx] }}
                      ></div>
                      <span
                        className={isDarkMode ? "text-white" : "text-gray-900"}
                      >
                        {channel.name}
                      </span>
                    </div>
                    <span
                      className={`font-medium ${
                        isDarkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      ${channel.value.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceDashboard;
