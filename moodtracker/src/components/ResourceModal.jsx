import react from 'react'
import './Modal.css'

function ResourceModal(props)
{
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className="title">
                    <h1>Resources</h1>
                </div>
                <div className="body">
                  <p>It seems you've been feeling a little down lately. Here are some online resources that may be able to help.</p>

                </div>
                <div className="footer">
                    <button onClick={() => props.closeModal(false)}>Close</button>
                </div>

            </div>
        </div>

    )
}

export default ResourceModal