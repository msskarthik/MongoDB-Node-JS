const express = require('express');
const router = express.Router();
const products = require('../models/product.js');

router.post('/', async(req,res) => {
    const product = new products({
        brand: req.body.brand,
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price,
        reviews: req.body.reviews,
        rating: req.body.rating,
        type: req.body.type
    });
    try {
        const savedPost = await product.save();
        res.json(savedPost);
    } catch(err) {
        res.json({message: err});
    }

});

router.get('/', async (req,res) => {
    try {
        const posts = await products.find();
        res.json(posts);
    } catch(err) {
        res.json({mesage: err})
    }
});

router.get('/?type&type2', async(req,res) => {
    try {
        const post = await products.find({$and:[
            {
                type:req.params.type,
                type:req.params.type2
            }
        ]})
        res.json(post);
    } catch(err) {
        res.json({ message: err });
    }
});

module.exports = router