import React from "react";
import LoginPage from "./LoginPage";
import Home from "./HomePage";
import Register from "./Register";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/user-auth";

const App = () => {
  const { isAuth, email } = useAuth();
  console.log(isAuth);

  if (isAuth) {
    // Private page
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
  } else {
    return (
      // Public
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }
};

export default App;
