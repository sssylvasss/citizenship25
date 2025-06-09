import React from 'react';

import { ItemsContainer, ItemsTitle } from './Styling';

export const CitizenItems = ({ item }) => {
  return (
    <ItemsContainer>
      <ItemsTitle>{item.title} </ItemsTitle>
    </ItemsContainer>
  )
};