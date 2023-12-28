import React from "react";
import LoginPage from "./LoginPage";
import Home from "./HomePage";
import Register from "./Register";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default App;
