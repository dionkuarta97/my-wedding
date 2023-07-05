import React, { useState } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

import IconButton from "@mui/material/IconButton";

import FirstSlide from "../components/FirstSlide";
import SecondSlide from "../components/SecondSlide";
import ThirdSlide from "../components/ThirdSlide";
import { useLocation } from "react-router-dom";
import FourthSlide from "../components/FourthSlide";
const SecondScreen = (props) => {
  const { state } = useLocation();
  const { playing, pause } = props;
  const [play, setPlay] = useState(true);
  return (
    <>
      <IconButton
        sx={{
          top: "90%",
          left: "10%",
          position: "fixed",
          zIndex: 1000,
          borderRadius: 180,
          backgroundColor: "whitesmoke",
        }}
        onClick={() => {
          if (play) {
            pause();
            setPlay(false);
          } else {
            playing();
            setPlay(true);
          }
        }}
      >
        {play ? <PauseCircleIcon /> : <PlayCircleIcon />}
      </IconButton>

      <FirstSlide />
      <SecondSlide />
      <ThirdSlide />
      <FourthSlide kepada={state.kepada !== null ? state.kepada : null} />
    </>
  );
};

export default SecondScreen;
