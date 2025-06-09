import React, { useEffect, useState } from 'react';

import { Header } from '../../header/Header';
import { Camera } from '../../header/Camera';
import { 
	MainContainer, 
	PhoneContainer,
	PhoneName,
	SnakeContainer } from './Styling';
import { Snake } from './Snake';
import { SnakeFood } from './SnakeFood';
import { getRandomCoordinates } from './Helpers';
import { GameTitle } from '../../reusables/GameTitle';
import { GameScore } from '../../reusables/GameScore';
import { NumberButtons } from './NumberButtons';
import { GameFinish } from 'components/reusables/GameFinish';


export const SnakeGame = () => {
  const [snakeDots, setSnakeDots] = useState([[0, 0], [0, 2], [0, 4], [0, 6]]);
	const [foodDot, setFoodDot] = useState(getRandomCoordinates());
	const [direction, setDirection] = useState(null);
	const [alive, setAlive] = useState(false);
	const [speed, setSpeed] = useState(300);
	const [score, setScore] = useState(0);
	const [open, setOpen] = useState(false);


	useEffect(() => {
		document.onkeydown = onKeyDown;
		checkIfOutOfBorders();
		checkIfEat();
		const run = setInterval(() => {
			moveSnake(alive);
		}, speed);
		return () => clearInterval(run);
	});

	const onKeyDown = (e) => {
		if (e.keyCode === 38) {
			setDirection('UP');
		} else if (e.keyCode === 40) {
			setDirection('DOWN');
		} else if (e.keyCode === 37) {
			setDirection('LEFT');
		} else if (e.keyCode === 39) {
			setDirection('RIGHT');
		}
	};

  const moveSnake = (state) => {
		if (state === true) {
			let dots = [...snakeDots];
			let head = dots[dots.length - 1];

			if (direction === 'RIGHT') {
				head = [head[0], head[1] + 2];
			} else if (direction === 'LEFT'){
					head = [head[0], head[1] - 2];
			} else if (direction === 'DOWN') {
					head = [head[0] + 2, head[1]];
			} else {
					head = [head[0] - 2, head[1]];
			}

			dots.push(head);
			dots.shift();
			setSnakeDots(dots);
		}
	};

  const checkIfEat = () => {
		let head = snakeDots[snakeDots.length - 1];
		let food = foodDot;
		if (head[0] === food[0] && head[1] === food[1]) {
			setFoodDot(getRandomCoordinates());
			enlargeSnake();
			increaseSpeed();
			setScore(score + 10);
		}
	};

  const onGameOver = () => {
		setOpen(true);
		setAlive(false);
		setSnakeDots([[0, 0], [0, 2], [0, 4], [0, 6]]);
		setFoodDot([10, 10]);
		setDirection('RIGHT');
	};

  const checkIfOutOfBorders = () => {
		let head = snakeDots[snakeDots.length - 1];
		if (head[0] === 16 || head[1] === 22 || head[0] < 0 || head[1] < 0) {
			onGameOver();
		}
	};

  const enlargeSnake = () => {
		let newSnake = [snakeDots[snakeDots.length - 1], ...snakeDots];
		setSnakeDots(newSnake);
	};

	const increaseSpeed = () => {
		if (speed > 10) {
			setSpeed(speed - 10);
		}
	};

	const rePlay = () => {
		setDirection('RIGHT');
		setScore(0);
		setAlive(true);
	};

  return (
    <>
      <Header />
      <Camera />
      <MainContainer>
        <GameTitle text='Snake' />
        <GameScore type='Score:' score={score || '0'} />
					<PhoneContainer>
						<PhoneName>Shipia 3310</PhoneName>
						<SnakeContainer>
							<Snake snakeDots={snakeDots} />
							<SnakeFood foodDot={foodDot} />
						</SnakeContainer>
						<NumberButtons 
							start={rePlay}
							clickUp={() => setDirection('UP')}
							clickLeft={() => setDirection('LEFT')}
							clickRight={() => setDirection('RIGHT')}
							clickDown={() => setDirection('DOWN')} />
					</PhoneContainer>
					<GameFinish	
						open={open}
						topText='You managed to get'
						score={score} 
						textTwo='points!'
						onClick={rePlay}
						button='Restart' />
      </MainContainer>
    </>
  )
}