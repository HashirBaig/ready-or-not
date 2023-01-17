import { useEffect, useState } from "react"
import { Boy } from "../Character"
import { coordsMap, renderBenchMarks } from "../../utils/common"

function Board() {
  const [count, setCount] = useState(0)
  const [coords, setCoords] = useState(coordsMap[`bm-${count}`])

  useEffect(() => {
    if (count < 4) {
      setCoords(coordsMap[`bm-${count}`])
    }

    // eslint-disable-next-line
  }, [count])

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
