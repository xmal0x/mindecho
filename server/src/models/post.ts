import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    message: String,
    creator: String,
    tags: [String],
    liked: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post', postSchema)

export default Post
