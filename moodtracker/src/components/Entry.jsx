import { useState } from 'react'

function MoodCheckbox(props) {
  return (
    <div>
      <label htmlFor="">
        {props.mood}
      </label>
      <input type="checkbox" />
    </div>
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
            
            {moods.map((mood, index) => {return (
                <MoodCheckbox key={index} mood={mood}/>
            )})}
            
            <br />
            <button type='submit' onClick={submitHandler}>CLICK ON ME</button>
        </form>

      </div>
    </>
  )
}

export default Entry