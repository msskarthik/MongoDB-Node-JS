const express = require('express');
const cart = require('../models/cart');
const router = express.Router();

router.post('/',async(req,res) => {
    const post = new cart({
        brand: req.body.brand,
        title: req.body.title,
        image: req.body.image,
        description: req.body.description,
        price: req.body.price,
        reviews: req.body.reviews,
        rating: req.body.rating,
        type: req.body.type,
        quantity: req.body.quantity,
        size: req.body.size
    });
    try {
        const check = await cart.find({brand:req.body.brand,title:req.body.title})
        console.log(check)
        if (check.length>=1) {
           await cart.deleteMany({"brand":check[0].brand})
            console.log('deleted')
            const savedCart = await post.save();
            res.json(savedCart)
        }else {
            const savedCart = await post.save();
            res.json(savedCart)
        }
    } catch(error) {
        res.json({message: error})
    }
});

router.get('/',async(req,res) => {
    try {
        const posts = await cart.find();
        res.json(posts);
    } catch(err) {
        res.json({mesage: err})
    }
})

router.delete('/:postId', async(req,res) => {
    try {
        const removedPost = await cart.remove({ _id: req.params.postId })
        res.json(removedPost)
    } catch(err) {
        res.json({message:err})
    }
})


module.exports = router;