/* eslint-disable */
import React, { useState, useEffect, useLayoutEffect, useCallback, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import './index.css'

const useStyles = makeStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    // color: '#ff0'
    height: '800px',
    // width: '600px',
  },
  label: {
    textTransform: 'capitalize',
  },
  parentContainer: {
    width: '500px',
    height: '500px',
    border: '1px solid red',
    padding: '0 20px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column'
  },
  child: {
    boxSizing: 'border-box',
    width: '100%',
    height: '600px',
    background: 'pink'
  },
  item: {
    marginTop: '10px',
    background: 'gray',
  },
  itemHeader: {
    background: 'lightBlue',
    height: '50px',
  },
  itemBody: {
    background: 'lightGreen',
    height: '50px',
  },
  itemLargeBody: {
    background: 'yellow',
    height: '200px',
  }
  // selected: {
  //   border: '1px solid #000',
  //   flex: 1,
  //   overflow: 'auto'
  // }
})

const useScrollHeightDetector = (domRef) => {
  const [scrollHeight, setScrollHeight] = useState(0)

  useLayoutEffect(() => {
    console.log('domRef', domRef, domRef.current)
    const dom = domRef.current
    if (dom) {
      setScrollHeight(dom.scrollHeight)
    }
  }, [])

  return scrollHeight
}

const Item = ({ large, select, onFold }) => {
  const [visible, setVisible] = useState(select)
  const [flex, setFlex] = useState(false)
  const [show, setShow] = useState(false)
  const classes = useStyles();

  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 200);
  }, [])

  useLayoutEffect(() => {
    if (visible) {
      // setTimeout(() => {
      // }, 0);
      onFold && onFold()
    }
  }, [visible])

  if (!show) {
    return null
  }
  return (
    <div className={`${classes.item} ${visible ? 'selected' : ''} `}>
      <div className={classes.itemHeader} onClick={() => setVisible(v => !v)}>{flex && 'flex'}</div>
      {visible && <div className={large ? classes.itemLargeBody : classes.itemBody}></div>}
    </div>
  )
}

function Example() {
  const classes = useStyles();
  const domRef = useRef()
  const [flex, setFlex] = useState(false)



  const onFold = (e) => {
    console.log('onFold', e)
    const parentNode = document.querySelector('#parent')
    if (!parentNode) {
      return
    }
    const { scrollHeight } = parentNode
    console.log('scrollHeight', scrollHeight)
    if (scrollHeight > 500) {
      console.log('超出了')
      setFlex(true)
    } else {
      console.log('无')
      setFlex(false)
    }
  }

  useLayoutEffect(() => {
    setTimeout(() => {
      onFold()
    }, 1000);
  }, [])

  return (
    <div className={classes.root + ' demo-scroll'}>
      <h3>ScrollHeight detector</h3>
      <div className={`${classes.parentContainer} ${flex ? 'flexed' : ''}`} id='parent' ref={domRef}>
        <Item onFold={onFold}></Item>
        <Item onFold={onFold}></Item>
        <Item onFold={onFold} large select ></Item>
        <Item onFold={onFold}></Item>
        <Item onFold={onFold} large ></Item>
        <Item onFold={onFold}></Item>
      </div>
    </div>
  );
}

export default Example