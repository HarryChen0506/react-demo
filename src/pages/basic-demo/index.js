import React, { useState, useCallback, useRef } from 'react'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: '#ff0'
  },
  label: {
    textTransform: 'capitalize',
  },
})
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

function Example() {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const ref = useRef()
  ref.current = count
  const handleAlertClick = useCallback(() => {
    setTimeout(() => {
      alert('You clicked on: ' + count + ':' + ref.current);
    }, 1500);
  }, [text])

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>text: {text} </p>
      <input onChange={e => setText(e.target.value)}></input>
      <br />
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={10}
        onChange={() => { }}
      >
        <MenuItem value={10} classes={{ root: classes.root }}> Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div >
  );
}

export default Example