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
<<<<<<< HEAD
    console.log(event)
    console.log(event.target.form[0].value)
    console.log(event.target.form[1].checked)
    console.log(event.target.form[2].checked)
    console.log(event.target.form[3].checked)
    event.preventDefault()
=======
    event.preventDefault();
    let entry = {};
    entry.journal = event.target.form[0].value;
    entry.happy = event.target.form[1].checked;
    props.handleCallback(entry);
>>>>>>> 3c4d78317505351452a31af85607f7090048519d
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
            {moodRadioButton("Angry")}
            <br />
            {moodRadioButton("Sensitive")}
            <br />
            {moodRadioButton("Confident")}
            <br />
            {moodRadioButton("Excited")}
            <br />
            {moodRadioButton("Anxious")}
            <br />
            {moodRadioButton("Insecure")}
            <br />
            {moodRadioButton("Grateful")}
            <br />
            {moodRadioButton("Indifferent")}
            <br />
            <button type='submit' onClick={submitHandler}>CLICK ON ME</button>
        </form>

      </div>
    </>
  )
}

export default Entry