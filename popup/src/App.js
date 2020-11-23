/* global chrome */
import axios from 'axios'
import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { Settings } from 'react-feather'

import ListCard from './components/ListCard'
import Loader from './components/Loader'
import NavBar from './components/NavBar'
import storage from './utils/storage'
import TrendsSettings from './views/TrendsSettings'

const SERVER = 'http://localhost:8080'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isDefaultLocation: true,
      preferredLocation: {},
      theme: 'light',
      trends: [],
      trendsLocation: null,
      isLoading: true,
      showTrendsSettings: false,
      error: false
    }
  }

  componentDidMount() {
    // Check user preferred location in local storage
    storage.getItem('preferredLocation').then((result) => {
      const preferredLocation = JSON.parse(result)
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

      if (!isDefaultLocation && this.state.preferredLocation) {
        // load trends with preferred location
        this.getPreferredLocationTrends(this.state.preferredLocation)
        return this.setState({ isDefaultLocation: false })
      } else {
        storage.setItem('isDefaultLocation', true)
        return this.setState({ isDefaultLocation: true })
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
          .post(`${SERVER}/`, { lat, long })
          .then(({ data }) => {
            if (data.success) {
              this.setState({ trends: data.data[0].trends, trendsLocation: data.location, isLoading: false })
            }
          })
          .catch((err) => console.log(err))
      }

      if (err) {
        return console.log('Cannot detect location')
      }
    })
  }

  // getPreferredLocationTrends = (preferredLocation) => {
  //   if (!preferredLocation) {
  //     return
  //   }
  //   const { lat, long, country } = preferredLocation
  //   axios
  //     .post(`${SERVER}/preferred`, { lat, long })
  //     .then(({ data }) => {
  //       if (data.success) {
  //         this.setState({ trends: data.data[0].trends, trendsLocation: data.location, isLoading: false })
  //       }
  //     })
  //     .catch((err) => {
  //       if (err) {
  //         return this.setState({ error: true })
  //       }
  //     })
  // }

  // setDefaultLocationHandler = (e) => {
  //   this.setState({ isDefaultLocation: e.target.checked })
  //   if (e.target.checked) {
  //     this.getDefaultLocationTrends()
  //     storage.setItem('isDefaultLocation', true)
  //   } else {
  //     this.getPreferredLocationTrends(this.state.preferredLocation)
  //     storage.setItem('isDefaultLocation', false)
  //   }
  // }

  // setPreferedLocationHandler = (country, lat, long) => {
  //   const preferredLocation = { country, lat, long }
  //   Promise.all([
  //     storage.setItem('preferredLocation', JSON.stringify(preferredLocation)),
  //     storage.setItem('isDefaultLocation', false)
  //   ]).then(() => {
  //     this.setState({ preferredLocation, isDefaultLocation: false })
  //     this.getPreferredLocationTrends(preferredLocation)
  //   })
  // }

  setThemeHandler = (theme) => {
    this.setState({ theme })
    storage.setItem('theme', theme)
  }

  // trendsSettingsHandler = () => {
  //   this.setState({ showTrendsSettings: !this.state.showTrendsSettings })
  // }

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
      <div
        className={
          theme === 'light' ? 'bg-white py-1 px-1 overflow-hidden app' : 'bg-black py-1 px-1 overflow-hidden app'
        }>
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
              {/* <Settings
                className={theme === 'light' ? 'cursor-pointer text-black' : 'cursor-pointer text-blue-500'}
                size="19"
                onClick={this.trendsSettingsHandler}
              /> */}
            </div>
            <hr />
            {trends.map((trend, i) => (
              <ListCard key={i} {...trend} i={i} theme={theme} />
            ))}
            <div className="px-3 py-5" />
          </div>
        </Scrollbars>

        {/* {showTrendsSettings && (
          <TrendsSettings
            trendsSettingsHandler={this.trendsSettingsHandler}
            theme={theme}
            isDefaultLocation={isDefaultLocation}
            setDefaultLocationHandler={this.setDefaultLocationHandler}
            setPreferedLocationHandler={this.setPreferedLocationHandler}
            preferredLocation={preferredLocation}
          />
        )} */}
      </div>
    )
  }
}
