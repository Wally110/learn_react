import React, { Component } from "react"

class App extends Component {
  state = {
    data: []
  }

  // Code is invoked after component is mounted/inserted into the DOM tree.
  // a React lifecycle method.
  // Lifecycle is the order in which methods ared in React.
  // Mounting refers to an item being inserted into the DOM.
  componentDidMount() { // overwited
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*"

    fetch(url) // JS built-in Fetch
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          data: result
        })
      })
  }

  render() {
    const { data } = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>
  }
}

export default App