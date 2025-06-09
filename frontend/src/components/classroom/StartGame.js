import React from 'react';

import { 
  StartContainer, 
  Text, 
  ButtonContainer, 
  Button } from './Styling';

export const StartGame = ({ easy, medium, hard }) => {
  return (
    <StartContainer>
      <Text>Choose difficulty level: </Text>
      <ButtonContainer>
        <Button onClick={easy}>Beginner</Button>
        <Button onClick={medium}>Average</Button>
        <Button onClick={hard}>Expert</Button>
      </ButtonContainer>
    </StartContainer>
  )
};