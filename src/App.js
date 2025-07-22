import React, { useState } from 'react';
import './App.css';
import Alerts from './components/Alerts';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState("Enable DarkMode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      setModeText('Disable DarkMode');
      document.body.style.backgroundColor = '#1b1f22';
      showAlert("Dark mode has been Enabled.","success")
    }
    else{
      setMode('light');
      setModeText('Enable DarkMode');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been Disabled.","success")
    }
  }
  return (
    <Router>
      
        <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
        <Alerts alert={alert}/>
        <div className='container my-3'>
          <Routes>
            <Route path="/"
              element={<TextForm mode={mode} showAlert={showAlert}/>}
            />
            <Route path="/about"
              element={<About mode={mode}/>}
            />
          </Routes>
        </div>  
      
    </Router>
  );
}

export default App;
