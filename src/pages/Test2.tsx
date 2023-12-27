import { useTranslation } from "react-i18next";
import From_data from "./../components/Form_data";
import Table_data from "./../components/Table_data";
import "./Test2.scss";

const Test2 = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t("content.content2")}</h1>
      <div className="form">
        <From_data />
      </div>
      <div>
        <Table_data />
      </div>
    </div>
  );
};

export default Test2;
