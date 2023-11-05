import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

import { Layout } from "hp_app/Layout";
import { LayoutRm } from "rick_morty_app/LayoutRm";
import Header from "sharedResources/components/Header/Header";
import Button from "sharedResources/components/Button/Button";
import Footer from "sharedResources/components/Footer/Footer";
import { Main, ButtonsContainer, Section } from "./App.styled";

import "./index.css";

const App = () => {
  const { i18n, t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="loading">
        <Header>
          <p>Mica</p>
          <ButtonsContainer>
            <Button
              onClick={() => i18n.changeLanguage("es")}
              aria-label={
                i18n.language === "es"
                  ? `español ${t("language-selected")}`
                  : t("change-es")
              }
              title={"ES"}
            />

            <Button
              onClick={() => i18n.changeLanguage("en")}
              aria-label={
                i18n.language === "en"
                  ? `english ${t("language-selected")}`
                  : t("change-en")
              }
              title={"EN"}
            />
          </ButtonsContainer>
        </Header>
        <Main>
          <Section>
            <Layout title={t("hp-btn")} />
          </Section>
          <Section>
            <LayoutRm title={t("rm-btn")} />
          </Section>
        </Main>
        <Footer>
          <p>Mica footer</p>
        </Footer>
      </Suspense>
    </I18nextProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
