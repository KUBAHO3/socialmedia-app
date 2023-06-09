import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.routes.js';

const app = express();

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://social-media-heaven:social-mediaheaven123@realestate.zhwu98f.mongodb.net/';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {})
    .then(() => app.listen(PORT, () => console.log(`Server listening on ${PORT}`)))
    .catch(err => console.log(err.message));

// mongoose.set('useFindAndModify', false);