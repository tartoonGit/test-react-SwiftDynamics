import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./../layouts/Layout";
import App from './../App'
import Test1 from './../pages/Test1'
import Test2 from "./../pages/Test2";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "test1",
        element: <Test1 />,
      },
      {
        path: "test2",
        element: <Test2 />,
      },
    ],
  },
]);

export default router;