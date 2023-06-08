import { useState, useEffect, useRef } from 'react'
import './App.css'

import Navbar from "./components/Navbar/Navbar"
import LineGraph from './components/LineGraph/LineGraph'

import bubbleSort from "./utils/bubbleSort"
import selectionSort from "./utils/selectionSort"

function App() {
  const [randomArray, setRandomArray] = useState([])
  const [speed, setSpeed] = useState(100)
  const LINE_GRAPH = useRef()

  const handleSetSpeed = (value) => {
    setSpeed(value);
  }

  const generateRandomArray = () => {
    const LENGTH = 25;
    const MAX_NUMBER = 100;

    let random = Array.from({ length: LENGTH }, () => Math.floor(Math.random() * MAX_NUMBER));
    setRandomArray(random)
  }

  const startAlgorithm = (algorithm) => {
    const updateLine = LINE_GRAPH.current.updateLine;

    switch (algorithm) {
      case "bubble-sort":
        bubbleSort(randomArray, updateLine, speed)
        break;
      case "selection-sort":
        selectionSort(randomArray, updateLine, speed)
        break;
      default:
        bubbleSort(randomArray, updateLine, speed)
    }
  }

  useEffect(() => {
    generateRandomArray()
  }, [])


  return (
    <>
      <Navbar
        startAlgorithm={startAlgorithm}
        generateRandomArray={generateRandomArray}
        handleSetSpeed={handleSetSpeed}
      />
      <LineGraph ref={LINE_GRAPH} speed={speed} data={randomArray} />
    </>
  )
}

export default App
