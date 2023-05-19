import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post.jsx'
import Modal from './components/Modal.jsx'

function App() {
  const [entries, setEntries] = useState([]);
  const [openModal, setOpenModal] = useState(false)

  const openHandler = () => {
      setOpenModal(!openModal)
      event.preventDefault();
  }

  const delHandler = (key) => {
    let copy = [...entries]
    let filteredEntries = copy.filter(el => el.key !== key)
    setEntries(filteredEntries)
  }

  function callback(childData) {
    let copy = [...entries];
    copy.push(childData);
    setEntries(copy);
    console.log(entries);
  }

  const entryList = entries.map((el, index) => {
    return <Post key={index} entryData={el} deleteHandler={delHandler}/>
  })

  return (
    <>
      <div className="nav">
        <a className="active" href="#home">Home</a>
        <a href="#data">Data</a>
        <a href="#about">About</a>
      </div>
      <div>
        <h1>MOOD TRACKER</h1>
      <div class= "entryButton">
        <button onClick={openHandler}>+</button>
        </div>    
        {openModal && <Modal closeModal={setOpenModal} handleCallback={callback}/>}
        <br />
        {entryList}
      </div>
    </>
  )
}

export default App
