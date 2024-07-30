import './App.css';
import { useState } from "react";
import About from './components/About';
import Card from './components/Card';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#282856';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextBoost-Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "warning");
      document.title = 'TextBoost-Light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar title="Sagar" mode={mode} toggleMode={toggleMode} homeText="Home" aboutText="About Me" skillsText="Skills" contactText="Contact me" />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
