import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ExampleUserPage() {
  const navigate = useNavigate();

  useEffect(() => {
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
