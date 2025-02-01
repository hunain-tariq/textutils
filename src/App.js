import React from 'react'
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textfunc from './components/Textfunc';
import Alert from './components/Alert';


function App() {
  const [mode , setMode] = useState('light');
  const [alert , setAlert] = useState(null);

const showAlert =(message , type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 3000);
}

  const greenbtn = ()=>{
    if(mode === 'light'){
      setMode('green');
      document.body.style.backgroundColor='green';
      showAlert(" Green mode has been enabled" , "success");
      document.title = 'TextUtils - Green Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled" , "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  const tooglebtn = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert(" Dark mode has been enabled" , "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode has been enabled" , "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (

    <>
      <Navbar title="TextUtils"  mode= {mode} tooglebtn={tooglebtn} greenbtn={greenbtn}/>
      <Alert alert={alert}/>
      <Textfunc showAlert={showAlert  } heading="Enter your text to analyze."/> 
      <About/>
    </>
  );
}



export default App;
