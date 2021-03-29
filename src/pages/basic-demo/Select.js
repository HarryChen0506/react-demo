/* eslint-disable */
import React, { useState, useCallback, useRef } from 'react'
import Select from '@material-ui/core/Select'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
  root: {
    // color: '#f00',
  },
  label: {
  },
  select: {
    // backgroundColor: 'rgba(0, 0, 0, 0.10)'
    '&:focus': {
      backgroundColor: '#ff0'
    }
  },
})
const MySelect = (props) => {
  const classes = useStyles();
  return <Select
    classes={{
      root: classes.root,
      select: classes.select,
      'select:focus': classes['select:focus']
    }}
    {...props}
  ></Select >
}

export default MySelect