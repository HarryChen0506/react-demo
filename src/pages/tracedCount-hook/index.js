import React, { useRef, useState, useCallback } from 'react'

// const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

// export function useEventCallback(fn, dependencies) {
//   const ref = React.useRef(() => {
//     throw new Error('Cannot call an event handler while rendering.')
//   })
//   useEnhancedEffect(() => {
//     ref.current = fn
//   }, dependencies ? [fn, ...dependencies] : [fn])
//   return React.useCallback((...args) => (0, ref.current)(...args), [])
// }

const Button = React.memo(({ onClick }) => {
  console.log('render Button', onClick)
  return (
    <button onClick={onClick}>查询</button>
  )
})

const useTracedCounter = () => {
  const countRef = useRef(0)
  const updateCount = useCallback(() => {
    countRef.current += 1
  }, [])
  return [countRef, updateCount]
}

const CustomHook = function () {
  const [filter, setFilter] = useState('')

  const [ref, updateCount] = useTracedCounter()

  const fetchData = useCallback(() => {
    console.log('查询')
    updateCount()
    const id = ref.current
    setTimeout(() => {
      console.log('id === countRef.current', ref.current, id === ref.current)
    }, 300)
  }, [ref, updateCount])

  const handleClick = React.useCallback(() => {
    fetchData()
  }, [fetchData])

  return (
    <>
      <h3>useTracedCounter hook</h3>
      <input value={filter} onChange={(e) => setFilter(e.target.value)}></input>
      <ul>
        {filter}
      </ul>
      <div>
        <Button onClick={handleClick}>查询</Button>
      </div>
    </>
  )
}

export default CustomHook