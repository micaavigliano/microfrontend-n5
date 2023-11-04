import React, { useState, useEffect } from "react";
import { UlContainer, LiContainer } from "./List.styled";

export interface GenericObject {
  [key: string]: any;
}

export interface Props extends React.LiHTMLAttributes<HTMLUListElement> {
  list: GenericObject[];
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

  return <img src={imageSrc} alt={alt} width="100" height="100" />;
};

const List = (props: Props) => {
  const { list, ...rest } = props;

  return (
    <UlContainer {...rest}>
      {list?.map((character: any, index: number) => (
        <LiContainer key={index}>
          <p>{character.name}</p>
          <LazyLoadedImage
            key={index}
            src={character.image || ""}
            placeholder={`${character.name} - ${character.species}`}
            alt={
              character.description ||
              `${character.name} - ${character.species}`
            }
          />{" "}
        </LiContainer>
      ))}
    </UlContainer>
  );
};

export default List;
