import React from 'react';

import { RoomStore, ShoppingIcon } from './Styling';

export const Store = () => {
  return (
    <RoomStore 
      tabIndex='0' 
      aria-label='Store' 
      to='/store'>
      <ShoppingIcon />
    </RoomStore>
  )
};