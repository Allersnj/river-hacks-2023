import react from 'react'
import './Modal.css'

function Modal(props) {
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
        props.closeModal(false)
      }

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className="title">
                    <h1>How did you feel today...</h1>
                </div>
                <div className="body">
                    <form action="">
                        <label>
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
                        <button type='submit' onClick={submitHandler}>Add</button>
                    </form>

                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>Close</button>
                </div>

            </div>
        </div>

    )
}

function MoodRadioButton(props) {
    return (
      <label htmlFor="">
        {props.mood} 
        <input type="radio" />
      </label>
    );
  }
  
  function Entry(props) {
  
    
  
    return (
      <>
        <div>
          
  
        </div>
      </>
    )
  }

export default Modal