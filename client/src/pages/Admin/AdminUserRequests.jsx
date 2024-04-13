import axios from "axios";
import { GiGoldBar } from "react-icons/gi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBuilding } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";

function AdminUserRequests() {
  const navigate = useNavigate();
  const context = useOutletContext();
  const [users, setUsers] = useState([]);

  const approveUser = (val) => {
    console.log(val);
    axios
      .patch(`/api/users/${val}/accept_user`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const rejectUser = (val) => {
    console.log(val);
    axios
      .patch(`/api/users/${val}/reject_user`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logoutUser = () => {
    localStorage.clear();
    window.location.reload();
  };

  function ShowVerified({ result, bgColor }) {
    return (
      <div
        className={`w-24 p-1 text-center text-white rounded-md bg-[${result === "accepted" ? "#04bcc9" : "#c91602"}]`}
      >
        {result === "accepted" ? "Accepted" : "Rejected"}
      </div>
    );
  }

  useEffect(() => {
    axios
      .get("/api/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res?.data);
      })
      .catch((err) => {
        console.log(err);
      });
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("role") === "user"
    ) {
      navigate("/user/example-show-user");
    } else if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("role") === "admin"
    ) {
      navigate("/admin/example-show-admin");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex w-full">
      <div className="w-full h-screen hidden sm:block sm:w-20 xl:w-60 flex-shrink-0">
        .
      </div>
      <div className=" h-screen flex-grow overflow-x-hidden overflow-auto flex flex-wrap content-start p-2">
        <div className="w-full sm:flex p-2 items-end">
          <div className="sm:flex-grow flex justify-between">
            <div className="">
              <div className="flex items-center">
                <div className="text-3xl font-bold text-white"></div>
              </div>
            </div>
            <button
              onClick={logoutUser}
              className="w-24 h-10 rounded-md border border-gray-200 text-gray-200 hover:bg-white hover:text-gray-800"
            >
              Logout
            </button>
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
          return (
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
                        onClick={approveUser}
                      >
                        Accept
                      </button>
                      <button
                        className="border border-gray-200 p-1 rounded-md hover:bg-red-500 hover:text-white"
                        onClick={rejectUser}
                      >
                        Reject
                      </button>
                    </div>
                  ) : (
                    <ShowVerified bgColor={"#00CFDC"} result={user.verified} />
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
          );
        })}
      </div>
    </div>
  );
}

export default AdminUserRequests;
