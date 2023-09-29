const jwt = require('jsonwebtoken')
const { authModel } = require("../../../module");
async function authHandle(req, res) {
    try {
        const { username, password } = req.body
        const isExist = await authModel.findOne({ username, password })
        if (!isExist) {
            throw new Error("invalid username or password")
        }

        const token = jwt.sign({ username }, 'alsdfjlsjk039kl23jlkj32')
        const isUpdate = await authModel.updateOne({ username }, { token })
        if (!isUpdate?.modifiedCount) {
            throw new Error("invalid username or password")
        }

        res.status(200).json({
            message: "auth success",
            token: token,
            status: true
        })
    } catch (error) {
        res.status(409).json({
            message: error?.message,
            status: false
        })
    }

}
module.exports = authHandle