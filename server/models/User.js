const {Schema, model, ObjectId} = require("mongoose")


const User = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    // name: {type: String, required: true},
    // surname: {type: String, required: true},
    // patronymic: {type: String, required: true},
    // phoneNumber: {type: String, required: true}
    openTests: {type: Array},
    userLevel: {type: Number, required: true},
})

module.exports = model('User', User)
