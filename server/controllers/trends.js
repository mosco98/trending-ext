const needle = require('needle')
const config = require('../config/config')

exports.getTrendsWithUserLocation = async (req, res) => {
  const { lat, long } = req.body
  console.log(lat, long)
  const userLocationResponse = await needle(
    'get',
    `https://api.twitter.com/1.1/trends/closest.json?lat=${lat}&long=${long}`,
    {
      headers: {
        authorization: `Bearer ${config.BEARER_TOKEN}`
      }
    }
  )

  console.log(userLocationResponse.body)

  if (userLocationResponse.body) {
    const userLocationInfo = userLocationResponse.body[0]
    const trendsResponse = await needle(
      'get',
      `https://api.twitter.com/1.1/trends/place.json?id=${userLocationInfo.woeid}`,
      {
        headers: {
          authorization: `Bearer ${config.BEARER_TOKEN}`
        }
      }
    )

    if (trendsResponse.body) {
      return res.json({
        success: true,
        data: trendsResponse.body,
        location: userLocationResponse.body[0].country
      })
    } else {
      return res.json({ error: true, msg: 'Network error' })
    }
  } else {
    return res.json({ error: true, msg: 'Network error' })
  }
}

// exports.getTrendsWithUserLocation = (req, res) => {}

exports.preferredLocation = async (req, res) => {
  const userLocationResponse = await needle('get', `https://api.twitter.com/1.1/trends/place.json?id=23424739`, {
    headers: {
      authorization: `Bearer ${config.BEARER_TOKEN}`
    }
  })

  console.log(userLocationResponse.body)

  res.send('Okay')
}
