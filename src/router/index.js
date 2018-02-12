import React from "react"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as RouterConfig from '@/constants/RouterConfig'

import Home from '@/container/home'

const RootRouter = () => {
  return (
    <Router>
      <Route exact path={RouterConfig.HOME} component={Home}></Route>
    </Router>
  )
}

export default RootRouter
