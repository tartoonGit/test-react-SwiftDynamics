import "./Layout.scss";
import Select_language from "./../components/Select_language";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const { t } = useTranslation();
   const location = useLocation();
  return (
    <div>
      <div className="header">
        <Select_language />
        {location.pathname !== "/" &&
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Link to="/">
              <Button style={{ marginTop: "10px" }}>{t("button.back")}</Button>
            </Link>
          </div>
        }
      </div>

      <div className="screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
