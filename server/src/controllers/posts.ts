import Post from "../models/post";
import {Request, Response} from 'express';
import mongoose from "mongoose";

export const getPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.find() || []
        res.status(200).json(posts.sort((a, b) => +b.createdAt - +a.createdAt))
    } catch (e) {
        res.status(500).send({message: e})
    }
}

export const createPost = async (req: Request, res: Response) => {
    const {body} = req

    try {
        const newPost = await Post.create(body)
        res.status(201).json(newPost)
    } catch (e) {
        res.status(500).send({message: e})
    }
}

export const likePost = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Post with id = ${id} not found`)
    }

    try {
        const post = await Post.findById(id)
        const updatedPost = await Post.findByIdAndUpdate(id, {liked: !post!.liked}, {new: true})
        res.status(201).json(updatedPost)
    } catch (e) {
        res.status(500).send({message: e})
    }
}

export const deletePost = async (req: Request, res: Response) => {
    const {id} = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`Post with id = ${id} not found`)
    }

    try {
        await Post.findByIdAndRemove(id)
        res.status(200).send({message: 'Post deleted successfully'})
    } catch (e) {
        res.status(500).send({message: e})
    }

}
