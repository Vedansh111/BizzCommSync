import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ForgetPassword from "./pages/ForgetPassword";
import LoginThroughOtp from "./pages/LoginThroughOtp";
import ExamplePage from "./pages/ExamplePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/login-through-otp" element={<LoginThroughOtp />} />
        <Route path="/example-show-user" element={<ExamplePage />} />
      </Routes>
    </Router>
  );
}

export default App;
