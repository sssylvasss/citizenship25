import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import audioTwo from "../assets/ElectronicBeep PS01_62_1.wav";
import audio from "../assets/BuzzerGameShow MIX64_36_7.wav";
import { updateBadges, updateHighscoreMath } from "../reducers/profile";
import { NumberInput } from "../components/classroom/NumberInput";
import { Header } from "../components/header/Header";
import { Camera } from "../components/header/Camera";
import { BadgesAnimation } from "../components/animations/BadgesAnimation";
import { generateProblem } from "../components/classroom/Helpers";
import { StartGame } from "../components/classroom/StartGame";
import { GameTitle } from "../components/reusables/GameTitle";
import { GameScore } from "../components/reusables/GameScore";
import { GameFinish } from "../components/reusables/GameFinish";

import {
  MainContainer,
  MathContainer,
  MathProblem,
} from "../components/classroom/Styling";

export const Classroom = () => {
  const [openFinish, setOpenFinish] = useState(false);
  const [start, setStart] = useState(false);
  const [score, setScore] = useState(0);
  const [counter, setCounter] = useState(null);
  const [easy, setEasy] = useState(false);
  const [medium, setMedium] = useState(false);
  const [hard, setHard] = useState(false);
  const [currentProblem, setCurrentProblem] = useState(generateProblem());
  const [userAnswer, setUserAnswer] = useState("");
  const [showError, setShowError] = useState(false);
  const [animation, setAnimation] = useState(false);
  const answerField = useRef(null);
  const accessToken = useSelector((store) => store.profile.accessToken);
  const highscore = useSelector((store) => store.profile.highscoreMath);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken, navigate]);

  //Initializing the timer
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  // Opens dialog when game is finished
  useEffect(() => {
    if (counter === 0) {
      setOpenFinish(true);
    }
  }, [counter]);

  // Functions for difficulty level
  const onClickEasy = () => {
    setCurrentProblem(generateProblem(10));
    setEasy(true);
    setStart(true);
    setCounter(40);
  };

  const onClickMedium = () => {
    setCurrentProblem(generateProblem(20));
    setMedium(true);
    setStart(true);
    setCounter(30);
  };

  const onClickHard = () => {
    setCurrentProblem(generateProblem(30));
    setHard(true);
    setStart(true);
    setCounter(25);
  };

  // Submitting answer
  const handleSubmit = (e) => {
    e.preventDefault();
    let correctAnswer;

    if (currentProblem.operator === "+")
      correctAnswer = currentProblem.numberOne + currentProblem.numberTwo;
    if (currentProblem.operator === "-")
      correctAnswer = currentProblem.numberOne - currentProblem.numberTwo;
    if (currentProblem.operator === "x")
      correctAnswer = currentProblem.numberOne * currentProblem.numberTwo;

    if (correctAnswer === parseInt(userAnswer, 10)) {
      new Audio(audioTwo).play();
      setScore((prev) => prev + 1);
      setUserAnswer("");
      if (easy) setCurrentProblem(generateProblem(10));
      if (medium) setCurrentProblem(generateProblem(20));
      if (hard) setCurrentProblem(generateProblem(30));
    } else {
      new Audio(audio).play();
      setShowError(true);
      setTimeout(() => setShowError(false), 400);
    }
  };

  // Collecting badges
  // Returning to main
  const collectBadges = () => {
    if (score > 0) {
      if (score > highscore) {
        dispatch(updateHighscoreMath(score));
      }
      if (hard === true) {
        dispatch(updateBadges(score * 2));
      } else {
        dispatch(updateBadges(score));
      }
      setAnimation(true);
      setOpenFinish(false);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Header />
      <Camera />
      <MainContainer>
        <GameTitle text="Classroom" />
        {!start ? (
          <StartGame
            easy={onClickEasy}
            medium={onClickMedium}
            hard={onClickHard}
          />
        ) : (
          <>
            <GameScore
              score={score || "0"}
              type="Score:"
              counter={counter.toString().padStart(2, "0")}
            />
            <MathContainer>
              <MathProblem wrongAnswer={showError}>
                {currentProblem.numberOne} {currentProblem.operator}{" "}
                {currentProblem.numberTwo}
              </MathProblem>
              <NumberInput
                handleSubmit={handleSubmit}
                answerField={answerField}
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              <GameFinish
                open={openFinish}
                topText="You managed to get"
                score={score}
                textTwo=" correct answers, which gives you"
                points={!hard ? score : score * 2}
                textThree="badges!"
                onClick={collectBadges}
                button={score > 0 ? "Collect badges" : "Try again later"}
              />
            </MathContainer>
          </>
        )}
        {animation && <BadgesAnimation text={!hard ? score : score * 2} />}
      </MainContainer>
    </>
  );
};
