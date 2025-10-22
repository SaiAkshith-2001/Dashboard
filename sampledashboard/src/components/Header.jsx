import React, { useContext, useState } from "react";
import { Star, Sun, Moon, Clock, Bell } from "lucide-react";
import { ThemeContext } from "../context/themeContext";

// Mock JSON data structure
const headerData = {
  breadcrumbs: [
    { id: 1, label: "Dashboards", link: "#" },
    { id: 2, label: "Default", link: "#", active: true },
  ],
  search: {
    placeholder: "Search",
    shortcut: "⌘/",
  },
};

const Header = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      className={`w-full h-16 border-b border-gray-200 flex items-center justify-between px-6  ${
        isDarkMode ? "bg-zinc-800 text-white" : "bg-white"
      }`}
    >
      {/* Left Section - Menu, Star, and Breadcrumbs */}
      <div className="flex items-center gap-4">
        {/* Sidebar Toggle */}
        <button
          className={`p-2 ${
            isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-100"
          }  rounded-lg transition-colors duration-150 cursor-pointer`}
          aria-label="Toggle sidebar"
        >
          <svg
            fill={`${isDarkMode ? "#FFF" : "#000000"}`}
            width="24px"
            height="24px"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 7.7851 45.8008 C 5.4413 45.8008 4.1288 44.5586 4.1288 42.1211 L 4.1288 13.8789 C 4.1288 11.4414 5.4413 10.1992 7.7851 10.1992 L 18.2148 10.1992 L 18.2148 45.8008 Z M 48.2147 10.1992 C 50.5350 10.1992 51.8708 11.4414 51.8708 13.8789 L 51.8708 42.1211 C 51.8708 44.5586 50.5350 45.8008 48.2147 45.8008 L 21.8944 45.8008 L 21.8944 10.1992 Z M 13.7148 18.8945 C 14.4179 18.8945 15.0507 18.2617 15.0507 17.5820 C 15.0507 16.8789 14.4179 16.2696 13.7148 16.2696 L 8.6757 16.2696 C 7.9726 16.2696 7.3632 16.8789 7.3632 17.5820 C 7.3632 18.2617 7.9726 18.8945 8.6757 18.8945 Z M 13.7148 24.9649 C 14.4179 24.9649 15.0507 24.3320 15.0507 23.6289 C 15.0507 22.9258 14.4179 22.3398 13.7148 22.3398 L 8.6757 22.3398 C 7.9726 22.3398 7.3632 22.9258 7.3632 23.6289 C 7.3632 24.3320 7.9726 24.9649 8.6757 24.9649 Z M 13.7148 31.0118 C 14.4179 31.0118 15.0507 30.4258 15.0507 29.7227 C 15.0507 29.0196 14.4179 28.4102 13.7148 28.4102 L 8.6757 28.4102 C 7.9726 28.4102 7.3632 29.0196 7.3632 29.7227 C 7.3632 30.4258 7.9726 31.0118 8.6757 31.0118 Z"></path>
            </g>
          </svg>
        </button>

        {/* Favorite */}
        <button
          className={`p-2 ${
            isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-100"
          }  rounded-lg transition-colors duration-150`}
          aria-label="Add to favorites"
        >
          <Star
            className={`w-5 h-5 cursor-pointer ${
              isDarkMode ? "text-white" : "text-gray-600"
            }`}
          />
        </button>

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2" aria-label="Breadcrumb">
          {headerData.breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.id}>
              {index > 0 && <span className="text-gray-400">/</span>}
              <a
                href={crumb.link}
                className={`text-sm p-2 rounded-md font-medium transition-colors duration-150 ${
                  isDarkMode
                    ? crumb.active
                      ? "text-gray-50 "
                      : "text-gray-50 hover:bg-zinc-700"
                    : crumb.active
                    ? "text-gray-900"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                {crumb.label}
              </a>
            </React.Fragment>
          ))}
        </nav>
      </div>

      {/* Right Section - Search and Action Icons */}
      <div className="flex items-center gap-3">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder={headerData.search.placeholder}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className={`w-64 h-9 pl-10 pr-12 text-sm rounded-lg transition-all duration-150 ${
              isDarkMode ? "bg-zinc-700" : "bg-gray-50"
            } rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-gray-300`}
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 font-medium">
            {headerData.search.shortcut}
          </span>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200"></div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 ${
            isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-100"
          } rounded-lg transition-colors duration-150 cursor-pointer`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <Moon
              className={`w-5 h-5 cursor-pointer ${
                isDarkMode ? "text-white" : "text-gray-600"
              }`}
            />
          ) : (
            <Sun
              className={`w-5 h-5 cursor-pointer ${
                isDarkMode ? "text-white" : "text-gray-600"
              }`}
            />
          )}
        </button>

        {/* History/Recent */}
        <button
          className={`p-2 ${
            isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-100"
          }  rounded-lg transition-colors duration-150`}
          aria-label="History"
        >
          <Clock
            className={`w-5 h-5 cursor-pointer ${
              isDarkMode ? "text-white" : "text-gray-600"
            }`}
          />
        </button>

        {/* Notifications */}
        <button
          className={`p-2 ${
            isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-100"
          }  rounded-lg transition-colors duration-150 relative`}
          aria-label="Notifications"
        >
          <Bell
            className={`w-5 h-5 cursor-pointer ${
              isDarkMode ? "text-white" : "text-gray-600"
            }`}
          />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Fullscreen */}
        <button
          className={`p-2 cursor-pointer ${
            isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-100"
          }  rounded-lg transition-colors duration-150`}
          aria-label="Toggle fullscreen"
        >
          <svg
            fill={`${isDarkMode ? "#FFF" : "#000000"}`}
            width="24px"
            height="24px"
            viewBox="0 0 56 56"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier"></g>
            <g id="SVGRepo_tracerCarrier"></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 7.7851 45.8008 C 5.4413 45.8008 4.1288 44.5586 4.1288 42.1211 L 4.1288 13.8789 C 4.1288 11.4414 5.4413 10.1992 7.7851 10.1992 L 18.2148 10.1992 L 18.2148 45.8008 Z M 48.2147 10.1992 C 50.5350 10.1992 51.8708 11.4414 51.8708 13.8789 L 51.8708 42.1211 C 51.8708 44.5586 50.5350 45.8008 48.2147 45.8008 L 21.8944 45.8008 L 21.8944 10.1992 Z M 13.7148 18.8945 C 14.4179 18.8945 15.0507 18.2617 15.0507 17.5820 C 15.0507 16.8789 14.4179 16.2696 13.7148 16.2696 L 8.6757 16.2696 C 7.9726 16.2696 7.3632 16.8789 7.3632 17.5820 C 7.3632 18.2617 7.9726 18.8945 8.6757 18.8945 Z M 13.7148 24.9649 C 14.4179 24.9649 15.0507 24.3320 15.0507 23.6289 C 15.0507 22.9258 14.4179 22.3398 13.7148 22.3398 L 8.6757 22.3398 C 7.9726 22.3398 7.3632 22.9258 7.3632 23.6289 C 7.3632 24.3320 7.9726 24.9649 8.6757 24.9649 Z M 13.7148 31.0118 C 14.4179 31.0118 15.0507 30.4258 15.0507 29.7227 C 15.0507 29.0196 14.4179 28.4102 13.7148 28.4102 L 8.6757 28.4102 C 7.9726 28.4102 7.3632 29.0196 7.3632 29.7227 C 7.3632 30.4258 7.9726 31.0118 8.6757 31.0118 Z"></path>
            </g>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
