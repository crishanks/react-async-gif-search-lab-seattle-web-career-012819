import React, { Component } from 'react'

class GifSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.handleSearch(this.state.query)
  }

  render() {
    return (
      <div>
        <h3>Enter a Search Term:</h3>
        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          <input type="text" value={this.state.query} onChange={(ev) => this.setState({query: ev.target.value})}/>
        </form>
      </div>

    )
  }

}

export default GifSearch