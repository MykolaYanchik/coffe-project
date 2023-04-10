import React, { memo } from "react";
import routes from "./routes";
import { Route, Routes } from "react-router-dom";

const Content = () => {
  return (
    <Routes>
      {routes.map((route, i) => {
        return (
          route.component && (
            <Route key={i} path={route.path} element={<route.component />} />
          )
        );
      })}
    </Routes>
  );
};

export default memo(Content);
