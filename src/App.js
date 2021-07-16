import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import './App.css'
import BasicDemo from './pages/basic-demo'
import ComponentUnmount from './pages/component-unmount'
import CustomHook from './pages/custom-hook'
import PureComponent from './pages/pure-component'
import UseReducer from './pages/use-reducer'
import AsyncClosure from './pages/async-closure'
import WhyDidYouUpdate from './pages/why-did-you-update'
import User from './pages/User'
import MyHooks from './pages/my-hooks'
import ImperativeHandleHooks from './pages/imperative-hook'
import ContextHooks from './pages/context-hook'
import useEventCallbackHooks from './pages/event-callback-hook'
import useTracedCountHooks from './pages/tracedCount-hook'
import KeepAlive from './pages/keep-alive'
import ScrollHeightDetector from './pages/scrollHeight-detector'

function App() {
  return (
    <div className="App">
      <ul className='app-menu'>
        <Router>
          <li><Link to="/BasicDemo" >BasicDemo</Link></li>
          <li><Link to="/ComponentUnmount" >ComponentUnmount</Link></li>
          <li><Link to="/CustomHook" >CustomHook</Link></li>
          <li><Link to="/PureComponent" >PureComponent</Link></li>
          <li><Link to="/UseReducer" >UseReducer</Link></li>
          <li><Link to="/AsyncClosure" >AsyncClosure</Link></li>
          <li><Link to="/WhyDidYouUpdate" >WhyDidYouUpdate</Link></li>
          <li><Link to="/User">User</Link></li>
          <li><Link to="/MyHooks">MyHooks</Link></li>
          <li><Link to="/useImperativeHandle">useImperativeHandle</Link></li>
          <li><Link to="/useContext">useContext</Link></li>
          <li><Link to="/useEventCallback">useEventCallback</Link></li>
          <li><Link to="/useTracedCountHooks">useTracedCountHooks</Link></li>
          <li><Link to="/keepAlive">keepAlive</Link></li>
          <li><Link to="/scrollHeightDetector">scrollHeightDetector</Link></li>
        </Router>
      </ul>
      <div className='app-container'>
        <Router>
          <Route path="/BasicDemo" exact component={BasicDemo} />
          <Route path="/ComponentUnmount" exact component={ComponentUnmount} />
          <Route path="/CustomHook" exact component={CustomHook} />
          <Route path="/PureComponent" exact component={PureComponent} />
          <Route path="/UseReducer" exact component={UseReducer} />
          <Route path="/AsyncClosure" exact component={AsyncClosure} />
          <Route path="/WhyDidYouUpdate" exact component={WhyDidYouUpdate} />
          <Route path="/User" exact component={User} />
          <Route path="/MyHooks" exact component={MyHooks} />
          <Route path="/useImperativeHandle" exact component={ImperativeHandleHooks} />
          <Route path="/useContext" exact component={ContextHooks} />
          <Route path="/useEventCallback" exact component={useEventCallbackHooks} />
          <Route path="/useTracedCountHooks" exact component={useTracedCountHooks} />
          <Route path="/keepAlive" exact component={KeepAlive} />
          <Route path="/scrollHeightDetector" exact component={ScrollHeightDetector} />
        </Router>
      </div>
    </div>
  )
}

export default App
