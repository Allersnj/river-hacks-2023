import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Entry from './components/Entry.jsx'
import Post from './components/Post.jsx'

function App() {
  const [entries, setEntries] = useState([]);


  function callback(childData) {
    let temp = entries.map(x => x);
    temp.push(childData);
    setEntries(temp);
    console.log(entries);
  }

  const entryList = entries.map(el => {
    return <Post entryData={el}/>
  })

  return (
    <>
      <div class="nav">
        <a class="active" href="#home">Home</a>
        <a href="#data">Data</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <h1>MOOD TRACKER</h1>
        <br />
        <Entry handleCallback={callback}/>
        <br />
        {entryList}
      </div>
    </>
  )
}

export default App
