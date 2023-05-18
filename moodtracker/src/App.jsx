import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Entry from './components/Entry.jsx'
import Post from './components/Post.jsx'

function App(props) {
  const [entries, setEntries] = useState([1, 2, 3])

  const entryList = entries.map((entry) => {
    return <Post />
  })

  return (
    <>
      <div>
        <h1>MOOD TRACKER</h1>
        <Entry />
        <br />
        {entryList}
      </div>
    </>
  )
}

export default App
