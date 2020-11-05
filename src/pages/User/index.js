import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadUserData } from '../../model/actions/user'

const User = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  console.log('render user')
  return (
    <>
      <h3>redux hook</h3>
      <div>name: {user.name}</div>
      <div>age: {user.age}</div>
      <input value={user.name} onChange={e => dispatch(loadUserData({ name: e.target.value }))}></input>
      <button onClick={() => dispatch(loadUserData({ age: user.age + 1 }))}>+age</button>
    </>
  )
}

export default User