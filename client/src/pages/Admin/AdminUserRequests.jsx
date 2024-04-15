import axios from "axios";
import { GiGoldBar } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import {
  approveUser,
  rejectUser,
  ShowVerified,
  handleGetUsers,
} from "../../controllers/Admin/AdminUserRequests.controller";

function AdminUserRequests() {
  const navigate = useNavigate();
  const context = useOutletContext();
  const [users, setUsers] = useState([]);
  const [dropDownValue, setDropDownValue] = useState("pending");

  useEffect(() => {
    handleGetUsers(axios, setUsers);
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("role") === "user"
    ) {
      navigate("/user/example-show-user");
    } else if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("role") === "admin"
    ) {
      navigate("/admin/requests");
    } else {
      navigate("/");
    }
  }, [dropDownValue]);

  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex justify-between">
            <div>
              <div className="flex items-center">
                <select
                  defaultValue={"pending"}
                  onChange={(e) => setDropDownValue(e.target.value)}
                  className="p-1.5 font-bold space-y-1 rounded-md bg-transparent border text-gray-100 "
                >
                  <option className="text-gray-800" value="pending">
                    Pending
                  </option>
                  <option className="text-gray-800" value="accepted">
                    Accepted
                  </option>
                  <option className="text-gray-800" value="rejected">
                    Rejected
                  </option>
                </select>
              </div>
            </div>
            <button
              onClick={context[0]}
              type="button"
              className="block sm:hidden"
            >
              <img
                src={`https://assets.codepen.io/3685267/res-react-dash-sidebar-open.svg`}
                alt=""
                className="w-full h-full"
              />
            </button>
          </div>
        </div>

        {users.map((user) => {
          return dropDownValue === user.verified ? (
            <div key={user._id} className="w-full p-2 lg:w-1/3 flex-wrap">
              <div className="rounded-lg bg-card flex justify-between p-4 h-[8.5rem]">
                <div className="flex flex-col justify-between">
                  <div className="flex items-center">
                    <img
                      src={`https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                      alt="Profile Pic"
                      className={"size-10 rounded-full"}
                    />
                    <div className="ml-2">
                      <div className="flex items-center">
                        <div className="mr-2 font-bold text-white">
                          {user.username}
                        </div>
                      </div>
                      <div className="text-sm ">{user.email}</div>
                    </div>
                  </div>
                  {user.verified === "pending" ? (
                    <div className="flex space-x-2 text-gray-200">
                      <button
                        className="border border-gray-200 p-1 rounded-md hover:bg-green-500 hover:text-white"
                        onClick={() => approveUser(user._id, axios, handleGetUsers, setUsers)}
                      >
                        Accept
                      </button>
                      <button
                        className="border border-gray-200 p-1 rounded-md hover:bg-red-500 hover:text-white"
                        onClick={() => rejectUser(user._id, axios, handleGetUsers, setUsers)}
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <ShowVerified result={user.verified} />
                  )}
                </div>
                <div className="flex flex-col items-center space-y-2 text-white">
                  {user.bussiness.type === "Builder" ? (
                    <FaBuilding size={28} style={{ color: "brown" }} />
                  ) : (
                    <GiGoldBar size={28} style={{ color: "gold" }} />
                  )}
                  <div className="text-sm ">{user.bussiness.type}</div>
                </div>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}

export default AdminUserRequests;
