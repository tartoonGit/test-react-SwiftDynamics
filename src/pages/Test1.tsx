import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button_symbol from "../components/Button_ symbol";
import "./Test1.scss";
import { shape as type_shape } from "./../@types/types";

const Test1 = () => {
  interface shape {
    name: type_shape;
    className?: string;
  }
  const { t } = useTranslation();
  const [symbol, setSymbol] = useState<shape[]>([
    {
      name: "circle",
      className: "grid-start-3",
    },
    {
      name: "ellipse",
    },
    {
      name: "square",
    },
    {
      name: "rectangle",
      className: "grid-start-2",
    },
    {
      name: "parallelogram",
    },
    {
      name: "trapezoid",
    },
  ]);
  const handlePosition = (): void => {
    setSymbol((prevSymbols) => {
      const updatedSymbols = [...prevSymbols];

      // สลับค่า className ของสองอ็อบเจกต์ที่ตำแหน่งที่กำหนด
      const tempClassName = updatedSymbols[0].className;
      updatedSymbols[0].className = updatedSymbols[3].className;
      updatedSymbols[3].className = tempClassName;

      return updatedSymbols;
    });
  };
  const reorderSymbolsLeft = () => {
    const data = JSON.parse(JSON.stringify([...symbol]));
    data.forEach((item: shape, index: number) => {
      if (index !== symbol.length - 1) item.name = symbol[index + 1].name;
      else {
        item.name = symbol[0].name;
      }
    });

    setSymbol(data);
  };
  const reorderSymbolsRight = () => {
    const data = JSON.parse(JSON.stringify([...symbol]));
    data.forEach((item: shape, index: number) => {
      if (index !== 0) item.name = symbol[index - 1].name;
      else {
        item.name = symbol[symbol.length - 1].name;
      }
    });

    setSymbol(data);
  };
  const randomSymbols = () => {
    const data = JSON.parse(JSON.stringify([...symbol]));
    const className0 = data[0].className;
    const className3 = data[3].className;
    data.sort(() => Math.random() - 0.5);
    data.forEach((item: shape, index: number) => {
      if(index === 0){item.className = className0;}
      else if(index === 3){
        item.className = className3;
      }else{
        if(Object.prototype.hasOwnProperty.call(item, "className")){
          delete item.className;
        }
      }
    });
    setSymbol(data);
  };

  return (
    <div>
      <h1>{t("content.content1")}</h1>
      <div className="group-button">
        <div>
          <div className="grid-4">
            <Button_symbol
              shape="triangle-left"
              label="move.shape"
              onClick={reorderSymbolsLeft}
            />
            <Button_symbol
              className="grid-col-2"
              shape="triangle"
              label="move.position"
              onClick={handlePosition}
            />
            <Button_symbol
              shape="triangle-right"
              label="move.shape"
              onClick={reorderSymbolsRight}
            />
          </div>
          <div className="line" />
          <div className="grid-8">
            {symbol.map((item, index) => (
              <Button_symbol
                key={index}
                className={item.className && item.className}
                shape={item.name}
                onClick={randomSymbols}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test1;
