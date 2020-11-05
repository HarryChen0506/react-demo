import React from 'react'

export default function useBoolean(initialValue = false) {
  const [state, setState] = React.useState(initialValue)
  // const actions = React.useMemo(() => {
  //   return {
  //     setTrue: () => setState(true),
  //     setFalse: () => setState(false)
  //   }
  // }, [])
  const actions = {
    setTrue: () => setState(true),
    setFalse: () => setState(false)
  }
  return [state, actions]
}