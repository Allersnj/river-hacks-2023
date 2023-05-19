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
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let date = new Date();
    entry.key = date;
    entry.date = `${days[date.getDay() - 1]} - ${months[date.getMonth()]} ${date.getDate()}`
    props.handleCallback(entry);
    props.closeModal(false);
  }

  return (
    <>
      <div>
        <form action="">
            <label>
                
            <input type="text" name='journalEntry'/>
            </label>
            <br /> <br />
            
          {moods.map((mood, index) => {return (
              <MoodCheckbox key={index} mood={mood}/>
          )})}
            
          <br />
          <button type='submit' onClick={submitHandler}>Submit</button>
        </form>
      </div>
    </>
  )
}

export default Entry