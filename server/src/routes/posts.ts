import express from "express";
import {createPost, getPosts, likePost, deletePost} from "../controllers/posts";

const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.patch('/:id/likePost', likePost)
router.delete('/:id', deletePost)

export default router
