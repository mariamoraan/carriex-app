import { useTranslation } from "react-i18next";

function App() {

  const {t,i18n} = useTranslation()
  return (
    <div>
      <h1>{t("hey")}</h1>
    </div>
  );
}

export default App;
