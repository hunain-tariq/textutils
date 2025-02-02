import React , { useState } from 'react';
export default function Textfunc(props) {

  const changefunction =(event)=>{
    setText(event.target.value);
  }
  const onUppercase =()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase" , "success");
  }
  const onLowercase =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase" , "success");
  }

  const handleTextToSpeechClick =() =>{
    const Speech= new SpeechSynthesisUtterance();
    const message= document.getElementById("mybox").value;
    Speech.lang='en-US';
    Speech.text= message;
    window.speechSynthesis.speak(Speech);
    props.showAlert("Text has been read" , "success");
}
const cleartext =()=>{
    // let newText = '';
    setText(""); 
    props.showAlert("Text has been cleared" , "success"); 
}


const[text , setText] = useState('');
  return (
    <>
    <div>
        <div className="container" style={{color: props.mode=== 'dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="mybox" value={text} onChange={changefunction} rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2 my-1' onClick={onUppercase}>Convert To UpperCase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={onLowercase}>Convert To Lowercase</button>
        <button className='btn btn-primary mx-2 my-1' onClick={handleTextToSpeechClick}>Text to Speech</button>
        <button className='btn btn-primary mx-2 my-1' onClick={cleartext}>Clear Text</button>

    </div>
    </div>
   <div div className="container my-4"> 
      <h1>Your text Summary</h1>
      <p><b>{text.split(" ").filter(word => word.trim() !== "").length} words, {text.length} Characters</b></p>
      <p><b>{0.008 * text.split(" ").length}</b> Minutes read</p>
      <h2 className='my-4'>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
