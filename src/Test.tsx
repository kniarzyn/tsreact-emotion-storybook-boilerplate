import * as React from "react"
import styled from 'react-emotion'

const H4 = styled('button'){
  font-size: 20px,
  color: red
}

export default () => (<H4 href="#">Takie tam: {Date.now()}</H4>)
