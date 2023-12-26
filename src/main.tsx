import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./i18n";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import Layout from "./layouts/Layout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Layout>
        <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);
