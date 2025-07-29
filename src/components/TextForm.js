import React, {useState} from 'react'

export default function TextForm({mode, showAlert}) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        showAlert("Converted to UpperCase","success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        showAlert("Converted to LowerCase","success");
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
        showAlert("Text Cleared","success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        showAlert("Coppied to ClipBoard","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        showAlert("Removed Extra Spaces","success");
    }

    const [text, setText] = useState("");

    return (
    <>
        <div className="mb-3" style={{color: mode==='dark'?'white':'black'}}>
            <h2>Enter the text to be analyzed here... </h2>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: mode==='dark'?'#2c3238':'white', color: mode==='dark'?'white':'black'}} id="myBox" rows="9"></textarea>
            <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleClear}>Clear Text</button>
            <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className='btn btn-primary my-2 mx-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className = "container" style={{color: mode==='dark'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{text.split(/\s/).filter((element) => {return element.length!==0}).length } words and {text.length} characters</p>
            <p>{0.008 * text.split(/\s/).filter((element) => {return element.length!==0}).length} Minutes read</p>
        </div>
        <div className = "container" style={{color: mode==='dark'?'white':'black'}}>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>

    </>
    )
}
