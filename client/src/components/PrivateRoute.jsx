import React from "react";
import { Navigate } from "react-router-dom";
import links from "../utils/links";

export default function PrivateRoute({ children }) {
  return localStorage.getItem("auth") ? (
    children
  ) : (
    <Navigate to={links.authorization} />
  );
}
