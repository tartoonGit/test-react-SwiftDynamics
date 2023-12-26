import "./Layout.scss";
import { ReactNode } from "react";
import Select_language from "./../components/Select_language";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="header">
        <Select_language />
      </div>
      <div className="screen">{children}</div>
    </div>
  );
};

export default Layout;
