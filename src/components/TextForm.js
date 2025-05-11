import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const [text, setText] = useState("Enter text here");

    const handleUpClick = () => setText(text.toUpperCase());
    const handleLoClick = () => setText(text.toLowerCase());
    const handleClearClick = () => setText('');
    const handleOnChange = (event) => setText(event.target.value);
    const handleCopy = () => {
        let textarea = document.getElementById("myBox");
        textarea.select();
        navigator.clipboard.writeText(textarea.value);
    };
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/).join(" ");
        setText(newText);
    };

    return (
        <>
            <div className="container py-4" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2 className="mb-4">{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        className="form-control shadow-sm"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#2c2f33' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#042743',
                            border: '1px solid #ced4da'
                        }}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <div className="btn-group d-flex flex-wrap gap-2 mb-4" role="group">
                    <button className="btn btn-outline-primary" onClick={handleUpClick}>UPPERCASE</button>
                    <button className="btn btn-outline-primary" onClick={handleLoClick}>lowercase</button>
                    <button className="btn btn-outline-danger" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-outline-success" onClick={handleCopy}>Copy</button>
                    <button className="btn btn-outline-warning" onClick={handleExtraSpaces}>Remove Spaces</button>
                </div>
            </div>

            <div className="container mb-5" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>Your Text Summary</h3>
                <p className="text-muted">
                    {text.split(/\s+/).filter((e) => e.length !== 0).length} words, {text.length} characters
                </p>
                <p className="text-muted">{(0.008 * text.split(/\s+/).filter((e) => e.length !== 0).length).toFixed(2)} minutes read</p>
                <h4 className="mt-4">Preview</h4>
                <div className="p-3 border rounded bg-light text-dark">
                    {text.length > 0 ? text : "Enter something in the textbox above to preview it here"}
                </div>
            </div>
        </>
    );
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired
};
