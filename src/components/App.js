import React, { Component } from 'react'
import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

// the App component should render out the GifListContainer component 

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchResults: [],
      query: ''
    }
  }

  render() {
    return (
      <div>
          <NavBar color='black' title="Giphy Search" />
          <GifListContainer 
            query={this.state.query}
          />
      </div>
    )
  }

}

export default App
