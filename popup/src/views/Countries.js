import React from 'react'
import { ArrowLeft, Check } from 'react-feather'
import countries from '../utils/countries'
import { Scrollbars } from 'react-custom-scrollbars'

const Countries = ({ theme, updateShowCountries, preferredLocation, setPreferedLocationHandler }) => {
  return (
    <div className={theme === 'light' ? 'view px-3 bg-white text-black' : 'view px-3 bg-black text-white'}>
      <div className="flex items-center bg-transparent" style={{ height: '4.3rem' }}>
        <ArrowLeft
          className={theme === 'light' ? 'cursor-pointer text-black' : 'cursor-pointer text-blue-500'}
          onClick={() => updateShowCountries(false)}
        />
        <h1 className="font-bold mx-8">Countries</h1>
      </div>
      <Scrollbars autoHeight autoHeightMin={490}>
        {countries.map((country, i) => (
          <div
            key={country.id}
            className="px-3 py-3 cursor-pointer my-1 flex items-center justify-between"
            onClick={() => {
              setPreferedLocationHandler(country.data.data.name)
              updateShowCountries(false)
            }}>
            <p>{country.data.data.name}</p>
            {preferredLocation === country.data.data.name && <Check size="17" />}
          </div>
        ))}
      </Scrollbars>
    </div>
  )
}

export default Countries
