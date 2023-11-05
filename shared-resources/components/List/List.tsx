import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import {
  UlContainer,
  LiContainer,
  Avatar,
  GeneralInfo,
  MoreInfo,
} from "./List.styled";
import Modal from "../Modal/Modal";

export interface GenericObject {
  [key: string]: any;
}

export interface Props extends React.LiHTMLAttributes<HTMLUListElement> {
  list: GenericObject[];
  loading: boolean;
  showList: boolean;
  setShowList: Dispatch<SetStateAction<boolean>>;
}

interface imgProps {
  src: string;
  placeholder: string;
  alt: string;
}

const LazyLoadedImage: React.FC<imgProps> = ({ src, placeholder, alt }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);

  useEffect(() => {
    if (src) {
      const imageLoader = new Image();
      imageLoader.src = src;
      imageLoader.onload = () => {
        setImageSrc(src);
      };
    }
  }, [src]);

  return <Avatar src={imageSrc} alt={alt} width="100" height="100" />;
};

const List = (props: Props) => {
  const { list, loading, showList, setShowList, ...rest } = props;

  const closeModal = () => {
    setShowList(!showList);
  };

  return (
    <>
      {showList && (
        <Modal isOpen={showList} onClose={closeModal}>
          <UlContainer {...rest}>
            {list?.map((character: GenericObject) => (
              <LiContainer key={character.id}>
                <GeneralInfo>
                  <span>
                    <p style={{ backgroundColor: "yellow" }}>
                      {character.gender}
                    </p>
                  </span>
                  <LazyLoadedImage
                    src={character.image || ""}
                    placeholder={`${character.name} - ${character.species}`}
                    alt={
                      character.description ||
                      `${character.name} - ${character.species}`
                    }
                  />{" "}
                  <span>
                    <p>
                      {character.alive !== undefined && character.alive === true
                        ? "Alive"
                        : character.alive === false
                        ? "Dead"
                        : character.status}
                    </p>
                  </span>
                </GeneralInfo>

                <MoreInfo>
                  <h2 className="LiContainer__moreinfo__header">
                    {character.name}
                  </h2>

                  <span>
                    <p>
                      <strong>Species:</strong> {character.species}
                    </p>
                  </span>
                  <span>
                    <p>
                      <strong>Gender:</strong> {character.gender}
                    </p>
                  </span>
                  <span>
                    <p>
                      <strong>Location:</strong>{" "}
                      {character.house !== undefined
                        ? character.house
                        : character.location.name}
                    </p>
                  </span>
                </MoreInfo>
              </LiContainer>
            ))}
          </UlContainer>
        </Modal>
      )}
    </>
  );
};

export default List;
