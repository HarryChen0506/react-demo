import React from 'react'
/* eslint-disable */
const BasicDemo = () => {
  const [visiable, setVisiable] = React.useState(true)
  return (
    <>
      <h3>Basic demo</h3>
      <button onClick={() => setVisiable(!visiable)}>{visiable ? '隐藏' : '显示'}</button>
      {visiable && <Demo />}
    </>
  )
}
const Demo = () => {
  const [count, setCount] = React.useState(0)
  const handleDelay = React.useCallback((e) => {
    // console.log('onClick', e)
    setTimeout(() => {
      setCount(count + 1)
      console.log('delay', count)
    }, 3000)
  }, [count])
  // const handleDelay = () => {
  //   setTimeout(() => {
  //     setCount(count + 1)
  //     console.log('delay', count)
  //   }, 3000)
  // }
  const countRef = React.useRef(0)
  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>add 1</button>
      <button onClick={() => setCount(pre => pre + 1)}>add 1</button>
      <button onClick={handleDelay}>delay</button>
    </>
  )
}
export default BasicDemo