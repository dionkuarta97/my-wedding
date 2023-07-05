import { useState } from "react";
import "./App.css";
import FirstScreen from "./screen/FirstScreen";
import lagu from "./assets/lagu.mp3";
import { Routes, Route, Navigate } from "react-router-dom";
import SecondScreen from "./screen/SecondScreen";

function App() {
  const [audio] = useState(new Audio(lagu));
  const [screen, setScreen] = useState(1);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <FirstScreen
              undangan={false}
              onClick={() => {
                audio.play();
                setScreen(2);
              }}
            />
          }
        />
        <Route
          path="/undangan"
          element={
            <FirstScreen
              undangan={true}
              onClick={() => {
                audio.play();
                setScreen(2);
              }}
            />
          }
        />
        <Route
          path="/wedding"
          element={
            screen !== 2 ? (
              <>
                {localStorage.getItem("to") ? (
                  <Navigate to={"/undangan?to=" + localStorage.getItem("to")} />
                ) : (
                  <Navigate to={"/"} />
                )}
              </>
            ) : (
              <SecondScreen
                pause={() => audio.pause()}
                playing={() => audio.play()}
              />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
