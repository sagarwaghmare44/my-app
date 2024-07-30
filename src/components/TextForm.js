import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Changed to uppercase", "success");
  };

  const handleDownClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Changed to lowercase", "success");
  };

  const handleCopy = () => {
    console.log("Copy to clipboard");
    let text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const clearClick = () => {
    console.log("Clear text was clicked" + text);
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };

  const handleExtraSpaces = () => {
    console.log("Remove the extra spaces");
    let newText = text.split(/[ ]+/).join(" ");
    setText(newText);
    props.showAlert("Removed extra spaces", "success");
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className='container' style={{ color: props.mode === 'light' ? '#282856' : 'white' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? 'grey' : 'white' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-1' onClick={handleDownClick}>Convert to lowercase</button>
        <button className='btn btn-primary mx-1' onClick={clearClick}>Clear text</button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy to clipboard</button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove extra spaces</button>
      </div>
      <div className='container my-3' style={{ color: props.mode === 'light' ? '#282856' : 'white' }}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  );
}
