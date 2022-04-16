const mongoose = require('mongoose')
const userSchema = new mongoose.Schema(
    {
        username : { type : String}
    },
    {
        versionKey : false
    }
)

module.exports = mongoose.model('user', userSchema)