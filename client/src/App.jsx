import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgetPassword from "./pages/ForgetPassword";
import LoginThroughOtp from "./pages/LoginThroughOtp";
import AdminUserRequests from "./pages/Admin/AdminUserRequests";
import ExampleUserPage from "./pages/User/ExampleUserPage";
import AdminMain from "./pages/Admin/AdminMain";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import UserMain from "./pages/User/UserMain";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/login-through-otp" element={<LoginThroughOtp />} />
        
        {/* Admin Side */}
        <Route path="admin/" element={<AdminMain />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="example-show-admin" element={<AdminUserRequests />} />
        </Route>
        
        {/* User Side */}
        <Route path="user/" element={<UserMain />}>
          <Route path="example-show-user" element={<ExampleUserPage />} />
        </Route>
        
        {/* Error Page */}
        <Route path='*' element={<div>Not Found!</div>} />
      </Routes>
    </Router>
  );
}

export default App;
