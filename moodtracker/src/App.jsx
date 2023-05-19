import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Post from './components/Post.jsx'
import Modal from './components/Modal.jsx'
import ResourceModal from './components/ResourceModal.jsx'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import drilldown from 'highcharts/modules/drilldown'

drilldown(Highcharts)

function App() {
  const [entries, setEntries] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const [openResourceModal, setOpenResourceModal] = useState(false);
  const [dayOfEntry, setDayOfEntry] = useState({
    monday: 2,
    tuesday: 4,
    wednesday: 2,
    thursday: 6,
    friday: 0,
    saturday: 1,
    sunday: 6
  })
  const [chartData, setChartData] = useState({
    monday: [['Happy', 2], ['Sad', 1], ['Angry', 0], ['Sensitive', 0], ['Confident', 1], ['Excited', 0], ['Anxious', 0], ['Insecure', 0], ['Grateful', 0], ['Indifferent', 0]],
    tuesday: [['Happy', 1], ['Sad', 0], ['Angry', 3], ['Sensitive', 0], ['Confident', 1], ['Excited', 0], ['Anxious', 0], ['Insecure', 0], ['Grateful', 0], ['Indifferent', 0]],
    wednesday: [['Happy', 2], ['Sad', 0], ['Angry', 0], ['Sensitive', 0], ['Confident', 1], ['Excited', 0], ['Anxious', 0], ['Insecure', 0], ['Grateful', 0], ['Indifferent', 0]],
    thursday: [['Happy', 5], ['Sad', 1], ['Angry', 0], ['Sensitive', 0], ['Confident', 0], ['Excited', 0], ['Anxious', 0], ['Insecure', 0], ['Grateful', 0], ['Indifferent', 0]],
    friday: [['Happy', 0], ['Sad', 0], ['Angry', 0], ['Sensitive', 0], ['Confident', 0], ['Excited', 0], ['Anxious', 0], ['Insecure', 0], ['Grateful', 0], ['Indifferent', 0]],
    saturday: [['Happy', 1], ['Sad', 0], ['Angry', 0], ['Sensitive', 0], ['Confident', 0], ['Excited', 1], ['Anxious', 0], ['Insecure', 0], ['Grateful', 0], ['Indifferent', 0]],
    sunday: [['Happy', 3], ['Sad', 3], ['Angry', 0], ['Sensitive', 0], ['Confident', 0], ['Excited', 3], ['Anxious', 0], ['Insecure', 0], ['Grateful', 0], ['Indifferent', 0]]
  })

  const openHandler = () => {
      setOpenModal(!openModal)
      event.preventDefault();
  }

  const openResourceHandler = () => {
    setOpenResourceModal(!openResourceModal);
  }

  const delHandler = (key) => {
    let copy = [...entries]
    let filteredEntries = copy.filter(el => el.key !== key)
    setEntries(filteredEntries)
  }

  const moodToIndex = {
    Happy: 0,
    Sad: 1,
    Angry: 2,
    Sensitive: 3,
    Confident: 4,
    Excited: 5,
    Anxious: 6,
    Insecure: 7,
    Grateful: 8,
    Indifferent: 9
  }

  function callback(childData) {
    let copy = [...entries];
    copy.push(childData);
    setEntries(copy);
    checkRecentEntries();

    let day = childData.day.toLowerCase()
    let newChart = {...chartData}
    let arr = newChart[day]
    for (let i = 0; i < childData.moods.length; i++) {
      let index = moodToIndex[childData.moods[i]]
      console.log(newChart[day])
      newChart[day][index][1] += 1

    }
    newChart[childData.day] = arr
    setChartData(newChart)
    let newDayOfEntry = {...dayOfEntry}
    newDayOfEntry[day] += 1
    setDayOfEntry(newDayOfEntry)
  }

  function checkRecentEntries() {
    const negatives = ['Sad', 'Angry', 'Anxious', 'Insecure'];
    let negativeCount = 0;
    if (entries.length > 5) {
      for (let i = entries.length - 1; i >= 0 && i > entries.length - 6; --i) {
        for (let negative of negatives) {
          if (entries[i].moods.includes(negative)) {
            ++negativeCount;
            console.log("negative");
            break;
          }
        }
      }

      if (negativeCount === 5) {
        setOpenResourceModal(true);
      }
    }
  }
  const entryList = entries.map((el, index) => {
    return <Post key={index} entryData={el} deleteHandler={delHandler}/>
  })

  const options = {
    chart: {
      type: 'column'
    },

    title: {
      text: 'Weekly Mood Summary'
    },

    xAxis: {
      type: 'category'
    },
     
    series: [
      {
        name: 'Entries',
        colorByPoint: true,
        data: [
          {
            name: "Monday",
            y: dayOfEntry.monday,
            drilldown: 'monday'
          },
          {
            name: "Tuesday",
            y: dayOfEntry.tuesday,
            drilldown: 'tuesday'
          },
          {
            name: "Wednesday",
            y: dayOfEntry.wednesday,
            drilldown: 'wednesday'
          },
          {
            name: "Thursday",
            y: dayOfEntry.thursday,
            drilldown: 'thursday'
          },
          {
            name: "Friday",
            y: dayOfEntry.friday,
            drilldown: 'friday'
          },
          {
            name: "Saturday",
            y: dayOfEntry.saturday,
            drilldown: 'saturday'
          },
          {
            name: "Sunday",
            y: dayOfEntry.sunday,
            drilldown: 'sunday'
          }
        ]
      }
    ],
    drilldown: {
      series: [
        {
          id: 'monday',
          data: chartData.monday
        },
        {
          id: 'tuesday',
          data: chartData.tuesday
        },
        {
          id: 'wednesday',
          data: chartData.wednesday
        },
        {
          id: 'thursday',
          data: chartData.thursday
        },
        {
          id: 'friday',
          data: chartData.friday
        },
        {
          id: 'saturday',
          data: chartData.saturday
        },
        {
          id: 'sunday',
          data: chartData.sunday
        },
      ]
    }
  }

  return (
    <>
      <div className="nav">
        <a className="active" href="#home">Home</a>
        <a href="#analysis">Analysis</a>
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
        <br />
        <HighchartsReact highcharts={Highcharts} options={options}/>
      </div>
    </>
  )
}

export default App
