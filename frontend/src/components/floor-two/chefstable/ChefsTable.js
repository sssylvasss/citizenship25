import React, { useState, useEffect, useCallback } from 'react';

import { Plates } from './Plates';
import { FoodItems } from './FoodItems';
import { ImagesProvider } from './ImagesContext';
import { GameContainer, ShopContainer } from "./Styling";
import { food } from './Config';
import { Header } from '../../header/Header';
import { Camera } from '../../header/Camera';
import { GameTitle } from '../../reusables/GameTitle';
import { GameScore } from '../../reusables/GameScore';
import { GameFinish } from '../../reusables/GameFinish';

export const ChefsTable = () => {
  const [foodToCook, setFoodToCook] = useState([]);
  const [status, setStatus] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [counter, setCounter] = useState(25);
  const [score, setScore] = useState(0);
  const [openFinish, setOpenFinish] = useState(false);

  //Initializing the timer
	useEffect(() => {
    setStatus('playing');
		const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
		return () => clearInterval(timer);
	}, [counter]);

  // Opens dialog when game is finished
	useEffect(() => {
		if (counter === 0 || score === 16) {
			setOpenFinish(true);
		}
	}, [counter, score]);

  // Get random food items
  const setRandomFood = useCallback(() => {
    const foodToCook = food
      .map(item => {
        return Array.from({ length: 4 }).fill(item);
      })
      .reduce((acc, arr) => acc.concat(arr), [])
      .sort(() => 0.5 - Math.random())
      .slice(0, 16)
      .sort()
      .reduce((acc, val) => {
        const newItem = {
          selected: false,
          name: val
        };
        return [...acc, newItem];
      }, []);
    setFoodToCook(foodToCook);
  }, []);

  useEffect(() => {
    setRandomFood();
  }, [setRandomFood]);

  // Restart game
  const restartGame = () => {
    setOpenFinish(!openFinish);
    setStatus('playing');
    setScore(0);
    setCounter(30);
    setRandomFood();
  };

  // Click food
  const onSelectFood = e => {
    if (status !== 'playing') return;
    const foundIndex = foodToCook.findIndex(
      item => e.target.alt === item.name && !item.selected
    );
    if (foundIndex !== -1) {
      const newFoodToCook = [...foodToCook];
      newFoodToCook[foundIndex] = {
        ...foodToCook[foundIndex],
        selected: true
      };
      setFoodToCook(newFoodToCook);
      setSelectedIndex(foundIndex);
      setScore(score + 1);
      if (newFoodToCook.findIndex(item => item.selected === false) === -1) {
        setStatus('win');
      }
    }
  };

  return (
    <ImagesProvider
      r={require.context('./images', true,)}>
      <Header />
      <Camera />
        <GameContainer>
          <GameTitle text='Chefs table' />
          <GameScore 
            score={score || '0'}
            type='Finished plates:'
            counter={counter.toString().padStart(2, '0') || 0} />
          <ShopContainer>
            <Plates
              foodToCook={foodToCook}
              reset={restartGame}
              status={status}
              selectedIndex={selectedIndex}
            />
          </ShopContainer>
          <FoodItems selectedIndex={selectedIndex} select={onSelectFood} />
          <GameFinish
            open={openFinish}
            topText={score === 16 ? 'GOOD JOB! You managed to plate all the food in time!'
            : 'You did not manage to plate all the food in time, now citizens will go hungry.'}
            button={score === 16 ? 'Collect badges' : 'Try again'}
            onClick={restartGame} />
        </GameContainer>
    </ImagesProvider>
  );
};