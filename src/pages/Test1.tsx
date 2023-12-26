import { useTranslation } from "react-i18next";
import Button_symbol from "../components/Button_ symbol";
import "./Test1.scss";

const Test1 = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("content.content1")}</h1>
      <div className="group-button">
        <div>
          <div className="grid-4">
            <Button_symbol shape="triangle-left" label="move.shape" />
            <Button_symbol
              className="grid-col-2"
              shape="triangle"
              label="move.position"
            />
            <Button_symbol shape="triangle-right" label="move.shape" />
          </div>
          <div className="line" />
          <div className="grid-8">
            <Button_symbol className="grid-start-3" shape="circle" />
            <Button_symbol shape="ellipse" />
            <Button_symbol shape="square" />
            <Button_symbol className="grid-start-2" shape="rectangle" />
            <Button_symbol shape="parallelogram" />
            <Button_symbol shape="trapezoid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test1;
