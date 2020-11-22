/* global chrome */
import React, { useState } from 'react'
import { Search } from 'react-feather'

const SearchBar = ({ theme }) => {
  const [keyword, setKeyword] = useState('')

  function searchSubmitHandler(e) {
    e.preventDefault()
    const searchKey = keyword.split(' ').join('%20')
    chrome.tabs.create({ url: `https://twitter.com/search?q=${searchKey}&src=typed_query`, active: true })
    setKeyword('')
  }

  return (
    <form
      className={
        theme === 'light'
          ? 'flex items-center justify-between px-3 py-2 rounded-3xl bg-gray-200'
          : 'flex items-center justify-between px-3 py-2 rounded-3xl searchbar-darkmode'
      }
      style={{ width: '85%' }}
      onSubmit={searchSubmitHandler}>
      <Search className="text-gray-600" size="17" />
      <input
        type="text"
        className={
          theme === 'light'
            ? 'bg-transparent outline-none text-sm text-black'
            : 'bg-transparent outline-none text-sm text-white'
        }
        placeholder="Search Twitter"
        style={{ width: '88%' }}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </form>
  )
}

export default SearchBar
