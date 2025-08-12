import React from "react";
import NavBar from "../Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
