import React, { useRef, useImperativeHandle, useEffect } from 'react'
import './LineGraph.css'

const LineGraph = React.forwardRef((props, ref) => {
    const { data, speed } = props;
    const GRAPH = useRef()

    const updateLine = (lineId, value) => {
        const lineArray = GRAPH.current.querySelectorAll(".line");

        lineArray[lineId].style.setProperty('--value', value);
        lineArray[lineId].querySelector(".line-value").innerHTML = value;
        lineArray[lineId].classList.add("progress");
        setTimeout(() => {
            lineArray[lineId].classList.remove("progress");
        }, speed)
    }

    const initGraph = (data) => {
        GRAPH.current.style.setProperty('--transition-time', `${speed * 0.5}ms`);
        GRAPH.current.style.setProperty('--elements-length', data.length);

        const lineArray = GRAPH.current.querySelectorAll(".line");
        data.forEach((value, i) => {
            lineArray[i].style.setProperty('--value', value);
        })
    }

    useEffect(() => {
        initGraph(data)
    }, [data])

    //Pass methods to parent element
    useImperativeHandle(ref, () => ({
        updateLine(lineId, value) {
            updateLine(lineId, value)
        }
    }))

    return (
        <>
            <div className="line-graph" ref={GRAPH}>
                {
                    data.map((value, i) => {
                        return (
                            <div className="line" key={i} id={i} value={value}>
                                <div className="line-value">{value}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

})

export default LineGraph
