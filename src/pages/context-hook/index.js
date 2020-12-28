/* eslint-disable */
import React, { useState, useContext, createContext } from 'react'

const context = createContext({})

const Counter = () => {
  const value = useContext(context)
  console.log('value', value)
  return (
    <div>
      <span>count: {value.count}</span>
      <button onClick={() => value.onChange()}>加1</button>
    </div>
  )
}

const CustomHook = function () {
  const [count, setCount] = useState(10)
  return (
    <>
      <h3>context hook</h3>
      <context.Provider value={{ count: count, onChange: () => setCount(v => v + 1) }}>
        <Counter />
      </context.Provider>
    </>
  )
}

export default CustomHook