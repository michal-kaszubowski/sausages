const {Schema, model} = require('mongoose');

const manufactureSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    origin: {
        type: String,
        required: false
    },
    established: {
        type: Number,
        required: true,
        min: 1600,
        max: 2022
    }
});

module.exports = model('Manufacturer', manufactureSchema);
