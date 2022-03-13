const {Schema, model, ObjectId} = require("mongoose")


const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String},
    username: {type: String},
    surname: {type: String},
    patronymic: {type: String},
    phoneNumber: {type: String},
    openTests: {type: Array},
    userLevel: {type: Number, required: true},
})

module.exports = model('User', User)
