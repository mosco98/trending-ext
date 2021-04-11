import axios from 'axios'
import React, { Component } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import ErrorPage from './components/ErrorPage'
import ListCard from './components/ListCard'
import Loader from './components/Loader'
import NavBar from './components/NavBar'
import storage from './utils/storage'

const SERVER = 'https://trending-ext-server.herokuapp.com'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isDefaultLocation: true,
      theme: 'light',
      trends: [],
      trendsLocation: null,
      isLoading: true,
      error: false,
      errMsg: ''
    }
  }

  componentDidMount() {
    if (navigator.onLine) {
      this.getDefaultLocationTrends()
    } else {
      this.setState({ error: true, isLoading: false })
    }

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
    this.setState({ error: false, errMsg: '' })
    if (!navigator.onLine) {
      return this.setState({ error: true, isLoading: false })
    }
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
            if (data.error) {
              this.setState({ error: true, isLoading: false, errMsg: data.msg })
            }
          })
          .catch((err) => {
            if (err) {
              this.setState({ error: true, isLoading: false, errMsg: 'Network error' })
            }
          })
      }

      if (err) {
        return this.setState({ error: true, isLoading: false, errMsg: 'Network error' })
      }
    })
  }

  setThemeHandler = (theme) => {
    this.setState({ theme })
    storage.setItem('theme', theme)
  }

  refreshHandler = () => {
    this.setState({ error: false, isLoading: true, errMsg: '' })
    this.getDefaultLocationTrends()
  }

  render() {
    const { theme, trends, trendsLocation, isLoading, error, errMsg } = this.state
    if (isLoading) {
      return <Loader theme={theme} />
    }
    if (error) {
      return <ErrorPage theme={theme} refreshHandler={this.refreshHandler} errMsg={errMsg} />
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
            </div>
            <hr />
            {trends.map((trend, i) => (
              <ListCard key={i} {...trend} i={i} theme={theme} />
            ))}
            <div className="px-3 py-5" />
          </div>
        </Scrollbars>
      </div>
    )
  }
}
