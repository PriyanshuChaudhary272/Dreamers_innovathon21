const Post = require("../models/Posts");
const User = require("../models/Users");

module.exports.post = async function (req, res) {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
};

//update post
module.exports.update = async function (req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.updateOne({ $set: req.body });
            res.status(200).json("the post has been updated");
        } else {
            res.status(403).json("you can update only your post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
//delete post
module.exports.delete = async function (req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if (post.userId === req.body.userId) {
            await post.deleteOne();
            res.status(200).json("the post has been deleted");
        } else {
            res.status(403).json("you can delete only your post");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};

//apply/withdraw on  a post
module.exports.apply = async function (req, res) {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json("The post has been applied");
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(200).json("The post has been withdrawn");
        }
    } catch (err) {
        res.status(500).json(err);
    }
};
//get a post
module.exports.get = async function (req, res) {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
};
//get all timeline posts
module.exports.timeline = async function (req, res) {
    try {
        // const currentUser = await User.findById(req.body.userId);
        // const userPosts = await Post.find({ userId: currentUser._id });
        // const friendPosts = await Promise.all(
        //     currentUser.followers.map((friendId) => {
        //         return Post.find({ userId: friendId });
        //     })
        // );
        // res.json(userPosts.concat(...friendPosts))

        const posts = await Post.find();
        return res.json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
};