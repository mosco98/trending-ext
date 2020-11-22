/* global chrome */

class LocalStorage {
  getItem = (key) => Promise.resolve(localStorage.getItem(key))
  setItem = (key, value) => Promise.resolve(localStorage.setItem(key, value))
}

class ChromeStorage {
  getItem = (key) => {
    return new Promise((resolve, reject) => {
      chrome.storage.sync.get([key], function (result) {
        return resolve(Object.values(result)[0])
      })
    })
  }

  setItem = (key, value) => Promise.resolve(chrome.storage.sync.set({ [key]: value }))
}

const isDevelopment = () => process.env.NODE_ENV !== 'production'

export default isDevelopment ? new LocalStorage() : new ChromeStorage()
