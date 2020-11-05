import React from 'react'
// /* eslint-disable */
import useBoolean from '../../hooks/useBoolean'

const MyHooks = () => {
  const [flag, {setTrue, setFalse}] = useBoolean(false)
  console.log('render')
  return (
    <>
      <h3>my hooks</h3>
      <div>
        <h4>useBoolean</h4>
        <p>value: {JSON.stringify(flag)}</p>
        <button onClick={setTrue}>set True</button>
        <button onClick={setFalse}>set False</button>
      </div>
    </>
  )
}

export default MyHooks