import React from "react";

import links from "../../utils/links";

const Main = React.lazy(() => import("../../pages/Main/Main"));

const routes = [
  {
    path: links.main,
    component: Main,
  },
];

export default routes;
