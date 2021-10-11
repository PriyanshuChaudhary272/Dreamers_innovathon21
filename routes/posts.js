const express = require('express');
const router = express.Router();
const postController = require('../controllers/post_controller')

// router.get('/',postController.post);



//create a post
router.post('/',postController.post);
//update a post
router.put('/:id',postController.update);
//delete a post
router.delete('/:id',postController.delete);
//like a post
router.put('/:id/apply',postController.apply)
//get a post
router.get('/:id',postController.get);
//get all posts (timeline)
router.get('/timeline/all',postController.timeline);


module.exports = router;