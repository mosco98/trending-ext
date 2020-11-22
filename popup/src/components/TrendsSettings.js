import React, { useState } from 'react'
import { ArrowLeft, ChevronRight } from 'react-feather'

import Countries from '../views/Countries'

const TrendsSettings = ({
  trendsSettingsHandler,
  theme,
  setPreferedLocationHandler,
  preferredLocation,
  isDefaultLocation,
  setDefaultLocationHandler
}) => {
  const [showCountries, updateShowCountries] = useState(false)

  return (
    <div className={theme === 'light' ? 'view px-3 bg-white text-black' : 'view px-3 bg-black text-white'}>
      <div className="flex items-center bg-transparent" style={{ height: '4.3rem' }}>
        <ArrowLeft
          className={theme === 'light' ? 'cursor-pointer text-black' : 'cursor-pointer text-blue-500'}
          onClick={trendsSettingsHandler}
        />

        <h1 className="font-bold mx-8">Locations</h1>
      </div>

      <div>
        <div className="flex items-center justify-between py-4 px-2">
          <div>
            <p>Show content in this location</p>
            <small className="font-light">You'll see what's happening around you right now.</small>
          </div>
          <input
            type="checkbox"
            className="cursor-pointer"
            checked={isDefaultLocation}
            onChange={setDefaultLocationHandler}
          />
        </div>
        <hr />
        {!isDefaultLocation && (
          <div
            className="flex items-center justify-between py-4 px-2 cursor-pointer"
            onClick={() => updateShowCountries(true)}>
            <div>
              <p>Explore locations</p>
              <small className="font-light">
                {preferredLocation ? preferredLocation : `You'll see what's happening around you right now.`}
              </small>
            </div>
            <ChevronRight />
          </div>
        )}
      </div>
      {showCountries && (
        <Countries
          theme={theme}
          setPreferedLocationHandler={setPreferedLocationHandler}
          updateShowCountries={updateShowCountries}
          preferredLocation={preferredLocation}
        />
      )}
    </div>
  )
}

export default TrendsSettings
