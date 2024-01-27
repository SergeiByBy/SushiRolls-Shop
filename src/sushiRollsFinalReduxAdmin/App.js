import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main/Main";
import "./Style//Normalize.style.css";
import "./Style/style.css";
import "./Style/media.style.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Rolls from "./Menu/Rolls/Rolls";
import Sushi from "./Menu/Sushi/Sushi";
import Gunkans from "./Menu/Gunkans/Gunkans";
import PolitSave from "./Footer/PolicalSave";
import Sets from "./Menu/Sets/Sets";
import RollDetail from "./Menu/Rolls/RollDetail";
import SushiDetails from "./Menu/Sushi/SushiDetails";
import NotFound from "./NotFound/NotFound";
import GunkansDetails from "./Menu/Gunkans/GunkansDetail";
import SetsDetails from "./Menu/Sets/SetsDetails";
import Sause from "./Menu/Sause/Sause";
import SauseDetails from "./Menu/Sause/SauseDetails";
import ScrollToTop from "./ScrollTop/SrollTop";
import Cart from "./Cart/Cart";
import Snowfall from "react-snowfall";
import Login from "./Adminpanel/Login";
import { useAuth } from "./Adminpanel/hooks/user-auth";
import MainAdmin from "./Adminpanel/MainAdmin";
import LoginPage from "./Adminpanel/LoginPage";
import Register from "./Adminpanel/Register";
import AdminCart from "./Adminpanel/RollsAdmin/AdminCart";
import AddItem from "./Adminpanel/RollsAdmin/AddItem";

const App = () => {
  const { isAuth } = useAuth("");
  if (isAuth) {
    return (
      <Routes>
        <Snowfall />
        <ScrollToTop />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  } else {
    return (
      <>
        <Snowfall />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="rolls" element={<Rolls />} />
            <Route path="rolls/:name" element={<RollDetail />} />
            <Route path="sushi" element={<Sushi />} />
            <Route path="sushi/:name" element={<SushiDetails />} />
            <Route path="gunkans" element={<Gunkans />} />
            <Route path="gunkans/:name" element={<GunkansDetails />} />
            <Route path="sets" element={<Sets />} />
            <Route path="sets/:name" element={<SetsDetails />} />
            <Route path="sause" element={<Sause />} />
            <Route path="sause/:name" element={<SauseDetails />} />
            <Route path="PolitSave" element={<PolitSave />} />
            <Route path="Cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<MainAdmin />} />
            <Route path="/rollsAdmin" element={<AdminCart />} />
            <Route path="/AddItem" element={<AddItem />} />
            {isAuth ? (
              <Route path="/admin" element={<MainAdmin />} />
            ) : (
              <Route path="/login" element={<Login />} />
            )}
          </Route>
        </Routes>
      </>
    );
  }
};

export default App;
