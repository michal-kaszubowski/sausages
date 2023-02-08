const { Schema, model } = require('mongoose');

const spiceSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    origin: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 50
    }
});

module.exports = model('Spice', spiceSchema);
