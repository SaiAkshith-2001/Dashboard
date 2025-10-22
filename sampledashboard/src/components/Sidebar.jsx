import React, { useContext, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  ShoppingCart,
  FolderKanban,
  GraduationCap,
  User,
  FileText,
  Building2,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { ThemeContext } from "../context/themeContext";

// Mock JSON data structure
const navigationData = {
  user: "ByeWind",
  sections: [
    {
      id: "favorites",
      title: "Favorites",
      type: "header",
    },
    {
      id: "overview",
      title: "Overview",
      type: "link",
      icon: "overview",
    },
    {
      id: "projects",
      title: "Projects",
      type: "link",
      icon: "projects",
    },
    {
      id: "dashboards",
      title: "Dashboards",
      type: "header",
    },
    {
      id: "default",
      title: "Default",
      type: "link",
      icon: "dashboard",
      active: true,
    },
    {
      id: "ecommerce",
      title: "eCommerce",
      type: "link",
      icon: "ecommerce",
    },
    {
      id: "projects-dash",
      title: "Projects",
      type: "link",
      icon: "folder",
    },
    {
      id: "online-courses",
      title: "Online Courses",
      type: "link",
      icon: "courses",
    },
    {
      id: "pages",
      title: "Pages",
      type: "header",
    },
    {
      id: "user-profile",
      title: "User Profile",
      type: "accordion",
      icon: "user",
      children: [
        { id: "overview-sub", title: "Overview" },
        { id: "projects-sub", title: "Projects" },
        { id: "campaigns", title: "Campaigns" },
        { id: "documents", title: "Documents" },
        { id: "followers", title: "Followers" },
      ],
    },
    {
      id: "account",
      title: "Account",
      type: "link",
      icon: "account",
    },
    {
      id: "corporate",
      title: "Corporate",
      type: "link",
      icon: "corporate",
    },
    {
      id: "blog",
      title: "Blog",
      type: "link",
      icon: "blog",
    },
    {
      id: "social",
      title: "Social",
      type: "link",
      icon: "social",
    },
  ],
};

const iconMap = {
  overview: LayoutDashboard,
  projects: FolderKanban,
  dashboard: LayoutDashboard,
  ecommerce: ShoppingCart,
  folder: FolderKanban,
  courses: GraduationCap,
  user: User,
  account: FileText,
  corporate: Building2,
  blog: BookOpen,
  social: MessageSquare,
};

const Sidebar = () => {
  const [openAccordions, setOpenAccordions] = useState({});
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);
  const toggleAccordion = (id) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const renderIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? (
      <IconComponent
        className={`w-5 h-5 ${isDarkMode ? "text-white" : "text-gray-600"}`}
      />
    ) : null;
  };

  const renderNavItem = (item) => {
    if (item.type === "header") {
      return (
        <div
          key={item.id}
          className={`px-4 py-2 text-xs font-semibold ${
            isDarkMode ? "text-white" : "text-gray-900"
          } uppercase tracking-wider mt-4 first:mt-0`}
        >
          {item.title}
        </div>
      );
    }

    if (item.type === "accordion") {
      const isOpen = openAccordions[item.id];
      return (
        <div key={item.id} className="mb-1">
          <button
            onClick={() => toggleAccordion(item.id)}
            className={`w-full flex items-center justify-between px-4 py-2.5 
                ${
                  isDarkMode
                    ? " text-white hover:bg-zinc-700"
                    : "text-gray-700 hover:bg-gray-100"
                } rounded-lg transition-colors duration-150 group`}
          >
            <div className="flex items-center gap-3">
              {isOpen ? (
                <ChevronDown className="w-4 h-4 text-gray-400" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
              <span className="text-gray-600 group-hover:text-gray-900">
                {renderIcon(item.icon)}
              </span>
              <span className="text-sm font-medium">{item.title}</span>
            </div>
          </button>

          {isOpen && (
            <div className="ml-8 mt-1 space-y-1">
              {item.children.map((child) => (
                <a
                  key={child.id}
                  href="#"
                  className={`block px-4 py-2 text-sm ${
                    isDarkMode
                      ? "bg-zinc-800 hover:bg-zinc-700 text-white"
                      : " text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  } rounded-lg transition-colors duration-150`}
                >
                  {child.title}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    if (item.type === "link") {
      return (
        <a
          key={item.id}
          href="#"
          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors duration-150 mb-1 group ${
            isDarkMode
              ? item.active
                ? "bg-zinc-700 text-white  hover:bg-zinc-700"
                : "hover:bg-zinc-700 text-white"
              : item.active
              ? "text-gray-900"
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          <span
            className={`${
              item.active
                ? "text-gray-900"
                : "text-gray-600 group-hover:text-gray-900"
            }`}
          >
            {renderIcon(item.icon)}
          </span>
          <span className="text-sm font-medium">{item.title}</span>
        </a>
      );
    }

    return null;
  };

  return (
    <div
      className={`${
        isSideBarOpen ? "w-64" : "w-0"
      }  h-screen  border-r border-gray-200 flex flex-col overflow-hidden ${
        isDarkMode ? "bg-zinc-800 text-white" : "bg-white"
      }`}
    >
      {/* User Header */}
      <div className="flex items-center gap-3 px-4 py-5">
        <div
          className={`w-8 h-8 ${
            isDarkMode ? "bg-white text-black" : "bg-zinc-800 text-white"
          } rounded-full flex items-center justify-center font-semibold text-sm`}
        >
          {navigationData.user.charAt(0)}
        </div>
        <span
          className={`font-semibold ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {navigationData.user}
        </span>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-6 px-4 py-3">
        <button
          className={`text-sm font-medium ${
            isDarkMode ? " text-white hover:bg-zinc-700" : "hover:bg-gray-100 "
          } p-2 rounded-lg cursor-pointer`}
        >
          Favorites
        </button>
        <button
          className={`text-sm font-medium ${
            isDarkMode ? " text-white hover:bg-zinc-700" : "hover:bg-gray-100 "
          } p-2 rounded-lg cursor-pointer`}
        >
          Recently
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1  overflow-y-auto py-4 px-2">
        {navigationData.sections.map((item) => renderNavItem(item))}
      </nav>
    </div>
  );
};

export default Sidebar;
