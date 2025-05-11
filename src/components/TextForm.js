import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        
        let newText = text.toUpperCase();
        setText(newText)
        // console.log(text +"   =  "+newText);
    }
    const handleLoClick = ()=>{
        
        let newText = text.toLowerCase();
        setText(newText)
        // console.log(text +"   =  "+newText);
    }
    const handleClearClick = ()=>{
        
        let newText = '';
        setText(newText)
        // console.log(text +"   =  "+newText);
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text, setText] = useState("Enter text here");
    // text = "new text"; //Wrong way to change the state
    // setText("new text"); //correct way to change the state
    return (
        <>
        <div className='container'style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 >{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} charecters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>

        </>
        
    )
}


