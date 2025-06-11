import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import audio from "../../assets/ElectHitZap PE1030530.wav";
import { updateBadges, updateHighscoreSpaceball } from "../../reducers/profile";
import { Header } from "../header/Header";
import { Camera } from "../header/Camera";
import { BadgesAnimation } from "../../components/animations/BadgesAnimation";
import { GameTitle } from "../reusables/GameTitle";
import { GameScore } from "../reusables/GameScore";
import { GameFinish } from "../reusables/GameFinish";
import {
  MainContainer,
  ButtonOne,
  ButtonTwo,
  ButtonThree,
  ButtonFour,
  ButtonFive,
} from "./Styling";

export const GameBall = () => {
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(30);
  const [openFinishedDialog, setOpenFinishedDialog] = useState(false);
  const [animation, setAnimation] = useState(false);
  const accessToken = useSelector((store) => store.profile.accessToken);
  const highscore = useSelector((store) => store.profile.highscoreSpaceball);
  const numOfBadges = Math.round(score / 3);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken, navigate]);

  // Initializing timer
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  // Collect badges after game
  // Update highscore (if new highscore)
  // Update badges, set animation and push to main
  const onCollectBadges = () => {
    if (score > highscore) {
      dispatch(updateHighscoreSpaceball(score));
    }
    dispatch(updateBadges(numOfBadges));
    setAnimation(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  // Finish game when time is up
  useEffect(() => {
    if (counter === 0) {
      setOpenFinishedDialog(true);
    }
  }, [counter]);

  const onClickScore = (number) => {
    new Audio(audio).play();
    setScore(score + number);
  };

  return (
    <>
      <Header />
      <Camera />
      <MainContainer>
        <GameTitle text="Space Ball" />
        <GameScore
          type="Score:"
          score={score || "0"}
          counter={counter.toString().padStart(2, "0")}
        />
        <ButtonOne onClick={() => onClickScore(4)}></ButtonOne>
        <ButtonTwo onClick={() => onClickScore(3)}></ButtonTwo>
        <ButtonThree onClick={() => onClickScore(1)}></ButtonThree>
        <ButtonFour onClick={() => onClickScore(2)}></ButtonFour>
        <ButtonFive onClick={() => onClickScore(5)}></ButtonFive>
        <GameFinish
          open={openFinishedDialog}
          topText="You managed to get"
          score={score}
          textTwo="points which is"
          points={numOfBadges}
          textThree="badges!"
          onClick={onCollectBadges}
          button={score > 0 ? "Collect badges" : "Sorry, no badges this time"}
        />
      </MainContainer>
      {animation && <BadgesAnimation text={numOfBadges} />}
    </>
  );
};
