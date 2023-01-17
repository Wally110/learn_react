import React, { Component } from "react"
import Table from "./Table"

// class App extends Component {
//   render() {
//     const characters = [ // js array
//       { // js object
//         name: 'Charlie',
//         job: 'Janitor',
//       },
//       {
//         name: 'Mac',
//         job: 'Bouncer',
//       },
//       {
//         name: 'Dee',
//         job: 'Aspring actress',
//       },
//       {
//         name: 'Dennis',
//         job: 'Bartender',
//       },
//     ]

//     return ( // JSX
//       <div className="container">
//         <h1>Hello, React!</h1>
//         <Table characterData={characters} />
//       </div>
//     )
//   }
// }

class App extends Component {
  state = { // js type: object
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
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

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <h1>Hello, React!</h1>
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}

export default App
