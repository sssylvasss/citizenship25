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
  const [feedback, setFeedback] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const accessToken = useSelector((store) => store.profile.accessToken);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Mix together incorrect and correct
  const randomizeAnswer = (array, correctAnswer) => {
    const randomIndex = Math.floor(Math.random() * 2);
    array.splice(randomIndex, 0, correctAnswer);
  };

  // Fallback questions in case API fails
  const fallbackQuestions = {
    easy: [
      {
        question: "Is the Earth round?",
        correct_answer: "True",
        incorrect_answers: ["False"]
      },
      {
        question: "Do humans have 4 lungs?",
        correct_answer: "False",
        incorrect_answers: ["True"]
      },
      {
        question: "Is the sun a star?",
        correct_answer: "True",
        incorrect_answers: ["False"]
      },
      {
        question: "Can fish breathe underwater?",
        correct_answer: "True",
        incorrect_answers: ["False"]
      },
      {
        question: "Is the moon made of cheese?",
        correct_answer: "False",
        incorrect_answers: ["True"]
      }
    ],
    hard: [
      {
        question: "Is quantum entanglement faster than light?",
        correct_answer: "False",
        incorrect_answers: ["True"]
      },
      {
        question: "Do black holes emit Hawking radiation?",
        correct_answer: "True",
        incorrect_answers: ["False"]
      },
      {
        question: "Is the speed of light constant in all mediums?",
        correct_answer: "False",
        incorrect_answers: ["True"]
      },
      {
        question: "Do neutrinos have mass?",
        correct_answer: "True",
        incorrect_answers: ["False"]
      },
      {
        question: "Is time dilation a real phenomenon?",
        correct_answer: "True",
        incorrect_answers: ["False"]
      }
    ]
  };

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
      .then((res) => {
        if (res.status === 429) {
          throw new Error('Rate limit exceeded. Please wait a moment and try again.');
        }
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data.results && data.results.length > 0) {
          randomizeAnswer(
            data.results[0].incorrect_answers,
            data.results[0].correct_answer,
          );
          setQuestions(data.results);
          setLoaded(true);
        } else {
          console.error('No questions received from API');
          setLoaded(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
        // Use fallback questions instead of failing
        const fallbackData = fallbackQuestions[difficulty];
        if (fallbackData && fallbackData.length > 0) {
          // Randomize the fallback questions order
          const shuffledFallback = [...fallbackData].sort(() => Math.random() - 0.5);
          randomizeAnswer(
            shuffledFallback[0].incorrect_answers,
            shuffledFallback[0].correct_answer,
          );
          setQuestions(shuffledFallback);
          setLoaded(true);
        } else {
          setLoaded(false);
          alert(`Failed to load questions: ${error.message}. Please try again later.`);
        }
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


  const handleDifficulty = (level) => {
    setDifficulty(level);
    setStart(true);
    setCounter(30);
  };

  const handleAnswer = (e, answer) => {
    e.preventDefault();
    new Audio(audio).play();

    // Show feedback
    const isCorrect = answer === questions[questionIndex].correct_answer;
    setFeedback({
      isCorrect
    });
    setShowFeedback(true);

    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to next question after showing feedback
    setTimeout(() => {
      setShowFeedback(false);
      setFeedback(null);

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
    }, 1500); // Show feedback for 1.5 seconds
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
            {!loaded && (
              <TriviaContainer>
                <Question>Loading questions...</Question>
              </TriviaContainer>
            )}
            {loaded && questions && questions.length > 0 && questions[questionIndex] && (
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
                        disabled={showFeedback}
                      >
                        {option}
                      </AnswerButton>
                    );
                  })}
                </ButtonContainer>
                <Animation />
                {showFeedback && (
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1000,
                    textAlign: 'center',
                    fontSize: '64px',
                    fontWeight: 'bold',
                    color: feedback.isCorrect ? '#4CAF50' : '#f44336',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    {feedback.isCorrect ? '✓' : '✗'}
                  </div>
                )}
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
