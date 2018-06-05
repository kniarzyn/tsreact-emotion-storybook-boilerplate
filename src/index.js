import React from "react"
import ReactDOM from "react-dom"
import Test from "./Test.js"

class App  extends React.Component  {

  state = {text: Date.now()}

  render() {
    return (
      <div>
        <h1>My minimal react WebPabck Babel Setup!!{this.state.text}</h1>
        <Test />
        <p>{this.state.text}</p>
      </div>

  )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)


module.hot.accept()
