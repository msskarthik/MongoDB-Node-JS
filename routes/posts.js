const express = require('express');
const router = express.Router();
const mens_products = require('../models/posts.js');

//adds new posts
router.post('/', async(req,res) => {
    const post = new mens_products({
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
        const savedPost = await post.save();
        res.json(savedPost);
    } catch(err) {
        res.json({message: err});
    }

});


//retrieves all posts
router.get('/', async (req,res) => {
    try {
        const posts = await mens_products.find();
        res.json(posts);
    } catch(err) {
        res.json({mesage: err})
    }
});

//specific post
router.get('/:postId', async(req,res) => {
    try {
        const post = await mens_products.findById(req.params.postId)
        res.json(post);
    } catch(err) {
        res.json({ message: err });
    }
});

//delete a post
router.delete('/:postId', async(req,res) => {
    try {
        const removedPost = await mens_products.remove({ _id: req.params.postId })
        res.json(removedPost)
    } catch(err) {
        res.json({message:err})
    }
})

//update a post
router.patch('/:postId', async(req,res) => {
    try {
        const updatedPost = await mens_products.updateOne({_id:req.params.postId},
            { $set:{title: req.body.title} });
            res.json(updatedPost);
    } catch(err) {
        res.json({ message: err })
    }
})


module.exports = router;