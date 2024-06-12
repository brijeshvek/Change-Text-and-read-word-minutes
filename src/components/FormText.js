import React ,{useState}from "react";

export default function FormText(props) {
    const UpToChange=()=>{
        console.log("Cliked Button");
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const LoTochange=()=>{
        console.log("Cliked Button...")
        let newTexT=text.toLowerCase();
        setText(newTexT)
    }
    const TextChange=(Event)=>{
        console.log("Changes Text...")
        setText(Event.target.value); 
    }
    const[text,setText]=useState('Enter the Text..');
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
        <h1 className="my-4">{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          value={text}
          rows="10"
          onChange={TextChange}
        ></textarea>
        <button className="btn btn-primary my-2" onClick={UpToChange}>Convert UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={LoTochange}>Convert LoverCase</button>
      </div>
      <div className="conatiner my-3">
        <p>{text.split(" ").length} words, {text.length} charecters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
