import React, { useState, useEffect } from "react";

export interface imgProps {
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

  return <img src={imageSrc} alt={alt} width="110" height="100" />;
};

export default LazyLoadedImage;
