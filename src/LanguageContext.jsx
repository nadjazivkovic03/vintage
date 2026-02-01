import { createContext, useContext, useState } from "react";
import { translations } from "./i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") || "sr"
  );


  const t = (text) => {
    if (lang === "sr") return text;
    return translations.en[text] || text;
  };

  const changeLanguage = (l) => {
    setLang(l);
    localStorage.setItem("lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
