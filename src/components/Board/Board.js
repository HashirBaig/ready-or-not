import { useEffect, useState } from "react"
import { Boy } from "../Character"

const coordsMap = {
  "bm-0": `left-[487px] top-[108px]`,
  "bm-1": `left-[595px] top-[108px]`,
  "bm-2": `left-[703px] top-[108px]`,
  "bm-3": `left-[811px] top-[108px]`,
}

function Board() {
  const [count, setCount] = useState(0)
  const [coords, setCoords] = useState(coordsMap[`bm-${count}`])

  useEffect(() => {
    if (count < 4) {
      setCoords(coordsMap[`bm-${count}`])
    }

    // eslint-disable-next-line
  }, [count])

  const renderBenchMarks = (n = 1) => {
    let benchmarks = []

    const bmFirst = <div key="bm-0" className="benchmark"></div>
    benchmarks.push(bmFirst)

    let cntr = 0
    for (let i = 0; i < n; i++) {
      // Plot smaller dots
      for (let i = 0; i < 3; i++) {
        const sbp = <div className="subplot" key={`sbp-${cntr}`}></div>
        benchmarks.push(sbp)
        cntr++
      }

      const bm = <div key={`bm-${i + 1}`} className="benchmark"></div>
      benchmarks.push(bm)
    }
    return benchmarks
  }

  const handleOnClick = () => {
    setCount(count + 1)
  }
  const handleReset = () => {
    setCount(0)
  }

  return (
    <div className="board">
      <div className="flex items-center justify-center space-x-3 py-12 border-b border-gray-800">
        <Boy size="sm" coords={coords} />
        {renderBenchMarks(3)}
      </div>
      <div className="flex items-center justify-center space-x-2 mt-4">
        <button className="btn" onClick={handleOnClick}>
          click
        </button>
        <button className="btn" onClick={handleReset}>
          reset
        </button>
      </div>
    </div>
  )
}

export default Board
