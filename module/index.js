const mongoose = require('mongoose')
// const URL = `mongodb://0.0.0.0:27017/qr-solution`
const URL = `mongodb+srv://techkilla:ppm6zpipBxfpXotP@cluster0.5wbdvcm.mongodb.net/techkilla`
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    socketTimeoutMS: 30000,
}).then(() => {
    console.log('connect')
}).catch((error) => {
    console.log(error.message)
})

const qrSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    job: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    utm_source: String,
    utm_medium: String,
    utm_campaign: String
})

const authSchema = new mongoose.Schema({
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    }
})

const contactSchema = new mongoose.Schema({
    First_Name: {
        type: String,
        required: true
    },
    Last_Name: {
        type: String,
        required: true
    },
    Phone_Number: {
        type: String,
        required: true
    },
    Opportunity: {
        type: String,
        required: true
    },
    about_us: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },

})

const authModel = new mongoose.model('admin', authSchema)
const qrModel = new mongoose.model('qr_solution', qrSchema)
const contactModel = new mongoose.model('contact', contactSchema)
module.exports = { qrModel, authModel, contactModel }