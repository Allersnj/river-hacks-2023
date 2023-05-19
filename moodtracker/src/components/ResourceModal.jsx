import react from 'react'
import './Modal.css'

function ResourceModal(props) {
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className="title">
          <h1>Resources</h1>
        </div>
        <div className="body">
          <p>It seems you've been feeling down lately. Here are some online resources that may be able to help.</p>
        </div>
        <div className="body">
            <ul id='resources'>
              <li>
                <a href='https://mhanational.org/im-looking-mental-health-help-myself'>Mental Health America</a>
              </li>
              <li>
                <a href='https://www.thenationalcouncil.org/get-involved/members/'>Mental Health Community Centers</a>
              </li>
              <li>
                <a href='https://www.nimh.nih.gov/health'>National Institute of Mental Health</a>
              </li>
            </ul>
          </div>
        <div className="footer">
          <button onClick={() => props.closeModal(false)}>Close</button>
        </div>
      </div>
    </div>
  )
}

export default ResourceModal