import React, { useState } from 'react'
export default function Textarea(props) {

  const HandelUpClick = ()=>{
    let UpCase = text.toUpperCase();
    settext(UpCase)
    // console.log("value on Click");
  }
  const HandelLowerClick = ()=>{
    let LowerCase = text.toLowerCase();
    settext(LowerCase)
    // console.log("value on Click");
  }
  const TrimClick = ()=>{
    let Trim = text.trim();
    settext(Trim)
    // console.log("value on Click");
  }
  const HandleOnChange = ()=>{
    settext(event.target.value)
    // console.log("value on Text");
  }
  const [text,settext]=useState();
  return (
    <>
        <h1>{props.Heading}</h1>
        <div className="form-floating">
        <textarea className="form-control"  value={text} onChange={HandleOnChange} >
        </textarea>
    </div>
    <div className="my-5">
    <button type="button" className="btn btn-primary mx-2"onClick={HandelUpClick}>Convert To UpperCase</button> 
    <button type="button" className="btn btn-primary mx-2"onClick={HandelLowerClick}>Convert To LowerCase</button>
    <button type="button" className="btn btn-primary mx-2"onClick={TrimClick}>Convert To Trim</button>
    </div>  
    <div className="container">
      <h1>Your Text Summary</h1>
       {/* <p>Words{text.split("").length} Character {text.length}</p> */}
       {/* <p>{text.length} Character{text.length !== 1 ? 's' : ''}</p> */}

       {/* Use IN Chat GPT */}

       <p>{text ? text.length : 0} Character{text && text.length !== 1 ? 's' : ''}</p>


      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
