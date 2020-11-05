import React from 'react'

/* eslint-disable */

const Child = React.forwardRef((props, ref) => {
  const {count, onChange} = props
  const say = () => {
    console.log('say', props, count)
    typeof onChange === 'function' && onChange(count + 10)
  }
  React.useImperativeHandle(ref, () => {
    return {
      say
    }
  })
  return (
    <div>我是一个子元素, {count}</div>
  )
})

const Demo = () => {
  const [count, setCount] = React.useState(0)
  const childRef = React.useRef()
  return (
    <>
      <p>count: {count}</p>
      <button onClick={() => setCount(pre => pre + 1)}>add 1</button>
      <button onClick={() => childRef.current.say()}>调子元素方法</button>
      <Child count={count} ref={childRef} onChange={val => setCount(val)}></Child>
    </>
  )
}
export default Demo