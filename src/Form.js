import React, { Component } from "react"

class Form extends Component { // no longer need to include a `constructor()` on React class componets
  initialState = { // displayed on `input`
    name: '',
    job: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      [name]: value
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState) // reset the state to the initial state, to clear the form after submit.
  }

  render() {
    const { name, job } = this.state

    return (
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={this.handleChange} />
        <label htmlFor="job">Job</label>
        <input type="text" name="job" id="job" value={job} onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    )
  }

}

export default Form

