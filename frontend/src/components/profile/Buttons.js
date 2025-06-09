import React from 'react';
import { FaSignOutAlt, FaCog } from 'react-icons/fa';

import { 
  ButtonContainer, 
  ButtonSignOut, 
  ButtonSettings } from './Styling';

export const Buttons = ({ onSettings, onClick }) => {
  return (
    <ButtonContainer>
      <ButtonSettings onClick={onSettings}>
        <FaCog />
      </ButtonSettings>
      <ButtonSignOut onClick={onClick}>
       <FaSignOutAlt />
      </ButtonSignOut>
    </ButtonContainer>
  )
};