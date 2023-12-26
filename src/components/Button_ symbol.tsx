import "./Button_ symbol.scss";
import { useTranslation } from "react-i18next";

type shape =
  | "triangle"
  | "triangle-right"
  | "triangle-left"
  | "circle"
  | "square"
  | "rectangle"
  | "ellipse"
  | "trapezoid"
  | "parallelogram";

const Button_symbol = (props: {
  shape: shape;
  label?: string;
  className?: string;
}) => {
  const { t } = useTranslation();
  return (
    <button className={`button_symbol ${props.className}`}>
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
