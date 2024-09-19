import React from 'react'

export default function Textarea(props) {
  return (
    <>
        <h1>{props.Heading}</h1>
        <div className="form-floating">
        <textarea className="form-control">
        </textarea>
        <label htmlFor="floatingTextarea" >Comments</label>
    </div>
    <div className="my-5">
    <button type="button" class="btn btn-primary">Convert To UpperCase</button> 
    <button type="button" class="btn btn-primary">Convert To LowerCase</button>
    </div>  
    </>
  )
}
