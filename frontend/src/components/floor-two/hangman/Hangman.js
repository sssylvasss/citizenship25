import React, { useState, useEffect } from "react";

import { show } from "./Helpers";
import { Header } from "../../header/Header";
import { Camera } from "../../header/Camera";
import { MainContainer, GameContainer, Status, StatusText } from "./Styling";
import { Figure } from "./Figure";
import { Notification } from "./Notification";
import { words } from "./WordsArray";
import { Word } from "./Word";
import { GameTitle } from "../../reusables/GameTitle";
import { GameScore } from "../../reusables/GameScore";
import { GameFinish } from "../../reusables/GameFinish";

let selectedWord = words[Math.floor(Math.random() * words.length)];

export const Hangman = () => {
  const [playing, setPlaying] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playing && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }

      if (wrongLetters.length === 8) {
        setPlaying(false);
        setOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playing]);

  const restartGame = () => {
    setPlaying(true);
    setCorrectLetters([]);
    setWrongLetters([]);
    setOpen(false);
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  };

  return (
    <>
      <Header />
      <Camera />
      <MainContainer>
        <GameTitle text="Hangman" />
        <GameScore type="Mistakes:" score={wrongLetters.length || "0"} />
        <Status>
          Wrong Letters:
          <StatusText>{wrongLetters}</StatusText>
        </Status>
        <GameContainer>
          <Figure wrongLetters={wrongLetters} />
          <Word selectedWord={selectedWord} correctLetters={correctLetters} />
          <Notification visible={showNotification} />
        </GameContainer>
        <GameFinish
          open={open}
          topText={wrongLetters.length < 8 ? "Good job!" : "Sorry!"}
          bottomText={wrongLetters.length >= 8 ? "The correct word was:" : ""}
          bottomType={
            wrongLetters.length >= 8 ? selectedWord.toUpperCase() : null
          }
          onClick={restartGame}
          button="Restart"
        />
      </MainContainer>
    </>
  );
};
