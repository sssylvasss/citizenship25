import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import audio from "../assets/Water Audio Files_BubblesBigBurstShort.wav";
import { BadgesAnimation } from "../components/animations/BadgesAnimation";
import { updateBadges, updateHighscoreFish } from "../reducers/profile";
import { Header } from "../components/header/Header";
import { Camera } from "../components/header/Camera";
import { GameTitle } from "../components/reusables/GameTitle";
import { GameScore } from "../components/reusables/GameScore";
import { GameFinish } from "../components/reusables/GameFinish";
import {
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  Icon11,
  Icon12,
  Icon13,
  Icon14,
  Icon15,
  Icon16,
  Icon17,
  Icon18,
  Icon19,
  TransparentWrapper,
  WaterContainer,
  MainContainer,
  FishWrapper1,
  FishWrapper2,
  FishWrapper3,
  FishWrapper4,
  FishWrapper5,
  FishWrapper6,
  FishWrapper7,
  FishWrapper8,
  FishWrapper9,
  FishWrapper10,
  FishWrapper11,
  FishWrapper12,
  FishWrapper13,
  FishWrapper14,
  FishWrapper15,
  FishWrapper16,
  FishWrapper17,
  FishWrapper18,
  FishWrapper19,
  BackgroundWater,
  Round1,
  Round2,
  Round3,
  RoundWrapper,
  RoundWrapper2,
  RoundWrapper3,
  HidePhone,
} from "../components/proteinfarm/Styling";

export const ProteinFarm = () => {
  const [score, setScore] = useState(0);
  const [disabled1, setDisabled1] = useState(false);
  const [disabled2, setDisabled2] = useState(false);
  const [disabled3, setDisabled3] = useState(false);
  const [disabled4, setDisabled4] = useState(false);
  const [disabled5, setDisabled5] = useState(false);
  const [disabled6, setDisabled6] = useState(false);
  const [disabled7, setDisabled7] = useState(false);
  const [disabled8, setDisabled8] = useState(false);
  const [disabled9, setDisabled9] = useState(false);
  const [disabled10, setDisabled10] = useState(false);
  const [disabled11, setDisabled11] = useState(false);
  const [disabled12, setDisabled12] = useState(false);
  const [disabled13, setDisabled13] = useState(false);
  const [disabled14, setDisabled14] = useState(false);
  const [disabled15, setDisabled15] = useState(false);
  const [disabled16, setDisabled16] = useState(false);
  const [disabled17, setDisabled17] = useState(false);
  const [disabled18, setDisabled18] = useState(false);
  const [disabled19, setDisabled19] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [counter, setCounter] = useState(30);
  const [openFinishedDialog, setOpenFinishedDialog] = useState(false);
  const accessToken = useSelector((store) => store.profile.accessToken);
  const highscore = useSelector((store) => store.profile.highscoreFish);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate("/signin");
    }
  }, [accessToken, navigate]);

  // Initialize timer and sound
  useEffect(() => {
    new Audio(audio).play();
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  // Collect badges and set animation
  // Update highscore if new
  const onCollectBadges = () => {
    if (score > highscore) {
      dispatch(updateHighscoreFish(score));
    }
    dispatch(updateBadges(score));
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

  // Functions for increasing score
  // Make fishes disappear when clicking
  const onClick1 = () => {
    setScore(score + 1);
    setDisabled1(true);
  };

  const onClick2 = () => {
    setScore(score + 1);
    setDisabled2(true);
  };

  const onClick3 = () => {
    setScore(score + 1);
    setDisabled3(true);
  };

  const onClick4 = () => {
    setScore(score + 1);
    setDisabled4(true);
  };

  const onClick5 = () => {
    setScore(score + 1);
    setDisabled5(true);
  };

  const onClick6 = () => {
    setScore(score + 1);
    setDisabled6(true);
  };

  const onClick7 = () => {
    setScore(score + 1);
    setDisabled7(true);
  };

  const onClick8 = () => {
    setScore(score + 1);
    setDisabled8(true);
  };

  const onClick9 = () => {
    setScore(score + 1);
    setDisabled9(true);
  };

  const onClick10 = () => {
    setScore(score + 1);
    setDisabled10(true);
  };

  const onClick11 = () => {
    setScore(score + 1);
    setDisabled11(true);
  };

  const onClick12 = () => {
    setScore(score + 1);
    setDisabled12(true);
  };

  const onClick13 = () => {
    setScore(score + 1);
    setDisabled12(true);
  };

  const onClick14 = () => {
    setScore(score + 1);
    setDisabled14(true);
  };

  const onClick15 = () => {
    setScore(score + 1);
    setDisabled15(true);
  };

  const onClick16 = () => {
    setScore(score + 1);
    setDisabled16(true);
  };

  const onClick17 = () => {
    setScore(score + 1);
    setDisabled17(true);
  };

  const onClick18 = () => {
    setScore(score + 1);
    setDisabled18(true);
  };

  const onClick19 = () => {
    setScore(score + 1);
    setDisabled19(true);
  };

  return (
    <>
      <Header />
      <Camera />
      <MainContainer>
        <GameTitle text="Protein Farm" />
        <GameScore
          type="Catches:"
          score={score || "0"}
          counter={counter.toString().padStart(2, "0")}
        />
        <WaterContainer>
          <TransparentWrapper disabled1="true"></TransparentWrapper>
          <FishWrapper1 onClick={() => setDisabled1(true)} disabled={disabled1}>
            <Icon1 onClick={onClick1} />
          </FishWrapper1>
          <TransparentWrapper disabled2="true"></TransparentWrapper>
          <FishWrapper2 onClick={() => setDisabled2(true)} disabled={disabled2}>
            <Icon2 onClick={onClick2} />
          </FishWrapper2>
          <TransparentWrapper disabled3="true"></TransparentWrapper>
          <FishWrapper3 onClick={() => setDisabled3(true)} disabled={disabled3}>
            <Icon3 onClick={onClick3} />
          </FishWrapper3>
          <TransparentWrapper disabled4="true"></TransparentWrapper>
          <FishWrapper4 onClick={() => setDisabled4(true)} disabled={disabled4}>
            <Icon4 onClick={onClick4} />
          </FishWrapper4>
          <TransparentWrapper disabled5="true"></TransparentWrapper>
          <FishWrapper5 onClick={() => setDisabled5(true)} disabled={disabled5}>
            <Icon5 onClick={onClick5} />
          </FishWrapper5>
          <TransparentWrapper disabled6="true"></TransparentWrapper>
          <FishWrapper6 onClick={() => setDisabled6(true)} disabled={disabled6}>
            <Icon6 onClick={onClick6} />
          </FishWrapper6>
          <TransparentWrapper disabled7="true"></TransparentWrapper>
          <FishWrapper7 onClick={() => setDisabled7(true)} disabled={disabled7}>
            <Icon7 onClick={onClick7} />
          </FishWrapper7>
          <TransparentWrapper disabled8="true"></TransparentWrapper>
          <FishWrapper8 onClick={() => setDisabled8(true)} disabled={disabled8}>
            <Icon8 onClick={onClick8} />
          </FishWrapper8>
          <TransparentWrapper disabled9="true"></TransparentWrapper>
          <FishWrapper9 onClick={() => setDisabled9(true)} disabled={disabled9}>
            <Icon9 onClick={onClick9} />
          </FishWrapper9>
          <TransparentWrapper disabled10="true"></TransparentWrapper>
          <FishWrapper10
            onClick={() => setDisabled10(true)}
            disabled={disabled10}
          >
            <Icon10 onClick={onClick10} />
          </FishWrapper10>
          <TransparentWrapper disabled11="true"></TransparentWrapper>
          <FishWrapper11
            onClick={() => setDisabled11(true)}
            disabled={disabled11}
          >
            <Icon11 onClick={onClick11} />
          </FishWrapper11>
          <TransparentWrapper disabled12="true"></TransparentWrapper>
          <FishWrapper12
            onClick={() => setDisabled12(true)}
            disabled={disabled12}
          >
            <Icon12 onClick={onClick12} />
          </FishWrapper12>

          <HidePhone>
            <FishWrapper13
              onClick={() => setDisabled13(true)}
              disabled={disabled13}
            >
              <Icon13 onClick={onClick13} />
            </FishWrapper13>
            <FishWrapper14
              onClick={() => setDisabled14(true)}
              disabled={disabled14}
            >
              <Icon14 onClick={onClick14} />
            </FishWrapper14>
            <FishWrapper15
              onClick={() => setDisabled15(true)}
              disabled={disabled15}
            >
              <Icon15 onClick={onClick15} />
            </FishWrapper15>
            <FishWrapper16
              onClick={() => setDisabled16(true)}
              disabled={disabled16}
            >
              <Icon16 onClick={onClick16} />
            </FishWrapper16>
            <FishWrapper17
              onClick={() => setDisabled17(true)}
              disabled={disabled17}
            >
              <Icon17 onClick={onClick17} />
            </FishWrapper17>
            <FishWrapper18
              onClick={() => setDisabled18(true)}
              disabled={disabled18}
            >
              <Icon18 onClick={onClick18} />
            </FishWrapper18>
            <FishWrapper19
              onClick={() => setDisabled19(true)}
              disabled={disabled19}
            >
              <Icon19 onClick={onClick19} />
            </FishWrapper19>
          </HidePhone>
          <RoundWrapper>
            <Round1></Round1>
          </RoundWrapper>
          <RoundWrapper2>
            <Round2></Round2>
          </RoundWrapper2>
          <RoundWrapper3>
            <Round3></Round3>
          </RoundWrapper3>
          <BackgroundWater></BackgroundWater>
        </WaterContainer>
        <GameFinish
          open={openFinishedDialog}
          topText="You managed to catch"
          score={score}
          textTwo="fishes which gives you"
          points={score}
          textThree="badges!"
          onClick={onCollectBadges}
          button={score > 0 ? "Collect badges" : "Sorry, no badges this time"}
        />
      </MainContainer>
      {animation && <BadgesAnimation text={score} />}
    </>
  );
};
