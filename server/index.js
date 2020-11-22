const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({ origin: '*' }))
app.use(express.json())

const routes = require('./routes')

// Routes
app.use('/', routes)

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`App is running on port ${port}`))
