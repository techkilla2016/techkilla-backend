const { qrModel } = require("../../../module")

async function qrSolutionData(req, res) {
    try {
        const isExist = await qrModel.find()
        if (!isExist) {
            throw new Error('something wrong!')
        }
        const data = isExist?.map(item => {
            return {
                name: item?.name,
                email: item?.email,
                country: item?.country,
                phone: item?.phone,
                job: item?.job,
                company: item?.company,
                date: item?.date,
                utm_source: item?.utm_source,
                utm_medium: item?.utm_medium,
                utm_campaign: item?.utm_campaign,
            }
        })
        res.status(200).json({
            status: true,
            message: "welcome",
            data: data
        })
    } catch (error) {
        res.status(405).json({
            status: false,
            message: error.message
        })
    }
}
module.exports = qrSolutionData