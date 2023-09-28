const { Router } = require('express')
const qrSolution = require('./controller/qr-data')
const sendEmail = require('../middleware/sendEmial')
const router = Router()

router.get('/', (req, res) => {
    res.send("hello welcome to Techkilla <a href='https://www.techkilla.com' target='_blank'>click here</a>")
})

router.post('/qr-solution', sendEmail, qrSolution)
module.exports = router