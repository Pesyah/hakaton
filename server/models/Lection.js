const {model, Shema} = require("mongoose")

const Lection = new Shema ({
    name: {type: String, required: true},
    lection: {type: String},
    test: {type: String}
})

module.exports = model('Lection', Lection)