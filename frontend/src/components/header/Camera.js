import React, { useState } from 'react';

import audio from '../../assets/BUG-ZAPPER-ELECTRONIC_6EXT8-10522.wav';
import { Hidden } from './Hidden';
import { 
  CameraContainer, 
  Circle, 
  InnerCircle } from './Styling';

export const Camera = () => {
  const [background, setBackground] = useState(false);
  
  const getBackground = () => {
    new Audio(audio).play();
    setBackground(true);
    setTimeout(() => {
      setBackground(false);
    }, 2000);
  };

  return (
    <CameraContainer>
      <Circle onClick={getBackground}>
        <InnerCircle></InnerCircle>
      </Circle>
      {background && <Hidden />}
    </CameraContainer>
  )
};
