export const handleGetUsers = (axios, setUsers) => {
  axios
    .get("/api/users")
    .then((res) => {
      console.log(res.data);
      setUsers(res?.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const approveUser = (val, axios, handleGetUsers, setUsers) => {
  console.log(val);
  axios
    .patch(`/api/users/${val}/accept_user`)
    .then((res) => {
      console.log(res);
      handleGetUsers(axios, setUsers);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const rejectUser = (val, axios, handleGetUsers, setUsers) => {
  console.log(val);
  axios
    .patch(`/api/users/${val}/reject_user`)
    .then((res) => {
      console.log(res);
      handleGetUsers(axios, setUsers);
    })
    .catch((err) => {
      console.log(err);
    });
};

export function ShowVerified({ result }) {
  return (
    <div
      className={`w-24 p-1 text-center text-white rounded-md ${
        result === "accepted" ? "bg-[#04bcc9]" : "bg-[#c91602]"
      }`}
    >
      {result === "accepted" ? "Accepted" : "Rejected"}
    </div>
  );
}
