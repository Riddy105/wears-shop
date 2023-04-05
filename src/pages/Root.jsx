import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import { Outlet, useLocation } from "react-router-dom";
const Root = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header />
      <Outlet></Outlet>
    </>
  );
};

export default Root;
