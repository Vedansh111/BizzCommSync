import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ExampleUserPage() {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("role") === "user"
    ) {
      navigate("/user/dashboard");
    } else if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("role") === "admin"
    ) {
      navigate("/admin/dashboard");
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
      <div className="rounded-xl bg-gradient-to-r from-red-50 to-green-50 border shadow-md w-[20rem] ml-10 my-8">
        <ul className="p-5 space-y-5">
          <li>Name:</li>
          <li>Email: </li>
          <li>Phone: </li>
          <li>Bussiness:</li>
        </ul>
      </div>
    </div>
  );
}

export default ExampleUserPage;
