import React from 'react'

const AsyncClosure = () => {
  const [count, setCount] = React.useState(0)
  const countRef = React.useRef(count)
  React.useEffect(() => {
    setTimeout(() => {
      // console.log('count', count)
      countRef.current = count + 1
      // setCount(count + 1)
      console.log('useEffect countRef.current', countRef.current)
    }, 1000)

    // setTimeout(() => {
    //   console.log(`Total seconds: ${countRef.current}`)
    // }, 2000)
  }, [count])
  console.log('render countRef.current', countRef.current)
  return (
    <>
      <h3>async closure</h3>
      <div>count: {count}</div>
      <div>countRef: {countRef.current}</div>
      <button onClick={() => {
        setCount(count + 1)
        // console.log('countRef', countRef.current)
      }}>+1</button>
    </>
  )
}

export default AsyncClosure