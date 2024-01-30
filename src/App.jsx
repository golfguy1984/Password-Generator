import { useRef, useState } from "react";
import { characters } from "./data.js";
import "./App.css";

function App() {
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [lightMode, setLightMode] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const [tooltipTwo, setTooltipTwo] = useState(false);
  const inputRef = useRef(null);
  const inputTwoRef = useRef(null);

  const styles = {
    main: {
      backgroundColor: lightMode ? "#ECFDF5" : "#1F2937",
    },
    h1: {
      color: lightMode ? "#2B283A" : "#FFF",
    },
    label: {
      color: lightMode ? "#2B283A" : "#FFF",
    },
    h4: {
      color: lightMode ? "#6B7280" : "#D5D4D8",
    },
  };

  function generatePassword() {
    let newPasswordOne = "";
    let newPasswordTwo = "";

    for (let i = 0; i < 15; i++) {
      let random = characters[Math.floor(Math.random() * characters.length)];
      newPasswordOne += random;
    }
    for (let i = 0; i < 15; i++) {
      let random = characters[Math.floor(Math.random() * characters.length)];
      newPasswordTwo += random;
    }
    setPasswordOne(newPasswordOne);
    setPasswordTwo(newPasswordTwo);
  }

  function handleClick() {
    setLightMode((prevState) => !prevState);
  }

  const copyText = (id) => {
    if (id === 1) {
      let textOne = inputRef.current.innerText;
      navigator.clipboard.writeText(textOne);
      setTooltip(true);
      setTimeout(() => setTooltip(false), 1000);
    } else {
      let textTwo = inputTwoRef.current.innerText;
      navigator.clipboard.writeText(textTwo);
      setTooltipTwo(true);
      setTimeout(() => setTooltipTwo(false), 1000);
    }
  };

  return (
    <main style={styles.main}>
      <div>
        <label className="switch">
          <input type="checkbox" onClick={handleClick} />
          <span className="slider"></span>
        </label>
      </div>
      <div>
        <h1 style={styles.h1}>
          Generate a <br />
          <span>random password</span>
        </h1>
        <h4 style={styles.h4}>Never use an insecure password again</h4>
        <button onClick={generatePassword}>GENERATE PASSWORD</button>
      </div>
      <hr />
      <div className="passwords">
        <div
          ref={inputRef}
          className="password-container"
          onClick={() => copyText(1)}
        >
          {passwordOne}

          <div className="tooltip" style={{ opacity: tooltip ? "100" : "0" }}>
            <div
              className="tooltiptext"
              style={{ opacity: tooltip ? "100" : "0" }}
            >
              Copied!
            </div>
          </div>
        </div>

        <div
          ref={inputTwoRef}
          className="password-container"
          onClick={() => copyText(2)}
        >
          {passwordTwo}

          <div
            className="tooltip"
            style={{ opacity: tooltipTwo ? "100" : "0" }}
          >
            <div
              className="tooltiptext"
              style={{ opacity: tooltipTwo ? "100" : "0" }}
            >
              Copied!
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
