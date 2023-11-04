import React, { Suspense } from "react";
import ReactDOM from "react-dom";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

import { Layout } from "hp_app/Layout";
import { LayoutRm } from "rick_morty_app/LayoutRm";
import Header from "sharedResources/components/Header/Header";
import Button from "sharedResources/components/Button/Button";
import { Main, ButtonsContainer } from "./App.styled";

import "./index.css";

const App = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  console.log(t("hp-btn"));

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="loading">
        <Header>
          <p>Mica</p>
          <ButtonsContainer>
            <Button
              onClick={() => changeLanguage("es")}
              aria-label={t("change-en")}
              title={"ES"}
            />

            <Button
              onClick={() => changeLanguage("en")}
              aria-label={t("change-es")}
              title={"EN"}
            />
          </ButtonsContainer>
        </Header>
        <Main>
          <section>
            <Layout title={t("hp-btn")} />
          </section>
          <section>
            <LayoutRm title={t("rm-btn")} />
          </section>
        </Main>
      </Suspense>
    </I18nextProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
