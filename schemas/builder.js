const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}

const builderSchema = mongoose.Schema({
    name: {
        first: reqString,
        last: String,
        other: String
    },
    address: {
        line1: reqString,
        line2: String,
        line3: String
    },
    city: reqString,
    nic: reqString,
    telephone: reqString,
    email: String,
    builderType: {
        type: Number,
        required: true
    },
    otherAbility: Array,
    stars: Number
})

module.exports = mongoose.model('builder', builderSchema)