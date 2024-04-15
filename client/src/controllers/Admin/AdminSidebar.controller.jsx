import { MdOutlineDashboard } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { CiSquareQuestion } from "react-icons/ci";
import { FaCodePullRequest } from "react-icons/fa6";

export const sidebarItems = [
  [
    {
      id: "0",
      title: "Dashboard",
      notifications: false,
      to: "dashboard",
      icons: <MdOutlineDashboard size={18} />,
    },
    {
      id: "1",
      title: "Form",
      notifications: false,
      to: "",
      icons: <FaWpforms size={18} />,
    },
  ],
  [
    {
      id: "2",
      title: "Requests",
      notifications: false,
      to: "requests",
      icons: <FaCodePullRequest />,
    },
    {
      id: "3",
      title: "Something 2",
      notifications: false,
      to: "",
      icons: <CiSquareQuestion size={18} />,
    },
  ],
];

export const handleLogoutClick = (navigate) => {
  localStorage.clear();
  navigate("/");
};

export const toggleLogoutMenu = (setIsLogoutMenuOpen, isLogoutMenuOpen) => {
  setIsLogoutMenuOpen(!isLogoutMenuOpen);
};
