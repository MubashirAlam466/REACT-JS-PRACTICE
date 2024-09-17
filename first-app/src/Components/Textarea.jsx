import React from 'react'

export default function Textarea(props) {
  return (
    <>
        <h1>{props.Heading}</h1>
        <div className="form-floating">
        <textarea className="form-control" rows="8">
        </textarea>
        <label htmlFor="floatingTextarea">Comments</label>
    </div>      
    </>
  )
}
