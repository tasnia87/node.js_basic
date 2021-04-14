const express = require('express');
const router = express.Router();
const Post = require('../models/Post');



//get all post
router.get('/', async(req, res)=>{
    
    //res.send('I am tasnia') //this will be responded or shown in the localhost:3000
    //console.log('i am tasnia')
    const post = await Post.find()// get all post
    res.json(post)
});
//get a specific post by id
router.get('/:postId', async (req, res) => {

    //res.send('I am tasnia') //this will be responded or shown in the localhost:3000
    //console.log('i am tasnia')
    const post = await Post.findById(req.params.postId)// get all post
    res.json(post)
});

//delete post
router.delete('/:postId', async (req, res) => {
    const post = await Post.remove({ _id: req.params.postId })// get all post
    res.json(post)
});
//update
router.patch('/:postId', async (req, res) => {
    const post = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } }
    )// get all post
    res.json(post)
});
/*router.post('/', function (req, res) {
    
    console.log(req.body)
});*/

router.post('/', async (req, res) => {  //if it gets / it will post or send data from localhost to database
    const post = new Post({
        title: req.body.title, // requested title to postman will be save to database
        description: req.body.description
    });
    try {
        const savedpost = await post.save()
        res.json(savedpost)
            .then(data => {
                res.json(data);
            })
    }

    catch (err) {
        res.json({ message: err })
    }
})
    
module.exports = router;

