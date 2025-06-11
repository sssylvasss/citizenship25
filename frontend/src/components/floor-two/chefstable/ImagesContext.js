import React, { createContext, useState, useContext, useEffect } from "react";

export const ImagesContext = createContext({
  images: {},
});

export const useImagesContext = () => useContext(ImagesContext);

export const ImagesProvider = (props) => {
  const [images, setImages] = useState({});
  const [imagesReadyCnt, setImagesReadyCnt] = useState(0);
  const { r } = props;

  // import and preload images
  useEffect(() => {
    const importedImages = {};
    let i = 0;
    r.keys().forEach((item) => {
      const importedImg = r(item);
      importedImages[item.replace("./", "")] = importedImg;
      const img = new Image();
      img.onload = () => {
        i++;
        setImagesReadyCnt(i);
      };
      img.src = importedImg;
    });
    setImages(importedImages);
  }, [r]);

  return (
    <ImagesContext.Provider value={{ images }}>
      {props.children}
    </ImagesContext.Provider>
  );
};
