import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post.jsx'
import Modal from './components/Modal.jsx'
import ResourceModal from './components/ResourceModal.jsx'

function App() {
  const [entries, setEntries] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openResourceModal, setOpenResourceModal] = useState(false);

  const openHandler = () => {
      setOpenModal(!openModal)
  }

  const openResourceHandler = () => {
    setOpenResourceModal(!openResourceModal);
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
    checkRecentEntries();
    console.log(entries);
  }

  const entryList = entries.map((el, index) => {
    return <Post key={index} entryData={el} deleteHandler={delHandler}/>
  })

  function checkRecentEntries() {
    const negatives = ['Sad', 'Angry', 'Anxious', 'Insecure'];
    let negativeCount = 0;
    if (entries.length > 5) {
      for (let i = entries.length - 1; i >= 0 && i > entries.length - 6; --i) {
        for (let negative of negatives)
        {
          if (entries[i].moods.includes(negative)) {
            ++negativeCount;
            console.log("negative");
            break;
          }
        }
      }

      console.log(negativeCount);
      if (negativeCount == 5) {
        setOpenResourceModal(true);
      }
    }
  }

  return (
    <>
      <div className="nav">
        <a className="active" href="#home">Home</a>
        <a href="#data">Data</a>
        <a href="#about">About</a>
      </div>
      <div>
        <h1>MOOD TRACKER</h1>
      <div className= "entryButton">
        <button onClick={openHandler}>+</button>
        </div>    
        {openModal && <Modal closeModal={setOpenModal} handleCallback={callback}/>}
        {openResourceModal && <ResourceModal closeModal={setOpenResourceModal} />}
        <br />
        {entryList}
      </div>
    </>
  )
}

export default App
