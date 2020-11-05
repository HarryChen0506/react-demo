import React, { useState, useEffect } from 'react'
const useUserList = function () {
  const [filter, setFilter] = useState('')
  const [list, setList] = useState([])
  // const loadUser = useCallback(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
  //     .then(response => response.json())
  //     .then(data => setList(data))
  // }, [filter])
  const loadUser = () => {
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
      .then(response => response.json())
      .then(data => setList(data))
  }
  React.useDebugValue(filter ? 'a' : 'b')
  return { filter, setFilter, list, loadUser }
}

const CustomHook = function () {
  const { filter, setFilter, list, loadUser } = useUserList()
  useEffect(() => {
    loadUser()
    console.log(1)
    // eslint-disable-next-line
  }, [filter])
  return (
    <>
      <h3>custom hook</h3>
      <input value={filter} onChange={(e) => setFilter(e.target.value)}></input>
      <ul>
        {list.map(v => {
          return <li key={v.id}>{v.name}</li>
        })}
      </ul>
    </>
  )
}

export default CustomHook