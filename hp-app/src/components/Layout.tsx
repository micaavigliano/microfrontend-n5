import React, { useState, Fragment, useEffect } from "react";
import useDataFetching from "sharedResources/hooks/useDataFetching";
import Button from "sharedResources/components/Button/Button";
import List from "sharedResources/components/List/List";
import LazyLoadedImage from "sharedResources/components/LazyLoadedImage/LazyLoadedImage";
import { AppContainer, GeneralInfo, MoreInfo } from "./Layout.styled";
import { useTranslation } from "react-i18next";

export interface GenericObject {
  [key: string]: any;
}

interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ title }: { title: string }) => {
  const { t } = useTranslation();
  const [showList, setShowList] = useState<boolean>(false);
  const { data } = useDataFetching(
    "https://hp-api.onrender.com/api/characters"
  );

  const handleList = () => {
    setShowList(!showList);
  };

  useEffect(() => {
    if (!showList) {
      const buttonToFocus = document.querySelector(
        `button[data-item-id="harry-potter-id"]`
      );

      if (buttonToFocus instanceof HTMLElement) {
        buttonToFocus.focus();
      }
    }
  }, [showList]);

  return (
    <AppContainer>
      <Button
        onClick={handleList}
        title={title}
        data-item-id="harry-potter-id"
      />
      {showList && (
        <List showList={showList} setShowList={setShowList}>
          {data.map((list: GenericObject) => (
            <Fragment key={list.id}>
              <GeneralInfo>
                <span>
                  <p style={{ backgroundColor: "yellow" }}>{list.gender}</p>
                </span>
                <LazyLoadedImage
                  src={list.image || ""}
                  placeholder={`${list.name} - ${list.species}`}
                  alt={list.description || `${list.name} - ${list.species}`}
                />{" "}
                <span>
                  <p>
                    {list.alive !== undefined && list.alive === true
                      ? "Alive"
                      : "Dead"}
                  </p>
                </span>
              </GeneralInfo>
              <MoreInfo>
                <h2 className="LiContainer__moreinfo__header">{list.name}</h2>

                <span>
                  <p>
                    <strong>{t("specie")}:</strong> {list.species}
                  </p>
                </span>
                <span>
                  <p>
                    <strong>{t("gender")}:</strong> {list.gender}
                  </p>
                </span>
                <span>
                  <p>
                    <strong>{t("location")}:</strong>{" "}
                    {list.house !== "" ? list.house : "-"}
                  </p>
                </span>
              </MoreInfo>{" "}
            </Fragment>
          ))}
        </List>
      )}
    </AppContainer>
  );
};
