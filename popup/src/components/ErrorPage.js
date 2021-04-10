import React from 'react'

const ErrorPage = ({ theme, refreshHandler }) => {
  return (
    <div
      className={
        theme === 'light'
          ? 'h-screen flex items-center justify-center fixed view bg-white'
          : 'h-screen flex items-center justify-center fixed view bg-black'
      }>
      <div
        className={
          theme === 'light'
            ? 'flex flex-col items-center justify-center text-black'
            : 'flex flex-col items-center justify-center text-white'
        }>
        <h1>Oops, an error occured</h1>
        <button
          className="bg-blue-500 px-2 py-1 rounded-2xl mt-1 text-white outline-none focus:outline-none"
          onClick={refreshHandler}>
          Refresh
        </button>
      </div>
    </div>
  )
}

export default ErrorPage
