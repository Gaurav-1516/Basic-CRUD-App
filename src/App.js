import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // Whether dark mode is enabled or not ;
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = 'grey';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils-Dark Mode'
      // setInterval(() => {
      //   document.title = 'Virus Virus Virus!!'
      // }, 1700);
      // setInterval(() => {
      //   document.title = 'Install Antivirus!!'
      // }, 1500);

    } else {
      setMode("light");
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils-Light Mode'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About mode ={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode} showAlert={showAlert} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

/* <> </> is called jsx fragements where we can put many tags together as it jsx we need to wrap all the tags in the same tag*/
export default App;
