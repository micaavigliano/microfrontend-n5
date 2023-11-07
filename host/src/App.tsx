import React, {
  Fragment,
  Suspense,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";
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

  const options = [
    { code: "en", display: t("english") },
    { code: "es", display: t("spanish") },
  ];

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const dropdownToFocus = document.querySelector(`button[id="dropdownBtn"]`);

    if (dropdownToFocus instanceof HTMLElement) {
      dropdownToFocus.focus();
    }
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="loading">
        <Header>
          <Dropdown label={t("language")} changeLanguage={changeLanguage}>
            {options.map((opt, index) => (
              <Fragment key={index}>
                <div
                  id={opt.code}
                  aria-label={
                    opt.code === "en"
                      ? t("change-en")
                      : t("language-selected", { language: t("spanish") })
                  }
                >
                  {opt.code === "en" ? t("english") : t("spanish")}
                </div>
              </Fragment>
            ))}
          </Dropdown>
        </Header>
        <Main>
          <h1>{t("header")}</h1>
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
          <p>{t("footer")}</p>
        </Footer>
      </Suspense>
    </I18nextProvider>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
