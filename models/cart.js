const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    brand: {
        type:String,
        required: true
    },
    title: {
        type:String,
        required: true
    },
    image: {
        type:String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    price: {
        type:Number,
        required: true
    },
    reviews: {
        type:Number,
        required: true
    },
    rating: {
        type:Number,
        required: true
    },
    type: {
        type:String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('cart',cartSchema)