import "./Button_ symbol.scss";
import { useTranslation } from "react-i18next";
import { shape } from "./../@types/types";
 
const Button_symbol = (props: {
  shape: shape;
  label?: string;
  className?: string;
  onClick?: () => void;
}) => {
  const { t } = useTranslation();
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(); // เรียกใช้ onClick ที่ถูกส่งเข้ามา
    }
  };
  return (
    <button
      className={`button_symbol ${props.className}`}
      onClick={handleClick}
    >
      {props.shape === "triangle" ? (
        //if(triangle)
        <div className="button-around">
          <div className="triangle-up" />
          <div className="triangle-down" />
        </div>
      ) : props.shape === "triangle-right" ? (
        //else-if(triangle-right)\
        <div className="button-center">
          <div className="triangle-right" />
        </div>
      ) : props.shape === "triangle-left" ? (
        //else-if(triangle-left)
        <div className="button-center">
          <div className="triangle-left" />
        </div>
      ) : props.shape === "circle" ? (
        //else-if(circle)
        <div className="button-center">
          <div className="circle" />
        </div>
      ) : props.shape === "square" ? (
        //else-if(square)
        <div className="button-center">
          <div className="square" />
        </div>
      ) : props.shape === "rectangle" ? (
        //else-if(rectangle)
        <div className="button-center">
          <div className="rectangle" />
        </div>
      ) : props.shape === "ellipse" ? (
        //else-if(ellipse)
        <div className="button-center">
          <div className="ellipse" />
        </div>
      ) : props.shape === "trapezoid" ? (
        //else-if(trapezoid)
        <div className="button-center">
          <div className="trapezoid" />
        </div>
      ) : (
        //else(parallelogram)
        <div className="button-center">
          <div className="parallelogram" />
        </div>
      )}
      {props.label && <div className="bar-label">{t(props.label)}</div>}
    </button>
  );
};

export default Button_symbol;
