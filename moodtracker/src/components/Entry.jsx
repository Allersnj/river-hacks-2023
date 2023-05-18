import { useState } from 'react'

function moodRadioButton(mood) {
  return (
    <label htmlFor="">
      {mood} 
      <input type="radio" />
    </label>
  );
}

function Entry() {

  return (
    <>
      <div>
        <form action="">
            <label htmlFor="">
                Journal Entry 
            <input type="text" />
            </label>
            <br /> <br />
            {moodRadioButton("Happy")}
            <br />
            {moodRadioButton("Sad")}
            <br />
            {moodRadioButton("Excited")}
            <br />
            <button type="submit">Test</button>
        </form>

      </div>
    </>
  )
}

export default Entry