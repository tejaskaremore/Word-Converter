import React, { useState } from 'react'

export default function Textform(props) {
  const handleUpClick = () => {
    console.log('upperCase was clicked', text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted To Uppercase", "success")
  }

  const handleLoClick = () => {
    console.log('LowerCase was clicked', text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Converted To Lowercase", "success")
  }

  const handleClearClick = () => {
    console.log('clear was clicked', text)
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success")
  }
  // text.charAt(0).toUpperCase() + text.slice(1)
  const handleCapClick = () => {
    console.log('Capitalize was clicked', text)
    let newText = text.split(' ').map(w => w.substring(0, 1).toUpperCase() + w.substring(1)).join(' ');
    setText(newText);
    props.showAlert("Text Converted To Capitalized", "success")
  }

  const handlecopy = () => {
    let copyText = document.getElementById("My Box");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copied", "success")
  };




  const handleOnChange = (event) => {
    console.log('on Change')
    setText(event.target.value);
  }
  const [text, setText] = useState();
  // text = "new text"; //wrong way to change the state
  // setText ("new text");  // correct way to change the state
  const myStyle = {

  }


  return (
    <>
      <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="form-floating">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'white' : 'black', color: props.mode === 'light' ? 'black' : 'white' }} onChange={handleOnChange} placeholder="Leave a comment here" id="My Box" rows="8"></textarea>
          <label htmlFor="my Box" style={myStyle}>Enter Text Here</label>
          <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleCapClick}>Capitalized Text</button>
          <button className="btn btn-primary my-2 mx-1" onClick={handlecopy}> Copy Text</button>
        </div>
      </div>

      <div className="container mt-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h1>Your Text Preview</h1>
        <p>{text === '' ? "Enter something in the above Textbox to Preview Here" : text}</p>

      </div>
    </>
  )
}
