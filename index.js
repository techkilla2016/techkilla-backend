const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./router')
const port = 2917 || process.env.PORT

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(router)
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})