import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

const Layout = ({cart}) => {
  return (
    <>
      <Header  />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop smooth color="red" />
    </>
  );
};
export default Layout;
