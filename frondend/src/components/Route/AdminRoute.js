import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Login from "../User/Login";

export const AdminRoute = ({ isAdmin }) => {
  const { isAuth, user, loading } = useSelector((state) => state.UserReducer);

  return (
    <>
      {!loading && (isAdmin && user.role !== "admin" ? <Login /> : <Outlet />)}
    </>
  );
};
