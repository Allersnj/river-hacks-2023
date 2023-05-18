import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Entry from './components/Entry.jsx'
import Post from './components/Post.jsx'

function App() {
  const [entries, setEntries] = useState([]);


  function callback(childData) {
    let temp = entries.map((x) => x);
    temp.push(childData);
    setEntries(temp);
    console.log(entries);
  }

  return (
    <>
      <div>
        <h1>MOOD TRACKER</h1>
        <br />
        <Entry handleCallback={callback}/>
      </div>
    </>
  )
}

export default App
