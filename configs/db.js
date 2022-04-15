const mongoose = require('mongoose')

const db = "mongodb://localhost:27017/db"
module.exports = ()=>mongoose.connect(db)