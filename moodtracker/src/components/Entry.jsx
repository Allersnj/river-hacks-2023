import { useState } from 'react'

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
            <label htmlFor="">
                Happy 
                <input type="radio" />
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
        </form>

      </div>
    </>
  )
}

export default Entry