import React from 'react'
/* eslint-disable */
const userReducer = (state, action) => {
  switch (action.type) {
    case 'firstName':
      return {
        ...state,
        firstName: action.paylaod
      }
    case 'lastName':
      return {
        ...state,
        lastName: action.paylaod
      }
    default:
      return state
  }
}
const MyComponent = () => {
  const [lastName, setLastName] = React.useState('')
  const [userInfo, dispatch] = React.useReducer(userReducer, { firstName: 'a', lastName: 'b' })
  return (
    <>
      <h3>use reducer</h3>
      <div>firstName: {userInfo.firstName}</div>
      <div>lastName: {userInfo.lastName}</div>
      <input value={userInfo.firstName} onChange={e => dispatch({ type: 'firstName', paylaod: e.target.value })}></input>
      <NameInput name={userInfo.lastName} dispatch={dispatch}></NameInput>
    </>
  )
}
const NameInput = React.memo((props) => {
  console.log('render nameInput')
  return <input value={props.name} onChange={e => props.dispatch({ type: 'lastName', paylaod: e.target.value })}></input>
})

export default MyComponent