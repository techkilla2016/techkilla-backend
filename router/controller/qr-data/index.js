const { qrModel } = require("../../../module")

async function qrSolution(req, res) {
    try {
        const data = req.body
        const model = new qrModel({
            name: data?.name,
            email: data?.email,
            country: data?.country,
            phone: data?.phone,
            job: data?.job,
            company: data?.company,
            utm_source: data?.utm_source,
            utm_medium: data?.utm_medium,
            utm_campaign: data?.utm_campaign
        })

        const isSave = await model.save()
        if (!isSave) {
            throw new Error('something wrong!')
        }
        res.status(200).json({
            status: true,
            message: ""
        })
    } catch (error) {
        res.status(405).json({
            status: false,
            message: error.message
        })
    }
}
module.exports = qrSolution