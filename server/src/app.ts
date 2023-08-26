import express from 'express';
import cors from 'cors'
import postsRouter from './routes/posts'
import mongoose from "mongoose";

const app = express();

const CONNECTION_URL = 'mongodb+srv://malo2dis:malo2dis123@cluster0.krtatpu.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors())

app.use('/posts', postsRouter)

app.get('/', (req, res) => {
    res.send('Hello world');
});

const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }))
    .catch(e => console.log(e))
