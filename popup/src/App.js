/* global chrome */
import React, { Component } from 'react'

import countries from './utils/countries'
import storage from './utils/storage'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isDefaultLocation: true,
      preferredLocation: null,
      theme: 'light',
      trends: []
    }
  }

  componentDidMount() {
    // Check user preferred location in local storage
    storage.getItem('preferredLocation').then((preferredLocation) => {
      this.setState({ preferredLocation })
    })
    // Check user location preference in local storage
    storage.getItem('isDefaultLocation').then((result) => {
      // Parse boolean stored in local storage
      const isDefaultLocation = JSON.parse(result)
      if (isDefaultLocation === null || isDefaultLocation) {
        this.getDefaultLocationTrends()
        return this.setState({ isDefaultLocation: true })
      }

      if (!isDefaultLocation) {
        // load trends with preferred location
        this.getPreferredLocationTrends(this.state.preferredLocation)
        return this.setState({ isDefaultLocation: false })
      }
    })

    // Check user theme preference
    storage.getItem('theme').then((theme) => {
      if (theme === null) {
        this.setState({ theme: 'light' })
      } else {
        this.setState({ theme })
      }
    })
  }

  getDefaultLocationTrends = () => {
    console.log('Default location trends loading...')
  }

  getPreferredLocationTrends = (selectedLocation) => {
    if (!selectedLocation) {
      console.log('Please select country')
      return this.getDefaultLocationTrends()
    }
    console.log('Prefered Location trends loading...', selectedLocation)
  }

  setDefaultLocationHandler = (e) => {
    this.setState({ isDefaultLocation: e.target.checked })
    if (e.target.checked) {
      this.getDefaultLocationTrends()
      storage.setItem('isDefaultLocation', true)
    } else {
      this.getPreferredLocationTrends(this.state.preferredLocation)
      storage.setItem('isDefaultLocation', false)
    }
  }

  setPreferedLocationHandler = (selectedLocation) => {
    Promise.all([
      storage.setItem('preferredLocation', selectedLocation),
      storage.setItem('isDefaultLocation', false)
    ]).then(() => {
      this.setState({ preferredLocation: selectedLocation, isDefaultLocation: false })
      this.getPreferredLocationTrends(selectedLocation)
    })
  }

  setThemeHandler = (e) => {
    if (e.target.checked) {
      this.setState({ theme: 'dark' })
      storage.setItem('theme', 'dark')
    } else {
      this.setState({ theme: 'light' })
      storage.setItem('theme', 'light')
    }
  }

  render() {
    const { theme, trends, isDefaultLocation } = this.state
    return (
      <div>
        {/* {countries.map((country) => (
          <div
            style={{ padding: '20px', background: 'red', margin: '10px 0', cursor: 'pointer' }}
            key={country.id}
            onClick={() => this.setPreferedLocationHandler(country.data.data.name)}>
            {country.data.data.name}
          </div>
        ))} */}

        {/* <div>
          <p>Dark mode</p>
          <input type="checkbox" onChange={this.setThemeHandler} checked={theme === 'light' ? false : true} />
        </div> */}

        {/* {
          <div>
            <p>Default location</p>
            <input type="checkbox" onChange={this.setDefaultLocationHandler} checked={isDefaultLocation} />
          </div>
        } */}
      </div>
    )
  }
}
