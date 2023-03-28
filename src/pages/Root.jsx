import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
};

export default Root;
