import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Entry from './components/Entry.jsx'
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
    let temp = entries.map(x => x);
    temp.push(childData);
    setEntries(temp);
    console.log(entries);
  }

  const entryList = entries.map(el => {
    return <Post entryData={el} deleteHandler={delHandler}/>
  })

  return (
    <>
      <div>
        <h1>MOOD TRACKER</h1>
        <button onClick={openHandler}>Add Entry</button>
        {openModal && <Modal closeModal={setOpenModal} handleCallback={callback}/>}
        <br />
        {entryList}
      </div>
    </>
  )
}

export default App
