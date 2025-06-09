import React from 'react';

import { 
  ButtonContainer, 
  StartButton,
  NumberButton, 
  NumberText,
  Up,
  Left,
  Down,
  Right } from './Styling';

export const NumberButtons = ({ 
  start, 
  clickUp, 
  clickLeft, 
  clickRight, 
  clickDown }) => {
  return (
    <ButtonContainer>
      <StartButton onClick={start}>
        <NumberText>Start</NumberText>
      </StartButton>
      <NumberButton>
        <NumberText>1</NumberText>
      </NumberButton>
      <NumberButton onClick={clickUp}>
        <NumberText>2</NumberText>
        <Up />
      </NumberButton>
      <NumberButton>
        <NumberText>3</NumberText>
      </NumberButton>
      <NumberButton onClick={clickLeft}>
        <Left />
        <NumberText>4</NumberText>
      </NumberButton>
      <NumberButton>
        <NumberText>5</NumberText>
      </NumberButton>
      <NumberButton onClick={clickRight}>
        <NumberText>6</NumberText>
        <Right />
      </NumberButton>
      <NumberButton>
        <NumberText>7</NumberText>
      </NumberButton>
      <NumberButton onClick={clickDown}>
        <NumberText>8</NumberText>
        <Down />
      </NumberButton>
      <NumberButton>
        <NumberText>9</NumberText>
      </NumberButton>
  </ButtonContainer>
  )
}