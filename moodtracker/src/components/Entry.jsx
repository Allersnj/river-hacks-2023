import { useState } from 'react'

function Entry() {

  let submitHandler = (event) => {
    console.log(event)
    console.log(event.target.form[0].value)
    console.log(event.target.form[1].checked)
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
            <label htmlFor="">
                Happy 
                <input type="radio" name='happy'/>
            </label>
            <br />
            <label htmlFor="">
                Sad
                <input type="radio" />
            </label>
            <br />
            <label htmlFor="">
                Excited
                <input type="radio" />
            </label>
            <button type='submit' onClick={submitHandler}></button>
        </form>

      </div>
    </>
  )
}

export default Entry