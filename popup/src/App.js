import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isDefaultLocation: true,
      preferedLocation: ''
    }
  }

  getDefaultLocationTrends = () => {
    console.log('Default location trends loading...')
  }

  getPreferedLocationTrends = (selectedLocation) => {
    console.log('Prefered Location trends loading...')
  }

  setPreferedLocationHandler = (e) => {
    const selectedLocation = e.target.value
    this.setState({ preferedLocation: selectedLocation, isDefaultLocation: false })
    this.getPreferedLocationTrends(selectedLocation)
  }

  render() {
    return (
      <div>
        <p>App</p>
      </div>
    )
  }
}
