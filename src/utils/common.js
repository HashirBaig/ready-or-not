export const coordsMap = {
  "bm-0": `left-[487px] top-[108px]`,
  "bm-1": `left-[595px] top-[108px]`,
  "bm-2": `left-[703px] top-[108px]`,
  "bm-3": `left-[811px] top-[108px]`,
}

export const renderBenchMarks = (n = 1) => {
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
