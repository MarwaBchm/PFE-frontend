import React, { useState, useLayoutEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const sidebarItems = [
  {
    id: 1,
    label: "Dashboard",
    image: "/icons/not-selected/home.png",
    selectedImage: "/icons/selected/home.png",
    path: "/dashboard/Home",
  },
  {
    id: 2,
    label: "Users Management",
    image: "/icons/not-selected/users-management.png",
    selectedImage: "/icons/selected/users-management.png",
    path: "/dashboard/usersManagement",
  },
  {
    id: 3,
    label: "Subjects Management",
    image: "/icons/not-selected/propose.png",
    selectedImage: "/icons/selected/propose.png",
    path: "/dashboard/subjectsManagement",
  },
  {
    id: 4,
    label: "Deadlines",
    image: "/icons/not-selected/defense.png",
    selectedImage: "/icons/selected/defense.png",
    path: "/dashboard/deadlines",
  },
  {
    id: 5,
    label: "Defense Schedule",
    image: "/icons/not-selected/project.png",
    selectedImage: "/icons/selected/project.png",
    path: "/dashboard/defenseSchedule",
  },
  {
    id: 6,
    label: "Emails",
    image: "/icons/not-selected/email.png",
    selectedImage: "/icons/selected/email.png",
    path: "/dashboard/emails",
  },
  {
    id: 7,
    label: "Settings",
    image: "/icons/not-selected/settings.png",
    selectedImage: "/icons/selected/settings.png",
    path: "/dashboard/settings",
  },
  {
    id: 8,
    label: "Profile",
    image: "/icons/not-selected/settings.png",
    selectedImage: "/icons/selected/settings.png",
    path: "/dashboard/profile",
  },
  {
    id: 9,
    label: "Sign Out",
    image: "/icons/not-selected/logout.png",
    selectedImage: "/icons/selected/logout.png",
    path: "/dashboard/signOut",
  },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const indicatorRef = useRef(null);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Automatically open the sidebar on large screens
  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update the position of the indicator
  useLayoutEffect(() => {
    const updateIndicatorPosition = () => {
      // Ensure location.pathname is a string and sanitize it
      const sanitizedPathname = location.pathname
        .replace(/\//g, "-")
        .replace(/[^a-zA-Z0-9\-]/g, ""); // Remove invalid characters

      // Find the active link based on the sanitized pathname
      const activeLink = document.querySelector(
        `.sidebar-item-${sanitizedPathname}`
      );
      const sidebarContainer = document.querySelector(".sidebar-container");

      if (activeLink && indicatorRef.current && sidebarContainer) {
        const sidebarTop = sidebarContainer.offsetTop;
        const { offsetTop, offsetHeight } = activeLink;

        const topPosition = offsetTop - sidebarTop + (isOpen ? 0 : 5);
        const indicatorHeight = offsetHeight;

        indicatorRef.current.style.top = `${topPosition}px`;
        indicatorRef.current.style.height = `${indicatorHeight}px`;
      }
    };

    // Update the indicator position when pathname or sidebar state changes
    updateIndicatorPosition();

    // Update position on window resize
    window.addEventListener("resize", updateIndicatorPosition);
    return () => window.removeEventListener("resize", updateIndicatorPosition);
  }, [location.pathname, isOpen]);

  return (
    <div className="flex h-full">
      <div
        className={`sidebar-container bg-white pt-2 shadow-lg h-full transition-all duration-500 overflow-y-auto ${
          isOpen ? "w-48 sm:w-48 lg:w-60" : "w-16"
        }`}
      >
        <div className="py-2 relative">
          <div
            ref={indicatorRef}
            className="absolute right-0 w-1 bg-blue-4 rounded-md transition-all duration-500"
          ></div>

          <div
            className={`text-2xl font-NovaFlat flex flex-row items-center gap-2 lg:pl-4 pb-4 border-b border-gray-300 border-opacity-30`}
          >
            <button
              className="lg:hidden mb-4 p-2 text-black rounded-md focus:outline-none"
              onClick={toggleSidebar}
            >
              {!isOpen && (
                <img
                  src="/icons/not-selected/menu-closed.png"
                  className="h-5"
                />
              )}
              {isOpen && (
                <img src="/icons/selected/menu-opened.png" className="h-5" />
              )}
            </button>
            <img src="/logo.png" className="h-12" alt="Logo" />
            <h1 className={`sm:text-xl lg:text-2xl ${isOpen ? "" : "hidden"}`}>
              GradMastery
            </h1>
          </div>

          <nav className="space-y-2 mt-4">
            {sidebarItems.map((item) => {
              const sanitizedPath = item.path
                .replace(/\//g, "-")
                .replace(/[^a-zA-Z0-9\-]/g, "");
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`sidebar-item-${sanitizedPath} relative flex flex-row items-center py-2 px-3 mx-2 cursor-pointer rounded ${
                    location.pathname === item.path
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "hover:bg-blue-50 text-gray-700"
                  }`}
                >
                  <img
                    src={
                      location.pathname === item.path
                        ? item.selectedImage
                        : item.image
                    }
                    alt={item.label}
                    className="w-6 h-6 mr-3"
                  />
                  <span className={`${isOpen ? "block" : "hidden"} text-sm`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
