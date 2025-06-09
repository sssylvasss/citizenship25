import React from 'react';
import { useSpring, animated } from 'react-spring';

import { useImagesContext } from './ImagesContext';

import { food } from './Config';
import { Items, FoodImage } from './Styling';

export const FoodItems = ({ select }) => {
  const { images } = useImagesContext();

  const propsTimer = useSpring({
    from: { transform: 'scale(1)' },
    to: [{ transform: 'scale(0.5)' }, { transform: 'scale(1)' }]
  });


  return (
    <Items>
      {food.map((name, i) => (
        <animated.div style={select && name === i ? propsTimer : null} key={i}>
          <FoodImage src={images[name + '.png']} alt={name} onClick={select} />
        </animated.div>
      ))}
    </Items>
  );
};