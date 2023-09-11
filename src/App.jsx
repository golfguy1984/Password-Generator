import { useState } from 'react'
import './App.css'


function App() {

  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
  "/"];

  const [passwordOne, setPasswordOne] = useState("")
  const [passwordTwo, setPasswordTwo] = useState("")
  
  function generatePassword() {
    setPasswordOne("")
    for (let i = 0; i < 15; i++) {
      let random = characters[Math.floor(Math.random() * characters.length)]
      setPasswordOne(prevState => prevState += random)
    }
    setPasswordTwo("")
    for (let i = 0; i < 15; i++) {
      let random = characters[Math.floor(Math.random() * characters.length)]
      setPasswordTwo(prevState => prevState += random)
    }

  }

  const [lightMode, setLightMode] = useState(false)

  const styles = {
    main: {
    backgroundColor: lightMode ? "#ECFDF5" : "#1F2937"
    },
    h1: {
      color: lightMode ? "#2B283A" : "#FFF"
    },
    label: {
      color: lightMode ? "#2B283A" : "#FFF"
    },
    h4: {
      color: lightMode ? "#6B7280" : "#D5D4D8"
    }
  }

  function handleClick() {
    setLightMode(prevState => !prevState)
  }

  // onClick={() => setLightMode(!lightMode)}
  

  return (
    <main style={styles.main}>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handleClick}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={styles.label}> {lightMode ? "DarkMode" : "LightMode"}</label>
</div>
      <div>
        <h1 style={styles.h1}>Generate a <br /><span >random password</span></h1>
        <h4 style={styles.h4}>Never use an insecure password again</h4>
        <button onClick={generatePassword}>GENERATE PASSWORD</button>
      </div>
      <hr/>
      <div className="passwords">
        <div className="password-container">{passwordOne}</div>
        <div className="password-container">{passwordTwo}</div>
      </div>
    </main>
  )
}

export default App
