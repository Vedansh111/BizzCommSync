import axios from "axios";
import { useEffect, useState } from "react";

function ExamplePage() {
  const [users, setUsers] = useState([]);

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
  }, []);
  return (
    <div className="flex flex-wrap ">
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
                <li>Bussiness: {user.bussiness_type}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default ExamplePage;
