import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GiftListContainer extends Component {
  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  componentDidMount = () => {
    this.handleSearch()
  }

  handleSearch = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(results => {
      return results.json()
    })
    .then(json => {
      console.log('query', query)
      console.log(json.data.slice(0, 3))
      this.setState({gifs: json.data.slice(0, 3)})
    })
  }

  renderGifs = () => {
    return this.state.gifs.map((gif, i) => {
      return (
        <GifList key={i} gif={gif} />
      )
    })
  }

  render() {
    return (
      <div>
        <GifSearch 
          handleSearch={this.handleSearch}
        />
        <ul>
          {this.renderGifs()}
        </ul>
      </div>
    )
  }
}

export default GiftListContainer