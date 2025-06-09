import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { FirstInfo } from './FirstInfo';
import { SecondInfo } from './SecondInfo';
import { ThirdInfo } from './ThirdInfo';
import { FourthInfo } from './FourthInfo';
import { RoomInfo, CloseIcon, InfoIcon } from '../Styling';
import { InfoContainer, ShipInfo } from './Styling';

export const Info = () => {
  const [open, setOpen] = useState(false);

	const onToggleDialog = () => {
		setOpen(!open);
	};

  return (
    <>
      <RoomInfo 
        tabIndex='0' 
        aria-label='Ship Info' 
        onClick={onToggleDialog}>
        <InfoIcon />
      </RoomInfo>
      <Dialog open={open} onClose={onToggleDialog}>
        <InfoContainer>
          <ShipInfo>
            Ship info
            <CloseIcon tabIndex='0' onClick={onToggleDialog} />
          </ShipInfo>
          <Carousel showThumbs={false}>
            <FirstInfo />
            <SecondInfo />
            <ThirdInfo />
            <FourthInfo />
          </Carousel>
        </InfoContainer>
      </Dialog>
    </>
  )
};