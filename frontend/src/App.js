import React, { Component } from 'react'
import 'antd/dist/antd.css'

import { BrowserRouter as Router } from 'react-router-dom'

import BaseRoute from './Routes'
import CustomLayout from './constainers/Layout'


class App extends Component {
  
  render(){
    return (
      <Router>
        <CustomLayout>
          <BaseRoute />
        </CustomLayout>
      </Router>
    )
  }
}

export default App