import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ExamplePage() {
  const navigate = useNavigate();
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
      navigate("/example-show-user");
    } else if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("role") === "admin"
    ) {
      navigate("/example-show-admin");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-wrap ">
      <button
        onClick={logoutUser}
        className="w-24 h-10 rounded-md m-5 p-1 border border-gray-400 hover:bg-gray-800 hover:text-white"
      >
        Logout
      </button>
      {users.map((user) => {
        return (
          <div
            className="rounded-xl bg-gradient-to-r from-red-50 to-green-50 border shadow-md w-[20rem] ml-10 my-8"
            key={user._id}
          >
            <ul className="p-5 space-y-5">
              <li>Name: {user.username}</li>
              <li>Email: {user.email}</li>
              <li>Phone: {user.mobile_no}</li>
              <li>Bussiness: {user.bussiness.type}</li>
            </ul>
            {user.verified === "accepted" ? (
              <div className="mx-5 mb-2 border h-fit w-fit bg-green-400 p-1 rounded">Approved</div>
            ) : user.verified === "rejected" ? (
              <div className="mx-5 mb-2 border h-fit w-fit bg-red-400 p-1 rounded">Rejected</div>
            ) : (
              <div className="flex ml-5 space-x-2 mb-5">
                <button
                  onClick={() => approveUser(user._id)}
                  className="border border-gray-300 p-1 rounded-md hover:bg-green-400"
                >
                  Accept
                </button>
                <button
                  onClick={() => rejectUser(user._id)}
                  className="border border-gray-300 p-1 rounded-md hover:bg-red-400"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ExamplePage;
