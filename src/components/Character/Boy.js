const sizeMap = {
  sm: "h-16 w-16",
  md: "h-20 w-20",
}
/*
starting point: 487px
diff b/w each benchmark: bm1=487px bm2=595px = diff (108px)
ending point: ${108 * number of benchmarks}px
*/
function Boy({ size, coords }) {
  return (
    <img
      className={`${sizeMap[size]} ${coords} absolute transition-all duration-500`}
      src="/assets/images/boy.png"
      alt="Boy"
      title="Boy"
    />
  )
}

export default Boy
