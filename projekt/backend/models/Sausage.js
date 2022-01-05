const { Schema, model } = require('mongoose');

const sausageSchema = new Schema({
    type: {
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
        max: 100
    },
    image: {
        type:String,
        required: false
    },
    manufacturer: {
        type: Schema.Types.ObjectId,
        ref: 'Manufacturer',
        required: true
    }
});

module.exports = model('Sausage', sausageSchema);
