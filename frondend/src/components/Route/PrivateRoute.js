import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../User/Login";

export const PrivateRoute = () => {
  const { isAuth, user, loading } = useSelector((state) => state.UserReducer);

  return <>{!loading && (isAuth ? <Outlet /> : <Login />)}</>;
};
