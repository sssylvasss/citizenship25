import React from 'react'

import { MainBar, RollingText } from './Styling'
import { Weather } from './Weather';
import { Housing } from './Housing';


export const RollingInfoBar = () => {
  return (
    <MainBar>
      <RollingText>
        <Weather />
        <Housing />
      </RollingText>
    </MainBar>
  )
};
