import React from 'react'

const PureComponent = () => {
  const [userInfo, setUserInfo] = React.useState({ firstName: '', lastName: '' })
  return (
    <>
      <h3>pure component</h3>
      <input value={userInfo.firstName} onChange={e =>
        setUserInfo({
          ...userInfo,
          firstName: e.target.value
        })
      }></input>
      <input value={userInfo.lastName} onChange={e =>
        setUserInfo({
          ...userInfo,
          lastName: e.target.value
        })
      }></input>
      <DisplayUserInfo userInfo={userInfo}></DisplayUserInfo>
      <DisplayName name={userInfo.lastName}></DisplayName>
    </>
  )
}
const DisplayUserInfo = (props) => {
  console.log('render DisplayUserInfo')
  return (
    <ul>
      <li>firstName: {props.userInfo.firstName}</li>
      <li>lastName: {props.userInfo.lastName}</li>
    </ul>
  )
}
const DisplayName = React.memo((props) => {
  console.log('render name')
  return (
    <ul>
      <li>name: {props.name}</li>
    </ul>
  )
})

export default PureComponent