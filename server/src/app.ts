import express from 'express';
import cors from 'cors'
import postsRouter from './routes/posts'
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors())

app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    res.send('Hello world');
});

const PORT = process.env.PORT || 4000;

if (!process.env.CONNECTION_URL) {
    throw new Error('Connection string is empty')
}

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }))
    .catch(e => console.log(e))
