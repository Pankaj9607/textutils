import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [modeText, setModeText] = useState("Enable DarkMode");

  const toggleMode = () => {
    if (mode === 'light'){
      setMode('dark');
      setModeText('Disable DarkMode');
      document.body.style.backgroundColor = '#1b1f22';
    }
    else{
      setMode('light');
      setModeText('Enable DarkMode');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Navbar title = "TextUtils" mode={mode} toggleMode={toggleMode} modeText={modeText}/>
      <div className='container my-3'>
        <TextForm mode={mode}/>
      </div>
    </>
  );
}

export default App;
