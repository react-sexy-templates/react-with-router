import React, { Component } from 'react'

import style from './index.css'

class Hello extends Component {
  constructor (props) {
    super(props)
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div className={style.title}>hello,{this.props.name}</div>
    )
  }
}

export default Hello
