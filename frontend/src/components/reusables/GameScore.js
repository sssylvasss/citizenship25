import { ScoreText, CounterText } from "./Styling";

export const GameScore = ({ score, type, counter }) => {
  return (
    <>
      {score && (
        <ScoreText>
          {type} {score}
        </ScoreText>
      )}
      {counter && <CounterText>00:{counter}</CounterText>}
    </>
  );
};
