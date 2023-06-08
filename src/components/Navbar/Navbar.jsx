import { useState, useEffect, useRef } from 'react'
import './Navbar.css'

function Navbar({ startAlgorithm, generateRandomArray, handleSetSpeed }) {
    const [algorithm, setAlgorithm] = useState('bubble-sort');

    const handleChange = (event) => {
        setAlgorithm(event.target.value);
    };

    const handleSpeedChange = (event) => {
        handleSetSpeed(Number(event.target.value))
    }

    useEffect(() => {
        console.log(algorithm)
    }, [algorithm])

    return (
        <>
            <select id="sorting-algorithms" onChange={(e) => handleChange(e)}>
                <option value="bubble-sort">Bubble Sort</option>
                <option value="selection-sort">Selection Sort</option>
                <option value="insertion-sort">Insertion Sort</option>
                <option value="merge-sort">Merge Sort</option>
                <option value="quick-sort">Quick Sort</option>
            </select>
            <select
                id="sorting-algorithms"
                onChange={(e) => handleSpeedChange(e)}
                defaultValue={"100"}
            >
                <option value="200">Slow</option>
                <option value="100">Normal</option>
                <option value="50">Fast</option>
            </select>
            <button onClick={() => generateRandomArray()}> Generate New Array </button>
            <button onClick={() => startAlgorithm(algorithm)}> Run Algorithm </button>
        </>
    )

}

export default Navbar
