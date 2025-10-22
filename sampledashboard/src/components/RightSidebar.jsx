import React, { useContext, useState } from "react";
import {
  Bell,
  UserPlus,
  Bug,
  Radio,
  FileText,
  Edit,
  Trash2,
} from "lucide-react";
import { ThemeContext } from "../context/themeContext";
import { sidebarData } from "../assests/mockData";

const iconMap = {
  bug: Bug,
  user: UserPlus,
  radio: Radio,
  file: FileText,
  edit: Edit,
  trash: Trash2,
};

const RightSidebar = () => {
  const [isRightSideBarOpen, setIsRightSideBarOpen] = useState(true);
  const { isDarkMode } = useContext(ThemeContext);

  const renderNotificationIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? (
      <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
        <IconComponent className={`w-4 h-4 text-gray-600`} />
      </div>
    ) : null;
  };

  return (
    <div
      className={`${
        isRightSideBarOpen ? "w-64" : "w-0"
      }  h-screen  border-l border-gray-200 flex flex-col overflow-y-auto ${
        isDarkMode ? "bg-zinc-800 text-white" : "bg-white"
      }`}
    >
      {/* Notifications Section */}
      <div className="border-b border-gray-200">
        <div className="px-4 py-4">
          <h2
            className={`text-sm font-semibold ${
              isDarkMode ? "text-white" : " text-gray-900"
            } mb-3`}
          >
            Notifications
          </h2>
          <div className="space-y-3">
            {sidebarData.notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start gap-3 group cursor-pointer"
              >
                {renderNotificationIcon(notification.icon)}
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-white" : " text-gray-900"
                    } truncate group-hover:text-blue-600 transition-colors`}
                  >
                    {notification.title}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="px-4 py-4">
        <h2
          className={`text-sm font-semibold ${
            isDarkMode ? "text-white" : "text-gray-900"
          } mb-3`}
        >
          Activities
        </h2>
        <div className="space-y-3">
          {sidebarData.activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start gap-3 group cursor-pointer"
            >
              <img
                src={activity.avatar}
                alt=""
                className="w-8 h-8 rounded-full flex-shrink-0 object-cover"
              />
              <div className="flex-1 min-w-0">
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  } truncate group-hover:text-blue-600 transition-colors`}
                >
                  {activity.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contacts Section */}
      <div className="px-4 py-4">
        <h2
          className={`text-sm font-semibold ${
            isDarkMode ? "text-white" : "text-gray-900"
          } mb-3`}
        >
          Contacts
        </h2>
        <div className="space-y-2">
          {sidebarData.contacts.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center gap-3 p-2 rounded-lg ${
                isDarkMode ? "hover:bg-zinc-700" : "hover:bg-gray-50"
              } cursor-pointer transition-colors group`}
            >
              <div className="relative flex-shrink-0">
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                {contact.online && (
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                )}
              </div>
              <span
                className={`text-sm ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } group-hover:text-blue-600 transition-colors`}
              >
                {contact.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
