import { useTranslation } from "react-i18next";
import { Select } from "antd";

interface language {
  [key: string]: { nativeName: string };
}

const lngs: language = {
  en: { nativeName: "EN" },
  th: { nativeName: "TH" },
};

const Select_language = () => {
  const { i18n } = useTranslation();
  return (
    <div>
      <Select
        defaultValue="en"
        style={{ width: 120 }}
        onChange={(value) => i18n.changeLanguage(value)}
        options={Object.keys(lngs).map((lng) => ({
          value: lng,
          label: lngs[lng].nativeName,
        }))}
      />
    </div>
  );
};

export default Select_language;
