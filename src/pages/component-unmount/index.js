import React, { useState, useEffect } from 'react'
/* eslint-disable */
const Counter = () => {
  const [count, setCount] = useState(0)

  const handleAlertClick = () => {
    setTimeout(() => {
      alert(`Yout clicked me: ${count}`)
    }, 3000)
  }

  useEffect(() => {
    setTimeout(() => {
      console.log(`Yout clicked ${count} times`)
    }, 3000)
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={handleAlertClick}>Show alert</button>
    </div>
  )
}



function Example() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const doubleCount = React.useMemo(() => {
    return count * 2
  }, [count])

  useEffect(() => {
    console.log(`effect ----the count is ${count}`)
    return () => {
      console.log('return')
    }
  }, [count])

  // useEffect(() => {
  //   console.log(`effect ----the count is ${count}`)
  //   return () => {
  //     console.log('return')
  //   }
  // })

  // useEffect(() => {
  //   return () => {
  //     console.log('component will unmount')
  //   }
  // }, [])
  return (
    <>
      <p>the num is {count}</p>
      <p> double: {doubleCount}</p>
      <p> name: {name}</p>
      <button onClick={() => { setCount(count + 1) }}>click me </button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </>
  )
}
export default Example