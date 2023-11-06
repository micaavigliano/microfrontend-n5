import React, { Fragment, Suspense, KeyboardEvent } from "react";
import ReactDOM from "react-dom";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { useTranslation } from "react-i18next";

import { Layout } from "hp_app/Layout";
import { LayoutRm } from "rick_morty_app/LayoutRm";
import Header from "sharedResources/components/Header/Header";
import Button from "sharedResources/components/Button/Button";
import Footer from "sharedResources/components/Footer/Footer";
import Dropdown from "sharedResources/components/Dropdown/Dropdown";
import { Main, Section, SectionContainer } from "./App.styled";

import "./index.css";

const App = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>, lang: string) => {
    if (event.key === "Enter") {
      changeLanguage(lang);
    }
  };

  const options = ["english 🇬🇧", "spanish 🇦🇷"];

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="loading">
        <Header>
          <Dropdown label="Select a language">
            {options.map((opt, index) => (
              <Fragment key={index}>
                <div
                  tabIndex={0}
                  onClick={() =>
                    changeLanguage(opt === "english 🇬🇧" ? "en" : "es")
                  }
                  onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => {
                    if (e.key === "Enter") {
                      changeLanguage(opt === "english 🇬🇧" ? "en" : "es");
                    }
                  }}
                  aria-label={
                    opt === "english 🇬🇧"
                      ? `español ${t("language-selected")}`
                      : t("change-en")
                  }
                >
                  {opt}
                </div>
              </Fragment>
            ))}
          </Dropdown>
        </Header>
        <Main>
          <h1>Conoce a tus personajes favoritos</h1>
          <SectionContainer>
            <Section>
              <Layout title={t("hp-btn")} />
            </Section>
            <Section>
              <LayoutRm title={t("rm-btn")} />
            </Section>
          </SectionContainer>
        </Main>
        <Footer>
          <p>Mica footer</p>
        </Footer>
      </Suspense>
    </I18nextProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
