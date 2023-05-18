import { useState } from 'react'

function moodRadioButton(mood) {
  return (
    <label htmlFor="">
      {mood} 
      <input type="radio" />
    </label>
  );
}

function Entry(props) {

  let submitHandler = (event) => {
    console.log(event)
    console.log(event.target.form[0].value)
    console.log(event.target.form[1].checked)
    console.log(event.target.form[2].checked)
    console.log(event.target.form[3].checked)
    event.preventDefault()
  }

  return (
    <>
      <div>
        <form action="">
            <label>
                Journal Entry 
            <input type="text" name='journalEntry'/>
            </label>
            <br /> <br />
            {moodRadioButton("Happy")}
            <br />
            {moodRadioButton("Sad")}
            <br />
            {moodRadioButton("Excited")}
            <br />
            <button type='submit' onClick={submitHandler}>CLICK ON ME</button>
        </form>

      </div>
    </>
  )
}

export default Entry