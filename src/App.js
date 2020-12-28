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

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
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
        </ul>
      </Router>
    </div>
  )
}

export default App
