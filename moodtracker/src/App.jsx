import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Entry from './components/Entry.jsx'

function App() {
  const [entries, setEntries] = useState([]);


  function callback(childData) {
    let temp = entries.map((x) => {x});
    temp.push(childData);
    setEntries(temp);
  }

  return (
    <>
      <div>
        <h1>MOOD TRACKER</h1>
        <Entry handleCallback={callback}/>
      </div>
    </>
  )
}

export default App
