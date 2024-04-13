import { useState } from "react";
import { FaLightbulb, FaCodePullRequest } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { CiSquareQuestion } from "react-icons/ci";
import { Link } from "react-router-dom";
import clsx from "https://cdn.skypack.dev/clsx@1.1.1";

const sidebarItems = [
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
      to: "example-show-admin",
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

function AdminSidebar({ onSidebarHide, showSidebar }) {
  const [selected, setSelected] = useState("0");
  const now = new Date();
  const month = now.toLocaleString("en-US", { month: "long" }); // Get the full month name (November)
  const day = now.getDate(); // Get the day of the month (1-31)
  const year = now.getFullYear(); // Get the full year (YYYY)

  return (
    <div
      className={clsx(
        "fixed inset-y-0 left-0 bg-card w-full sm:w-20 xl:w-60 sm:flex flex-col z-10 text-[#676767]",
        showSidebar ? "flex" : "hidden"
      )}
    >
      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-top">
          <FaLightbulb className="size-7 text-[#00CFDC]" />
          <div className="block sm:hidden xl:block ml-2 font-bold text-xl text-white">
            Bizz<span className="text-[#00CFDC]">Comm</span>Sync
          </div>
          <div className="flex-grow sm:hidden xl:block" />
          <IoCloseOutline
            size={25}
            className="block sm:hidden cursor-pointer"
            onClick={onSidebarHide}
          />
        </div>
      </div>

      <div className="flex-grow overflow-x-hidden overflow-y-auto flex flex-col">
        {sidebarItems[0].map((i) => (
          <Link
            to={i.to}
            key={i.id}
            className={clsx(
              "w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer",
              selected === i.id ? "sidebar-item-selected" : "sidebar-item"
            )}
            onClick={() => setSelected(i.id)}
          >
            {i.icons}
            <div className="block sm:hidden xl:block ml-2">{i.title}</div>
            <div className="block sm:hidden xl:block flex-grow" />
          </Link>
        ))}
        <div className="mt-8 mb-0 font-bold px-3 block sm:hidden xl:block">
          USERS
        </div>
        {sidebarItems[1].map((i) => (
          <Link
            to={i.to}
            key={i.id}
            className={clsx(
              "w-full mt-6 flex items-center px-3 sm:px-0 xl:px-3 justify-start sm:justify-center xl:justify-start sm:mt-6 xl:mt-3 cursor-pointer",
              selected === i.id ? "sidebar-item-selected" : "sidebar-item"
            )}
            onClick={() => setSelected(i.id)}
          >
            {i.icons}
            <div className="block sm:hidden xl:block ml-2">{i.title}</div>
            <div className="block sm:hidden xl:block flex-grow" />
          </Link>
        ))}
        <div className="flex-grow" />

        <div className="w-full p-3 h-28 hidden sm:block sm:h-20 xl:h-32">
          <div
            className="rounded-xl w-full h-full px-3 sm:px-0 xl:px-3 overflow-hidden"
            style={{
              backgroundImage:
                "url('https://assets.codepen.io/3685267/res-react-dash-usage-card.svg')",
            }}
          >
            <div className="block sm:hidden xl:block pt-3">
              <div className="font-bold text-gray-300 text-sm">Used Space</div>
              <div className="text-gray-400 text-xs">
              {month}, {day}-{year}
              </div>
              <div className="w-full text-gray-300"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 overflow-hidden p-2">
        <div className="flex items-center h-full sm:justify-center xl:justify-start p-2 sidebar-separator-bottom">
          <img
            src={`https://assets.codepen.io/3685267/mock_faces_8.jpg`}
            alt=""
            className={clsx("w-10 h-10 rounded-full")}
          />
          <div className="block sm:hidden xl:block ml-2 font-bold ">
            Jerry Wilson
          </div>
          <div className="flex-grow block sm:hidden xl:block" />
          <img
            src={`https://assets.codepen.io/3685267/res-react-dash-options.svg`}
            alt=""
            className={clsx("block sm:hidden xl:block w-3 h-3")}
          />
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
