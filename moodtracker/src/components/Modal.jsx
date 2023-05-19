import react from 'react'
import './Modal.css'
import Entry from './Entry.jsx'

function Modal(props) {
    let moods = ["Happy", "Sad", "Angry", "Sensitive", "Confident", "Excited", "Anxious", "Insecure", "Grateful", "Indifferent"];

    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className="title">
                    <h1>How did you feel today...</h1>
                </div>
                <div className="body">
                  <Entry handleCallback={props.handleCallback} closeModal={props.closeModal}/>

                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>Close</button>
                </div>

            </div>
        </div>

    )
}

export default Modal