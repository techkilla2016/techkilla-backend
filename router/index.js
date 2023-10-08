const { Router } = require('express')
const qrSolution = require('./controller/qr-data')
const sendEmail = require('../middleware/sendEmial')
const qrSolutionData = require('./controller/qr-data/fetchData')
const authHandle = require('./controller/auth')
const contact = require('./controller/contact')
const router = Router()

router.get('/', (req, res) => {
    res.send("hello welcome to Techkilla <a href='https://www.techkilla.com' target='_blank'>click here</a>")
})

router.post('/qr-solution', sendEmail, qrSolution)
router.get('/qr-solution', qrSolutionData)
router.post('/auth', authHandle)
router.post('/contact', contact)

module.exports = router
