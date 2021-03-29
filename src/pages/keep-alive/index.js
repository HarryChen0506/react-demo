/* eslint-disable */
import React, { useState, Component, createContext } from 'react'
import ReactDOM from 'react-dom'
const { Provider, Consumer } = createContext()

const withScope = WrappedComponent => {
  const Hoc = props => (
    <Consumer>{keep => <WrappedComponent {...props} keep={keep} />}</Consumer>
  )
  Hoc.displayName = 'WithScopeComp'
  return Hoc
}


class KeepAlive extends Component {
  constructor(props) {
    super(props)
    this.init(props)
  }

  componentDidMount() {
    // this.init(this.props)
    // console.log('componentDidMount', this.placeholder)
  }

  init = async ({ id, children, keep }) => {
    // console.log('init')
    const realContent = await keep(id, children)
    // console.log('append')
    this.placeholder && this.placeholder.appendChild(realContent)
  }

  render() {
    // return this.placeholder ? this.placeholder.children : null
    return (
      <div
        ref={node => {
          console.log('node--', node)
          this.placeholder = node
        }}
      >
      </div>
    )
  }
}

KeepAlive = withScope(KeepAlive)

class AliveScope extends Component {
  nodes = {}
  state = {}

  keep = (id, children) => new Promise(resolve =>
    this.setState(
      {
        [id]: { id, children }
      },
      () => {
        return resolve(this.nodes[id])
      }
    )
  )

  render() {
    return (
      <Provider value={this.keep}>
        {this.props.children}
        {Object.values(this.state).map(({ id, children }) => (
          <div
            key={id}
            ref={node => {
              this.nodes[id] = node
            }}
          >
            {children}
          </div>
        ))}
      </Provider>
    )
  }
}



function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className='counter'>
      count: {count}
      <button onClick={() => setCount((count) => count + 1)}>add</button>
    </div>
  )
}

const Demo = () => {
  const [show, setShow] = useState(true)
  return (
    <div>
      <h3>keep alive demo</h3>
      <button onClick={() => setShow((show) => !show)}>Toggle</button>
      <p>无 KeepAlive</p>
      {show && <Counter />}

      <p>有 KeepAlive</p>
      {show && (
        <KeepAlive id="Test">
          <Counter />
        </KeepAlive>
      )}
    </div>
  )
}

const DemoWraper = () => {
  return (
    <AliveScope>
      <Demo></Demo>
    </AliveScope>
  )
}

export default DemoWraper