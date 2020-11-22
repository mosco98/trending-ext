/* global chrome */
import React, { Component } from 'react'
import NavBar from './components/NavBar'

import storage from './utils/storage'
import { Scrollbars } from 'react-custom-scrollbars'
import { Settings } from 'react-feather'

import TrendsSettings from './components/TrendsSettings'
import ListCard from './components/ListCard'
import Loader from './components/Loader'
import axios from 'axios'

import { getSingleWOEID } from 'twitter-woeid'

const SERVER = 'http://localhost:8080'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isDefaultLocation: true,
      preferredLocation: null,
      theme: 'light',
      trends: [],
      trendsLocation: null,
      isLoading: true,
      showTrendsSettings: false
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
    navigator.geolocation.getCurrentPosition((location, err) => {
      if (location) {
        const lat = location.coords.latitude
        const long = location.coords.longitude

        return axios
          .post(`${SERVER}/default`, { lat, long })
          .then(({ data }) => {
            if (data.success) {
              this.setState({ trends: data.data[0].trends, trendsLocation: data.location, isLoading: false })
              console.log('loaded')
            }
          })
          .catch((err) => console.log(err))
      }

      if (err) {
        return console.log('Cannot detect location')
      }
    })
  }

  getPreferredLocationTrends = (selectedLocation) => {
    if (!selectedLocation) {
      console.log('Please select country')
      return this.getDefaultLocationTrends()
    }
    const woeid = getSingleWOEID(selectedLocation)
    console.log(woeid)
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

  setThemeHandler = (theme) => {
    this.setState({ theme })
    storage.setItem('theme', theme)
  }

  trendsSettingsHandler = () => {
    this.setState({ showTrendsSettings: !this.state.showTrendsSettings })
  }

  render() {
    const {
      theme,
      trends,
      isDefaultLocation,
      preferredLocation,
      showTrendsSettings,
      trendsLocation,
      isLoading
    } = this.state
    if (isLoading) {
      return <Loader theme={theme} />
    }
    return (
      <div className={theme === 'light' ? 'bg-white py-1 px-1 overflow-hidden' : 'bg-black py-1 px-1 overflow-hidden'}>
        <NavBar theme={theme} setThemeHandler={this.setThemeHandler} />
        <Scrollbars autoHeight autoHeightMin={608}>
          <div
            className={
              theme === 'light' ? 'list-group rounded-2xl bg-gray-200' : 'list-group rounded-2xl list-group-bg-darkmode'
            }>
            <div className="flex items-center justify-between px-3 py-2 select-none">
              <h1 className={theme === 'light' ? 'font-bold text-black' : 'font-bold text-white'}>
                {trendsLocation} trends
              </h1>
              <Settings
                className={theme === 'light' ? 'cursor-pointer text-black' : 'cursor-pointer text-blue-500'}
                size="19"
                onClick={this.trendsSettingsHandler}
              />
            </div>
            <hr />
            {trends.map((trend, i) => (
              <ListCard key={i} {...trend} i={i} theme={theme} />
            ))}
            <div className="px-3 py-5" />
          </div>
        </Scrollbars>

        {showTrendsSettings && (
          <TrendsSettings
            trendsSettingsHandler={this.trendsSettingsHandler}
            theme={theme}
            isDefaultLocation={isDefaultLocation}
            setDefaultLocationHandler={this.setDefaultLocationHandler}
            setPreferedLocationHandler={this.setPreferedLocationHandler}
            preferredLocation={preferredLocation}
          />
        )}
      </div>
    )
  }
}
