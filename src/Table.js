import React/*, { Component }*/ from 'react'

// // class component
// // A class component must include `render()` and the `return` can only return one parent element
// class Table extends Component {
//   render() {
//     const {characterData} = this.props // props are read-only

//     return ( // if the `return` is contained to one line, it does not need parentheses
//       <table>
//         <TableHeader />
//         <TableBody characterData={characterData}/>
//       </table>
//     )
//   }
// }

// function component
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

// The `onClick` function must pass through a function that returns the `removeCharacter()` method, otherwise it will run automatically.
const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

const Table = (props) => {
  const { characterData, removeCharacter } = props

  return (
    <table>
      <TableHeader />
      <TableBody characterData={characterData} removeCharacter={removeCharacter} />
    </table>
  )
}

export default Table