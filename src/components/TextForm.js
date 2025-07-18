import React, {useState} from 'react'

export default function TextForm({mode}) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
    }

    const handleCopy = () => {
        let newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const [text, setText] = useState("");

    return (
    <>
        <div className="mb-3" style={{color: mode==='dark'?'white':'black'}}>
            <h2>Enter the text to be analyzed here... </h2>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: mode==='dark'?'#2c3238':'white', color: mode==='dark'?'white':'black'}} id="myBox" rows="9"></textarea>
            <button className='btn btn-primary my-3 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button className='btn btn-primary my-3 mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
            <button className='btn btn-primary my-3 mx-2' onClick={handleClear}>Clear Text</button>
            <button className='btn btn-primary my-3 mx-2' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary my-3 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className = "container" style={{color: mode==='dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(" ").length } words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
        </div>
        <div className = "container" style={{color: mode==='dark'?'white':'black'}}>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter Somthing to preview it here"}</p>
        </div>

    </>
    )
}
