import { useEffect } from "react";
import { AnimationTitle, Letter } from "./Styling";
import audio from "../../assets/SciFiWhoosh 6040_51_4.wav";

export const TitleAnimation = () => {
  useEffect(() => {
    const sound = new Audio(audio);
    sound.volume = 1.0;
    sound.play();
  }, []);

  return (
    <AnimationTitle>
      <Letter>C</Letter>
      <Letter>i</Letter>
      <Letter>t</Letter>
      <Letter>i</Letter>
      <Letter>z</Letter>
      <Letter>e</Letter>
      <Letter>n</Letter>
      <Letter>s</Letter>
      <Letter>h</Letter>
      <Letter>i</Letter>
      <Letter>p</Letter>
    </AnimationTitle>
  );
};
