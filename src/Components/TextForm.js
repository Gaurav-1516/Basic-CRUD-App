import React, { useState } from 'react';


export default function TextForm(props) {
    const [text, setText] = useState('');
    //text = "fsfer"; // Wrong way to change the state;
    // setText("Hello");  // Correct way to change the state


    const handleUppercaseClick = () => {
        // We can access the text variable here
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","success");
    }
    const handleLowercaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","success");
    }
    const handleClearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Cleared!","success");
    }
    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard","success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    }

    const characterCount = (t) => {
        var count = 0;
        for(let i =0 ; i < t.length;i++){
            if(t[i] !== ' ' || '\n'){
                count++;
            }
        }
        return count;
    }
    return (
        <>
        <div className = "container">
            <h2 className="mb-1" style = {{color: props.mode === 'dark' ? 'white' : 'black'}}>{props.heading}</h2>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}  id="myBox" rows="8"></textarea>
            </div>
            <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUppercaseClick}>Convert to Uppercase</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowercaseClick}>Convert to Lowercase</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearText}>Clear Text</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled ={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className = "container my-2" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
            <h2 >Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words, {characterCount(text)} characters</p> 
            {/* fixing the counting of the word problem */}
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Nothing to preview"}</p>
        </div>
        </>
    )
}

// We are not able to see the cursor due to the background color of the text area we can improve it by changing the text area background
