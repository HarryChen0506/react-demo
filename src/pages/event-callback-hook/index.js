import React, { useState } from 'react'

const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect
export function useEventCallback(fn, dependencies) {
  const ref = React.useRef(() => {
    throw new Error('Cannot call an event handler while rendering.')
  })
  useEnhancedEffect(() => {
    ref.current = fn
  }, dependencies ? [fn, ...dependencies] : [fn])
  return React.useCallback((...args) => (0, ref.current)(...args), [])
}

const Button = React.memo(({ onClick }) => {
  console.log('render Button', onClick)
  return (
    <button onClick={onClick}>点击</button>
  )
})

const CustomHook = function () {
  const [filter, setFilter] = useState('')

  const handleClick = React.useCallback(() => {
    console.log('value', filter)
  }, [filter])

  // eslint-disable-next-line no-unused-vars
  // const handleClick = useEventCallback(() => {
  //   console.log('value', filter)
  // }, [filter])

  return (
    <>
      <h3>useEventCallback hook</h3>
      <input value={filter} onChange={(e) => setFilter(e.target.value)}></input>
      <ul>
        {filter}
      </ul>
      <div>
        <Button onClick={handleClick}></Button>
        {/* <Button ></Button> */}
      </div>
    </>
  )
}

export default CustomHook