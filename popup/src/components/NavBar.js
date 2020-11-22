import React from 'react'
import { Moon, Sun } from 'react-feather'

import SearchBar from './SearchBar'

const NavBar = ({ theme, setThemeHandler }) => {
  return (
    <nav
      className={
        theme === 'light'
          ? 'flex items-center justify-between px-3 bg-white z-10'
          : 'flex items-center justify-between px-3 bg-black z-10'
      }>
      <SearchBar theme={theme} />
      {theme === 'dark' && (
        <span className="p-2 rounded-full cursor-pointer" title="Light mode">
          <Sun className="cursor-pointer text-blue-500" size="25" onClick={() => setThemeHandler('light')} />
        </span>
      )}
      {theme === 'light' && (
        <span className="p-2 rounded-full cursor-pointer" title="Dark mode">
          <Moon className="text-black" size="25" onClick={() => setThemeHandler('dark')} />
        </span>
      )}
    </nav>
  )
}

export default NavBar
