import React from 'react'
// import '../App.css'
import '../Css/TextfieldCss.css'

export  function TextFieldProblem() {
    function handleOnChange(e){
        if((e.target.value).length==100){
          alert("YOU COMPLETED YOUR 100 CHARACTER LIMIT")
        }}
  return (
    <div className='TextArea'>
      <textarea onChange={handleOnChange} maxLength='100'~ cols="30" rows="10"> </textarea>
    </div>
  )
}
