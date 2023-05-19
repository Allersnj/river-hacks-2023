import { useState } from 'react'

function MoodRadioButton(props) {
  return (
    <label htmlFor="">
      {props.mood} 
      <input type="radio" />
    </label>
  );
}

function Entry(props) {
  let moods = ["Happy", "Sad", "Angry", "Sensitive", "Confident", "Excited", "Anxious", "Insecure", "Grateful", "Indifferent"];

  let submitHandler = (event) => {
    event.preventDefault();
    let entry = {};
    entry.journal = event.target.form[0].value;
    entry.moods = [];
    for (let i = 0; i < moods.length; ++i) {
      if (event.target.form[i+1].checked) {
        entry.moods.push(moods[i]);
      }
    }
    entry.key = new Date();
    props.handleCallback(entry);
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
            {moods.map((mood) => {return (
              <>
                <MoodRadioButton mood={mood}/>
                <br />
              </>
            )})}
            <br />
            <button type='submit' onClick={submitHandler}>CLICK ON ME</button>
        </form>

      </div>
    </>
  )
}

export default Entry