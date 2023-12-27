import "./App.scss";
import { useTranslation } from "react-i18next";
import Select_card from "./components/Select_card";
import { Link } from "react-router-dom";

function App() {
  const { t } = useTranslation();
  const content = [
    {
      title: t("title.title1"),
      content: t("content.content1"),
      link: "/test1",
    },
    {
      title: t("title.title2"),
      content: t("content.content2"),
      link: "/test2",
    },
  ];

  return (
    <>
      <div className="body-card">
        <div className="multi-card">
          {content.map((item, index) => (
            <Link to={item.link} key={index}>
              <Select_card
                key={index}
                title={item.title}
                content={item.content}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
