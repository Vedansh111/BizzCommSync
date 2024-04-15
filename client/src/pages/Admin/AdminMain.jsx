import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import axios from "axios";

function AdminMain() {
  const [showSidebar, onSetShowSidebar] = useState(false);

  const onSidebarHide = () => {
    onSetShowSidebar(true);
  }

//   const handleAdminDetails = () => {
//     axios.get()
//   }

  return (
    <div className="flex">
      <AdminSidebar
        onSidebarHide={() => {
          onSetShowSidebar(false);
        }}
        showSidebar={showSidebar}
      />
      <Outlet context={[onSidebarHide]} />
    </div>
  );
}

export default AdminMain;
