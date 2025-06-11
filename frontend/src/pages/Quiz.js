import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import audio from "../assets/FreezeBee2ch SEG020118.wav";
import { updateBadges } from "../reducers/profile";
import { Header } from "../components/header/Header";
import { Camera } from "../components/header/Camera";
import { BadgesAnimation } from "../components/animations/BadgesAnimation";
import { Start } from "../components/quiz/Start";
import { Animation } from "../components/quiz/Animation";
import { GameTitle } from "../components/reusables/GameTitle";
import { GameScore } from "../components/reusables/GameScore";
import { GameFinish } from "../components/reusables/GameFinish";
import {
  MainContainer,
  TriviaContainer,
  Question,
  ButtonContainer,
  AnswerButton,
} from "../components/quiz/Styling";

export const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");
  const [start, setStart] = useState(false);
  const [counter, setCounter] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [openFinish, setOpenFinish] = useState(false);
  const [animation, setAnimation] = useState(false);
  const accessToken = useSelector((store) => store.profile.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken, navigate]);

  // Fetch questions
  const fetchQuestion = useCallback(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=boolean`,
    )
      .then((res) => res.json())
      .then((data) => {
        randomizeAnswer(
          data.results[0].incorrect_answers,
          data.results[0].correct_answer,
        );
        setQuestions(data.results);
        setLoaded(true);
      });
  }, [difficulty]);

  useEffect(() => {
    fetchQuestion();
  }, [fetchQuestion]);

  // Initialize the timer
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  // Mix together incorrect and correct
  const randomizeAnswer = (array, correctAnswer) => {
    const randomIndex = Math.floor(Math.random() * 2);
    array.splice(randomIndex, 0, correctAnswer);
  };

  // Choose easy or hard
  // Start timer
  const handleDifficulty = (level) => {
    setDifficulty(level);
    setStart(true);
    setCounter(30);
  };

  // Checking answer and moving on to next question
  // If questions run out, load new ones
  const handleAnswer = (e, answer) => {
    e.preventDefault();
    new Audio(audio).play();

    if (answer === questions[questionIndex].correct_answer) {
      setScore(score + 1);
    }
    if (questionIndex + 1 < questions.length) {
      randomizeAnswer(
        questions[questionIndex + 1].incorrect_answers,
        questions[questionIndex + 1].correct_answer,
      );
      setQuestionIndex(questionIndex + 1);
    } else {
      fetchQuestion();
      setQuestionIndex(0);
    }
  };

  // Finish dialog when time is up
  useEffect(() => {
    if (counter === 0) {
      setOpenFinish(true);
    }
  }, [counter]);

  // Collect badges after finished game
  const onCollectBadges = () => {
    dispatch(updateBadges(score));
    setAnimation(true);
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <>
      <Header />
      <Camera />
      <MainContainer>
        <GameTitle text="Trivia:" />
        {!start ? (
          <Start
            easy={() => handleDifficulty("easy")}
            hard={() => handleDifficulty("hard")}
          />
        ) : (
          <>
            <GameScore
              type="Score:"
              score={score || "0"}
              counter={counter.toString().padStart(2, "0")}
            />
            {loaded && (
              <TriviaContainer>
                <Question>
                  {questions[questionIndex].question
                    .replace(/&quot;/g, '"')
                    .replace(/&#039;/g, "'")}
                </Question>
                <ButtonContainer>
                  {questions[questionIndex].incorrect_answers.map((option) => {
                    return (
                      <AnswerButton
                        key={option}
                        onClick={(e) => handleAnswer(e, option)}
                      >
                        {option}
                      </AnswerButton>
                    );
                  })}
                </ButtonContainer>
                <Animation />
              </TriviaContainer>
            )}
            <GameFinish
              open={openFinish}
              topText="You managed to get"
              score={score}
              textTwo="correct answers, which gives you"
              points={score}
              textThree="badges!"
              onClick={onCollectBadges}
              button={score > 0 ? "Collect badges" : "Try again later"}
            />
          </>
        )}
      </MainContainer>
      {animation && <BadgesAnimation text={score} />}
    </>
  );
};
