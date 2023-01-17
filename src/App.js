import React, { Component } from "react"
import Table from "./Table"
import Form from "./Form"


class App extends Component {
  state = { // js type: object
    characters: [

    ],
  }

  removeCharacter = (index) => { // a method : a class function
    const { characters } = this.state

    this.setState( // a built-in method for manipulating state
      {
        characters: characters.filter((character, i) => { // filter does not mutate but rather creates a new array, and is a preferred method for modifying arrays in JS
          return i !== index // return object whose index is not `index`
        })
      }
    )
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <h2>Hello, Github Pages</h2>
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

export default App
