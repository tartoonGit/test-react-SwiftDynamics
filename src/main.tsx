import ReactDOM from "react-dom/client";
import "./index.scss";
import "./i18n";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import { store } from "./store/store"
import{ Provider } from "react-redux"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
